<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useShopStore, type Color, type Product, type Products } from '@/stores/shop'
import ItemDetail from '@/components/product/ItemDetail.vue'
</script>

<template>
  <div id="content">
    <div class="container">
      <h1>Unsere {{ category }}</h1>
      <div class="grid">
        <template v-for="product in products" :key="product.id">
          <div class="product-list-item-wrapper grid-12 grid-tablet-6 grid-desktop-4">
            <div
              class="product-list-item"
              @click="openModal(product.url, product.colors[selectedColorIndex[product.id]])"
            >
              <div class="color-image-wrapper">
                <div class="badges" v-if="product.isNew">
                  <div class="new-badge" v-if="product.isNew">BRAND NEW</div>
                </div>
                <img
                  :src="`http://localhost:3000/images/${product.colors[selectedColorIndex[product.id]].path}/${product.colors[selectedColorIndex[product.id]].colorPathName}1.webp`"
                  :alt="product.name"
                  loading="lazy"
                />
              </div>
              <div class="product-list-item">
                <div class="product-list-item-content">
                  <span class="brand"
                    ><img
                      :src="`http://localhost:3000/images/${product.brandLogoPath}.svg`"
                      :alt="product.name + 'Brand logo'"
                  /></span>
                  <h3>{{ product.name }}</h3>
                  <p class="price">{{ product.price }}</p>
                </div>
              </div>
            </div>
            <div class="colors">
              <template v-for="(color, colorIndex) in product.colors" :key="colorIndex">
                <span
                  class="color-circle"
                  @click="changeColor(product.id, colorIndex)"
                  :class="{ active: selectedColorIndex[product.id] === colorIndex }"
                >
                  <span
                    class="color-circle-inner"
                    :style="`background-color: ${color.colorHex};`"
                  ></span>
                </span>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="product-modal-wrapper" v-if="showModal">
        <div class="product-modal container">
          <ItemDetail
            :productName="selectedProduct"
            :color="selectedProductColor"
            @toggle-modal="closeModal()"
          />
        </div>
        <div class="product-modal-background" @click="closeModal()"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'ProductListView',
  components: {
    ItemDetail
  },
  data() {
    return {
      type: this.$router.currentRoute.value.params.type as string,
      category: this.$router.currentRoute.value.params.category as string,
      products: ref({} as Products),
      selectedColorIndex: ref([] as Array<number>),
      showModal: ref(false as boolean),
      selectedProduct: ref('' as string),
      selectedProductColor: ref({} as Color)
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      try {
        const shopStore = useShopStore()
        await shopStore.fetchProducts(this.type, this.category)
        this.products = shopStore.products
        Object.values(this.products).forEach((product: Product, index: number) => {
          if (product.colors) {
            this.selectedColorIndex[index] = 0
          }
        })
      } catch (error) {
        console.error('Fehler beim Laden der Typen:', error)
      }
    },
    changeColor(productIndex: number, colorIndex: number) {
      const selectedColors = [...this.selectedColorIndex]
      selectedColors[productIndex] = colorIndex
      this.selectedColorIndex = selectedColors
    },
    openModal(productName: string, color: Color) {
      this.selectedProduct = productName
      this.selectedProductColor = color
      this.showModal = true
      document.body.classList.add('modal-open')
    },
    closeModal() {
      this.showModal = false
      document.body.classList.remove('modal-open')
    }
  }
})
</script>
