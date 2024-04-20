<script setup lang="ts">
  import { defineComponent } from 'vue'
  import ItemDetail from '@/components/product/ItemDetail.vue'
</script>
<template>
  <template v-for="product in products" :key="product">
    <div class="product-list-item-wrapper">
      <div class="product-list-item" @click="toggleModal">
        <img :src="imagePath" :alt="product.name" />
        <div class="product-list-item-content">
          <span class="brand">{{ product.brandId }}</span>
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }}</p>
        </div>
      </div>
      <div class="colors">
        <span v-for="(color, index) in product.colors" :key="index" class="color-circle" :class="{ active: selectedColor.name === color.name }" @click="changeColor(color)">
          <span class="color-circle-inner" :style="`background-color: ${color.colorHex};`"></span>
        </span>
      </div>
    </div>

    <div class="product-modal-wrapper" v-if="showModal">
      <div class="product-modal container">
        <ItemDetail :product="product" :color="selectedColor" @toggle-modal="toggleModal()" />
      </div>
      <div class="product-modal-background" @click="toggleModal"></div>
    </div>
  </template>
</template>

<script lang="ts">
  export default defineComponent({
    name: "item-list",
    props: {
      products: Object
    },
    data() {
      return {
        showModal: false,
        colors: [],
        selectedColor: {
          name: ''
        },
        imagePath: ''
      }
    },
    created() {
      this.getColors()
      this.changeColor(this.colors[0])
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      changeColor(color: { path: string, colorPathName: string, name: string }) {
        const path = color.path
        const colorName = color.colorPathName

        this.selectedColor = color

        this.imagePath = `http://localhost:3000/images/${path}/${colorName}1.webp`;
      },
      getColors() {
        if (this.products && typeof this.products === 'object') {
          for (const key in this.products) {
            if (Object.prototype.hasOwnProperty.call(this.products, key)) {
              const product = this.products[key];
              if (product.colors && Array.isArray(product.colors)) {
                product.colors.forEach((color: never) => this.colors.push(color));
              }
            }
          }
        }
      }
    }
  })
</script>