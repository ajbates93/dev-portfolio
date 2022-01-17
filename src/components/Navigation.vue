<template>
  <nav class="bg-gray-800 py-7 px-2">
    <div class="nav-container mx-auto max-w-screen-xl text-2xl flex justify-between">
      <router-link class="text-white font-bold" as="a" to="/">alex bates</router-link>
      <ul class="text-right">
        <router-link class="text-white font-bold mr-5 text-2xl hover:text-black" as="li" to="/">home</router-link>
        <router-link class="text-white font-bold mr-5 text-2xl" as="li" to="/about">about</router-link>
        <router-link class="text-white font-bold mr-5 text-2xl" as="li" to="/work">work</router-link>
        <router-link class="text-white font-bold text-2xl" as="li" to="/contact">contact</router-link>
      </ul>
    </div>
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

  a:hover,
  a.router-link-active {
    border-bottom: 2px solid #76abc1
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
}
</style>