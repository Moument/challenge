<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineComponent, ref } from 'vue'
import { useShopStore } from '@/stores/shop'
</script>
<template>
  <header>
    <div class="container">
      <img
        alt="Logo S. Oliver Challenge"
        class="logo"
        src="@/assets/logo.svg"
        width="112"
        height="32"
      />
      <nav id="main_nav">
        <RouterLink
          v-for="(type, index) in types"
          :key="index"
          :to="{ name: 'type', params: { type: type.url } }"
          >{{ type.name }}</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  name: 'SideHeader',
  components: {
    RouterLink
  },
  data() {
    return {
      types: ref({} as Object)
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
