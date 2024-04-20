<script setup lang="ts">
  import ItemList from '@/components/product/ItemList.vue'
  import ProductFilter from '@/components/product/ProductFilter.vue'
  import productsData from '@/assets/products.json'
</script>

<template>
  <div id="content">
    <div class="container">
      <ProductFilter />
    </div>
    <div class="container">
      <div class="grid">
        <ItemList :products="products" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "product-view",
    data() {
      return {
        products: productsData
      }
    }
  })
</script>
