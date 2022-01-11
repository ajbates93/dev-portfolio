<template>
  <nav class="bg-slate-50 py-7 px-2 mx-auto max-w-screen-xl">
    <ul class="text-right">
      <router-link class="text-white font-bold mr-5 text-2xl" as="li" to="/">home</router-link>
      <router-link class="text-white font-bold mr-5 text-2xl" as="li" to="/about">about</router-link>
      <router-link class="text-white font-bold mr-5 text-2xl" as="li" to="/work">work</router-link>
      <router-link class="text-white font-bold text-2xl" as="li" to="/contact">contact</router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="less">
nav {
  z-index: 1;
  position: relative;
}
</style>