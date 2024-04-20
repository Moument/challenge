<script setup lang="ts">
import { defineComponent } from 'vue'
import ImageSlider from '@/components/features/ImageSlider.vue'
import ContentTab from '@/components/features/ContentTab.vue'

import IconChlore from '@/components/icons/IconChlore.vue'
import IconDryClean from '@/components/icons/IconDryClean.vue'
import IconIron from '@/components/icons/IconIron.vue'
import IconMachine from '@/components/icons/IconMachine.vue'
import IconTumble from '@/components/icons/IconTumble.vue'

import IconBasket from '@/components/icons/IconBasket.vue'
</script>
<template>
  <div class="product-modal-close" @click="$emit('toggle-modal')">x</div>
  <div class="product-modal-content">
    <div class="product-modal-front grid" v-if="product">
      <ImageSlider :color="selectedColor" />
      <div class="product-modal-info">
        <span v-if="product.isNew" class="age-flag">Brand new</span>
        <h2>{{ product.name }}</h2>
        <div class="product-modal-info-wrapper price">
          <p class="price">{{ product.price }}</p>
          <img src="#" class="brand" alt="#" />
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
              @mouseenter="changeColorName(color.name)"
              @mouseleave="changeColorName(selectedColor.name)"
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
              v-for="(size, index) in getAvailableSizes()"
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
      <ContentTab :tabs="product.productDetails">
        <template #tab-0>
          <h4>{{ product.productDetails[0].title }}</h4>
          <ul>
            <li v-for="(item, index) in product.productDetails[0].content" :key="index">
              <span class="list-title">{{ item.name }}:</span> {{ item.value }}
            </li>
          </ul>
        </template>
        <template #tab-1>
          <h4>{{ product.productDetails[1].title }}</h4>
          <ul>
            <li v-for="(item, index) in product.productDetails[1].content" :key="index">
              <span class="list-title">{{ item.name }}:</span> {{ item.value }}
            </li>
          </ul>
        </template>
        <template #tab-2>
          <div class="material">
            <div
              class="material-content"
              v-for="(subcontent, index) in product.productDetails[2].content.materialWrap"
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
          <div class="care">
            <h4>{{ product.productDetails[2].content.care.title }}</h4>
            <ul>
              <li
                v-for="(subcontent, index) in product.productDetails[2].content.care.content"
                :key="index"
              >
                <component :is="getIconForName(subcontent.name)" /> {{ subcontent.value }}
              </li>
            </ul>
          </div>
        </template>
        <template #tab-3>
          <h4>{{ product.productDetails[3].title }}</h4>
          <div class="text" v-if="product.productDetails[3].certified === true">
            <p>
              WE CARE: Items with other sustainable propertiers that go beyond our minimum standard
              are marked with the WE CARE label.
            </p>
            <h4>ICON Certified sustainable fibre</h4>
            <p>
              When it comes to certain sustainable fibres, we're commited to using natural firbes
              from renewable sources. The raw materials are cultivated via resource-saving methods.
              <small>
                This product support economically, ecologically and socially sustainable cotton
                farming.<br />
                The sourcing if sustainable cotton follows the principal of mass balance. You can
                find more information <a href="#" alt="">here</a>.
              </small>
            </p>
          </div>
        </template>
      </ContentTab>
    </div>
  </div>
  <div class="product-modal-footer">
    <h2>{{ product.name }}</h2>
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
    IconBasket
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    color: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedColor: { ...this.color },
      selectedColorName: this.color.name,
      selectedSize: {
        value: 'Noch keine größe ausgewählt'
      },
      selectedSizeName: 'Noch keine größe ausgewählt',
      availableSizes: []
    }
  },
  methods: {
    updateAvailableSizes() {
      this.availableSizes = this.product.sizes.map((size: string) => ({
        value: size,
        available: this.selectedColor.availableSize.includes(this.product.sizes.indexOf(size) + 1)
      }))
    },
    getAvailableSizes() {
      this.updateAvailableSizes()
      return this.availableSizes
    },
    changeColor(color: Object) {
      this.selectedColor = color
      this.updateAvailableSizes()
    },
    changeColorName(color: Object) {
      this.selectedColorName = color
    },
    changeSizeName(status: boolean, size: any) {
      if (status) {
        this.selectedSizeName = size.value
      } else {
        this.selectedSizeName = this.selectedSize.value
      }
    },
    selectSize(size: any) {
      this.selectedSize = size
    },
    getIconForName(name: string) {
      const iconMap: Record<string, any> = {
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
