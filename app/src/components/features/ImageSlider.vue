<script setup lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
</script>

<template>
  <div class="image-slider">
    <div class="slider-nav">
      <div class="left" @click="changeSlide(-1)"></div>
      <div class="right" @click="changeSlide(+1)"></div>
    </div>
    <img :src="imagePath" alt="">
    <div class="slider-bullets" v-if="imageCount > 1">
      <span v-for="index in imageCount" :key="index" :class="{ bullet: true, active: currentSlide === index }" @click="getSlide(index)"></span>
    </div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: "image-slider",
    props: {
      color: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        imageCount: 0,
        imagePath: '',
        currentSlide: 1
      }
    },
    mounted() {
      this.getImageCount()
      this.getSlide(this.currentSlide)
    },
    watch: {
      color: {
        handler() {
          this.getImages(this.color.path, this.color.colorPathName, this.currentSlide);
        },
        immediate: true
      }
    },
    methods: {
      async getImageCount() {
        try {
          const response = await axios.get(`http://localhost:3000/images/count/${this.color.path}`)
          this.imageCount = response.data.count
        } catch (error) {
          console.error('Fehler beim Abrufen der Bildanzahl:', error)
        }
      },
      changeSlide(direction: number) {
        const prev = -1;
        const next = 1;
        if (!(direction === prev && this.currentSlide === 1) && !(direction === next && this.currentSlide === this.imageCount)) {
          const newIndex = this.currentSlide + direction
          this.getSlide(newIndex)
        }
      },
      getSlide(index: number) {
        this.currentSlide = index
        this.getImages(this.color.path, this.color.colorPathName, index)
      },
      getImages(path: string, name: string, nmbr: number) {
        this.imagePath = `http://localhost:3000/images/${path}/${name}${nmbr}.webp`;
      }
    }
  })
</script>
