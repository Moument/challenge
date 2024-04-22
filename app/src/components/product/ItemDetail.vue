<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import ImageSlider from '@/components/features/ImageSlider.vue'

import IconChlore from '@/components/icons/IconChlore.vue'
import IconDryClean from '@/components/icons/IconDryClean.vue'
import IconIron from '@/components/icons/IconIron.vue'
import IconMachine from '@/components/icons/IconMachine.vue'
import IconTumble from '@/components/icons/IconTumble.vue'
import IconQr from '@/components/icons/IconQr.vue'
import IconShirt from '@/components/icons/IconShirt.vue'
import IconClose from '@/components/icons/IconClose.vue'

import IconBasket from '@/components/icons/IconBasket.vue'
import { useShopStore, type Color, type Product, type Size } from '@/stores/shop'
</script>
<template>
  <div class="product-modal-close" @click="$emit('toggle-modal')"><IconClose /></div>
  <div class="product-modal-content">
    <div class="product-modal-front grid" v-if="product">
      <div class="grid-12 grid-tablet-7">
        <ImageSlider :color="selectedColor" />
      </div>
      <div class="product-modal-info grid-12 grid-tablet-5">
        <span v-if="product.isNew" class="age-flag">Brand new</span>
        <h3>{{ product.name }}</h3>
        <div class="product-modal-info-wrapper price">
          <p class="price">{{ product.price }}</p>
          <img
            :src="`http://localhost:3000/images/${product.brandLogoPath}.svg`"
            :alt="product.name + 'Brand logo'"
          />
        </div>
        <div class="product-modal-info-wrapper">
          <p class="color">
            Color: <strong class="color-name">{{ selectedColorName }}</strong>
          </p>
          <div class="icon-wrapper colors">
            <div
              class="color-image icon"
              v-for="(color, index) in product.colors"
              :key="index"
              :class="{ active: selectedColor.name === color.name }"
              @mouseenter="changeColorName(color)"
              @mouseleave="changeColorName(selectedColor)"
              @click="changeColor(color)"
            >
              <img
                :src="`http://localhost:3000/images/${color.path}/color_showcase/${color.colorPathName}.webp`"
                alt="#"
              />
            </div>
          </div>
        </div>
        <div class="product-modal-info-wrapper">
          <p class="size">
            Size: <strong class="color-name">{{ selectedSizeName }}</strong>
          </p>
          <div class="icon-wrapper sizes">
            <div
              class="size-pill icon"
              v-for="(size, index) in availableSizes"
              :key="index"
              @click="selectSize(size)"
              @mouseenter="changeSizeName(true, size)"
              @mouseleave="changeSizeName(false, selectedSize)"
              :class="{ available: size.available, active: size.value === selectedSize.value }"
            >
              {{ size.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-modal-desc" v-if="product">
      <div class="tab-wrapper">
        <div class="tab-header">
          <div
            class="tab-title"
            v-for="(tab, index) in product.productDetails"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="changeTab(index)"
          >
            {{ tab.title }}
          </div>
        </div>
        <div class="tab-content-wrapper">
          <div
            class="tab-content"
            v-for="(tab, index) in product.productDetails"
            :key="index"
            :class="{ active: activeTab === index }"
          >
            <template v-if="index === 0">
              <h4>{{ tab.title }}</h4>
              <div class="grid">
                <div class="grid-8">
                  <ul>
                    <li v-for="(item, index) in tab.content" :key="index">
                      <template v-if="item.name !== 'EAN' && item.name !== 'Article Number'">
                        <span class="list-title">{{ item.name }}:</span>
                        {{ item.value }}
                      </template>
                    </li>
                  </ul>
                  <div
                    class="icon-list"
                    v-if="
                      tab.content.some(
                        (item: any) => item.name === 'EAN' || item.name === 'Article Number'
                      )
                    "
                  >
                    <div class="qr-icon"><IconQr /></div>
                    <ul>
                      <template v-for="(item, index) in tab.content" :key="index">
                        <li v-if="item.name === 'EAN' || item.name === 'Article Number'">
                          {{ item.value }}
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
                <div class="grid-4">
                  <div class="overlapping-images">
                    <img
                      :src="`http://localhost:3000/images/${selectedColor.path}/${selectedColor.colorPathName}5.webp`"
                      :alt="product.name + ' ' + selectedColor.name + ' 1'"
                    />
                    <img
                      :src="`http://localhost:3000/images/${selectedColor.path}/${selectedColor.colorPathName}1.webp`"
                      :alt="product.name + ' ' + selectedColor.name + ' 2'"
                    />
                  </div>
                </div>
              </div>
            </template>
            <template v-if="index === 1">
              <h4>{{ tab.title }}</h4>
              <ul>
                <li v-for="(item, index) in tab.content" :key="index">
                  <span class="list-title">{{ item.name }}:</span>
                  {{ item.value }}
                </li>
              </ul>
            </template>
            <template v-if="index === 2">
              <div class="grid">
                <div
                  class="grid-6"
                  v-for="(subcontent, index) in tab.content.materialWrap"
                  :key="index"
                >
                  <h4>{{ subcontent.title }}</h4>
                  <ul>
                    <li v-for="(item, index) in subcontent.content" :key="index">
                      <span class="list-title">{{ item.name }}</span
                      >: {{ item.value }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="grid">
                <div class="grid-12 care">
                  <h4>{{ tab.content.care.title }}</h4>
                  <ul>
                    <li v-for="(subcontent, index) in tab.content.care.content" :key="index">
                      <component :is="getIconForName(subcontent.name)" /> {{ subcontent.value }}
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <template v-if="index === 3">
              <div class="grid">
                <div class="grid-12 grid-tablet-6">
                  <div class="text" v-if="tab.certified === true">
                    <p>
                      WE CARE: Items with other sustainable propertiers that go beyond our minimum
                      standard are marked with the WE CARE label.
                    </p>
                    <h4 class="headline-icon-wrapper">
                      <div class="headline-icon">
                        <IconShirt />
                      </div>
                      Certified sustainable fibre
                    </h4>
                    <p>
                      When it comes to certain sustainable fibres, we're commited to using natural
                      firbes from renewable sources. The raw materials are cultivated via
                      resource-saving methods.<br />
                      <small>
                        This product support economically, ecologically and socially sustainable
                        cotton farming.<br />
                        The sourcing if sustainable cotton follows the principal of mass balance.
                        You can find more information <a href="#" alt="link">here</a>.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product-modal-footer">
    <h3>{{ product.name }}</h3>
    <button class="button button-primary">Add to Cart <IconBasket /></button>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'ProductDetailView',
  emits: ['toggle-modal'],
  components: {
    IconChlore,
    IconDryClean,
    IconIron,
    IconMachine,
    IconTumble,
    IconBasket,
    IconShirt,
    IconQr
  },
  props: {
    productName: {
      type: String,
      required: true
    },
    color: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      type: this.$router.currentRoute.value.params.type as string,
      category: this.$router.currentRoute.value.params.category as string,
      product: ref({} as Product),
      selectedColor: ref(this.color as Color),
      selectedColorName: ref(this.color.name as string),
      selectedSize: ref({ value: 'Noch keine größe ausgewählt' } as Size),
      selectedSizeName: ref('Noch keine größe ausgewählt' as string),
      availableSizes: ref([] as Size[]),
      activeTab: ref(0 as number)
    }
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      try {
        const shopStore = useShopStore()
        await shopStore.fetchProduct(this.type, this.category, this.productName)
        this.product = shopStore.product
        this.getAvailableSizes()
      } catch (error) {
        console.error('Fehler beim Laden der Typen:', error)
      }
    },
    updateAvailableSizes() {
      const sizes = this.product.sizes
      const sizesInColor = this.selectedColor.availableSize
      this.availableSizes = sizes.map((size: string) => ({
        value: size,
        available: sizesInColor.includes(sizes.indexOf(size) + 1)
      }))
    },
    getAvailableSizes() {
      this.updateAvailableSizes()
    },
    changeColor(color: Color) {
      this.selectedColor = color
      this.updateAvailableSizes()
    },
    changeColorName(color: Color) {
      this.selectedColorName = color.name
    },
    changeSizeName(status: boolean, size: Size) {
      if (status) {
        this.selectedSizeName = size.value
      } else {
        this.selectedSizeName = this.selectedSize.value
      }
    },
    selectSize(size: any) {
      this.selectedSize = size
    },
    changeTab(index: number) {
      this.activeTab = index
    },
    getIconForName(name: string) {
      const iconMap: Record<string, Object> = {
        washing: IconMachine,
        bleach: IconChlore,
        ironing: IconIron,
        tumble: IconTumble,
        dryCleaning: IconDryClean
      }
      return iconMap[name]
    }
  }
})
</script>
