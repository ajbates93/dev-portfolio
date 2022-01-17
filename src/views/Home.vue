<template>
  <div id="home" class="mx-auto w-full">
    <div id="hero" class="mx-auto max-w-screen-xl py-10">
      <div class="hero-title text-white font-bold text-5xl mb-5">Hi, I'm Alex</div>
      <div class="hero-subtitle text-white text-black-700 text-xl">I'm a front-end developer, musician and dog-owner.</div>
      <!-- <div class="hero-icon flex-auto w-1/3"></div>
      <div class="hero-content pt-20 pl-20 flex-auto w-2/3 text-right">
        <div class="hero-title text-white font-bold text-5xl mb-5">Hi, I'm Alex</div>
        <div class="hero-subtitle text-black-700 text-xl">I'm a front-end developer, musician and dog-owner.</div>
        <div class="hero-links py-20">
          <div class="hero-links-section mb-10">
            <p class="text-3xl text-white flex justify-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="ml-2">view my portfolio</span>
            </p>
          </div>
          <div class="hero-links-section">
            <p class="text-3xl text-white flex justify-end items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>  
              <span class="ml-2">get in touch</span>
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style lang="less">
#home {
  position: absolute;
  z-index: 1;
}
</style>