<template>
  <div id="home" class="mx-auto">
    <div id="hero" class="flex max-w-screen-xl mx-auto">
      <div class="hero-icon flex-auto w-1/3"></div>
      <div class="hero-content pt-20 pl-20 flex-auto w-2/3 text-right">
        <div class="hero-title text-white font-bold text-5xl mb-5">Hi, I'm Alex</div>
        <div class="hero-subtitle text-black-700 text-xl">I'm a front-end developer, musician and dog-owner.</div>
      </div>
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
  z-index: 1;
  #hero {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 66.66%;
      height: 100%;
      background-color: #76c1b2;
      z-index: 0;
    }
    & > * {
      z-index: 1;
    }
  }
}
</style>