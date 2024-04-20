<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useShopStore, type Categories } from '@/stores/shop'
</script>

<template>
  <div id="content">
    <div class="container">
      <h1>Unsere Produktkategorien</h1>
      <div class="grid">
        <RouterLink
          v-for="(category, index) in categories"
          :key="index"
          :to="{ name: 'category', params: { type: type, category: category.url } }"
          >{{ category.name }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CategoryView',
  data() {
    return {
      type: this.$router.currentRoute.value.params.type as string,
      categories: ref({} as Categories[])
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    async getCategories() {
      try {
        const shopStore = useShopStore()
        await shopStore.fetchCategories(this.type)
        this.categories = shopStore.categories
      } catch (error) {
        console.error('Fehler beim Laden der Typen:', error)
      }
    }
  }
})
</script>
