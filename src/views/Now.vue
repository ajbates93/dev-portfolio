<template>
  <div id="about" class="mx-auto w-full max-w-screen-xl">
    <div id="hero" class="mx-auto max-w-screen-xl py-10">
      <div class="hero-title dark:text-white text-pastel-blue font-bold text-5xl mb-5">{{title}}</div>
      <div class="hero-subtitle dark:text-gray-400 text-black-700 text-xl">What I'm up to right at this minute.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const title = "Now"

    return { title }
  },
})
</script>
