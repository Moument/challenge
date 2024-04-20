<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
      <nav>
        <RouterLink to="/">Clothing</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>
