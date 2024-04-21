<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useShopStore, type Types } from '@/stores/shop'
</script>

<template>
  <div id="content">
    <div class="container">
      <h1>Unsere Produkttypen</h1>
      <div class="grid">
        <RouterLink
          v-for="(type, index) in types"
          :key="index"
          class="shop-item"
          :to="{ name: 'type', params: { type: type.url } }"
          >
          {{ type.name }}
        </RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      types: ref({} as Types)
    }
  },
  mounted() {
    this.getTypes()
  },
  methods: {
    async getTypes() {
      try {
        const shopStore = useShopStore()
        await shopStore.fetchTypes()
        this.types = shopStore.types
      } catch (error) {
        console.error('Fehler beim Laden der Typen:', error)
      }
    }
  }
})
</script>
