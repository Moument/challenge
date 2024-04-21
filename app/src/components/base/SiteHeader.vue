<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineComponent, ref } from 'vue'
import { useShopStore, type Types } from '@/stores/shop'
</script>
<template>
  <header>
    <div class="container">
      <RouterLink to="/">
        <img
          alt="Logo S. Oliver Challenge"
          class="logo"
          src="@/assets/logo.svg"
          width="112"
          height="32"
        />
      </RouterLink>
      <nav id="main_nav">
        <RouterLink
          v-for="(type, index) in types"
          :key="index"
          :to="{ name: 'type', params: { type: type.url } }"
          >
          <span class="link">{{ type.name }}</span>
        </RouterLink
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
