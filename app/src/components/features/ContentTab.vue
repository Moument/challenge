<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    tabs: {
      type: Object,
      required: true
    }
  })

  interface Tab {
    title: string
    slotName: string
  }

  const activeTab = ref(0)
  const changeTab = (index: number) => {
    activeTab.value = index
  }

  const tabs: Tab[] = props.tabs.map((tab: string, index: number) => ({
    title: tab.title,
    slotName: `tab-${index}`
  }))
</script>
<template>
  <div class="tab-wrapper">
    <div class="tab-header">
      <div class="tab-title" v-for="(tab, index) in tabs" :key="index" :data-tab="index" :class="{ active: activeTab === index }" @click="changeTab(index)">
        {{ tab.title }}
      </div>
    </div>
    <div class="tab-content-wrapper">
      <div v-for="(tab, index) in tabs" :key="index" class="tab-content" :data-tab="index" :class="{ active: activeTab === index }">
        <slot :name="tab.slotName"></slot>
      </div>
    </div>
  </div>
</template>
