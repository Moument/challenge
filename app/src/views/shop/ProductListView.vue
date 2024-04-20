<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useShopStore, type Product, type Products } from '@/stores/shop'
import ProductFilter from '@/components/product/ProductFilter.vue'
import ItemDetail from '@/components/product/ItemDetail.vue';
</script>

<template>
  <div id="content">
    <div class="container">
      <ProductFilter />
    </div>
    <div class="container">
      <div class="grid">
        <template v-for="(product, productIndex) in products" :key="productIndex">
          <div class="product-list-item-wrapper">
            <div class="product-list-item" @click="openModal(product, product.colors[selectedColorIndex[productIndex]])">
              <div class="color-image-wrapper">
                <img
                  :src="`http://localhost:3000/images/${product.colors[selectedColorIndex[productIndex]].path}/${product.colors[selectedColorIndex[productIndex]].colorPathName}1.webp`"
                  :alt="product.name"
                  loading="lazy"
                />
              </div>
              <div class="product-list-item">
                <div class="product-list-item-content">
                  <span class="brand">{{ product.brandId }}</span>
                  <h3>{{ product.name }}</h3>
                  <p class="price">{{ product.price }}</p>
                </div>
              </div>
            </div>
            <div class="colors">
              <span class="color-circle" v-for="(color, colorIndex) in product.colors" :key="colorIndex" @click="changeColor(productIndex, colorIndex)">
                <span class="color-circle-inner" :style="`background-color: ${color.colorHex};`"></span>
              </span>
            </div>
          </div>
        </template>
      </div>
      <div class="product-modal-wrapper" v-if="showModal">
        <div class="product-modal container">
          <ItemDetail :product="selectedProduct" :color="selectedProductColor" @toggle-modal="closeModal()" />
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
    ItemDetail,
    ProductFilter
  },
  data() {
    return {
      type: this.$router.currentRoute.value.params.type as string,
      category: this.$router.currentRoute.value.params.category as string,
      products: ref([] as Products[]),
      colors: ref([] as Array<Object>),
      selectedColorIndex: ref([] as Number[]),
      showModal: ref(false as boolean),
      selectedProduct: ref({} as Product[]),
      selectedProductColor: ref({} as Object[])
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      try {
        const shopStore = useShopStore()
        await shopStore.fetchProducts(this.type, this.category)
        this.products = shopStore.products
        Object.values(this.products).forEach((product: Products, index: number) => {
          if (product.colors.length > 0) {
            this.colors = product.colors
            this.selectedColorIndex[index] = 0
          }
        });
      } catch (error) {
        console.error('Fehler beim Laden der Typen:', error)
      }
    },
    changeColor(productIndex: number, colorIndex: number) {
      this.selectedColorIndex.splice(productIndex, 1, colorIndex) 
    },
    openModal(product: Product, color: Object) {
      console.log(product, color)
      this.selectedProduct = product
      this.selectedProductColor = color
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
})
</script>