<template>
  <div id="home" class="mx-auto w-full">
    <div id="hero" class="mx-auto my-10 md:my-20 md:mb-40 text-center px-5">
      <div class="hero-title dark:text-white text-pastel-blue font-bold text-7xl mb-5">Hello!</div>
      <div class="hero-title dark:text-white text-pastel-blue font-bold text-7xl mb-5">I'm Alex Bates</div>
      <picture class="hero-picture text-center my-10 block">
        <img class="mx-auto overflow-hidden rounded-full border-4 border-pastel-blue dark:border-white" src="@/assets/images/headshot.jpg" alt="">
      </picture>
      <div class="hero-subtitle dark:text-gray-400 text-black-700 w-full max-w-2xl mx-auto text-xl">I'm a full-stack software developer with a keen passion for building beautiful websites and web applications.</div>
    </div>
    <div id="content" class="p-5 dark:bg-gray-800">
      <div class="hero-bullets my-10 max-w-screen-xl mx-auto">
        <div v-for="(bullet, idx) in bullets" :key="idx" class="hero-bullet flex items-center my-5 animate__animated animate__faster animate__fadeInUp" :class="`animate__delay-${bullet.delay}`">
          <div class="hero-bullet-icon flex-none w-auto pr-10" v-html="bullet.icon"></div>
          <div class="hero-bullet-text dark:text-white text-gray-700 text-lg">{{bullet.content}}</div>
        </div>
        <div class="about-link mt-10">
          <router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg inline-flex items-center animate__animated animate__faster animate__fadeInUp animate__delay-1s" to="/about">
            More about me
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div id="techStack" class="p-5">
      <div class="hero-action py-10 mx-auto max-w-screen-xl">
        <div>
          <div class="text-4xl font-bold text-white mb-10">My Tech Stack</div>
          <div class="grid grid-cols-3 gap-10">
            <div class="bg-gray-700 hover:bg-blue-500 rounded-md py-2 px-4 text-gray-100 text-lg">
              <div class="mb-2 text-2xl font-bold text-gray-100 flex justify-between items-center">
                Front-end
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div v-for="(tech, idx) in frontEndTechs" :key="idx" class="inline">
                {{tech.content}}<span v-if="idx !== frontEndTechs.length - 1">, </span> 
              </div>
            </div>
            <div class="bg-gray-700 hover:bg-blue-500 rounded-md py-2 px-4 text-gray-100 text-lg">
              <div class="mb-2 text-2xl font-bold text-gray-100 flex justify-between items-center">
                Back-end
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <div v-for="(tech, idx) in backEndTechs" :key="idx" class="inline">
                {{tech.content}}<span v-if="idx !== frontEndTechs.length - 1">, </span> 
              </div>
            </div>
            <div class="bg-gray-700 hover:bg-blue-500 rounded-md py-2 px-4 text-gray-100 text-lg">
              <div class="mb-2 text-2xl font-bold text-gray-100 flex justify-between items-center">
                CI/CD
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <div v-for="(tech, idx) in devopsTechs" :key="idx" class="inline">
                {{tech.content}}<span v-if="idx !== frontEndTechs.length - 1">, </span> 
              </div>
            </div>
          </div>
        </div>
        <!-- <router-link tag="button" to="/work" class="inline-block sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-3 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">SEE MY WORK</router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { getAboutBullets, getTechStack } from '../composables'
  const bullets = ref(getAboutBullets())
  const techStack = ref(getTechStack())
  const frontEndTechs = computed(() => {
    return techStack.value.filter(x => x.category == 0)
  })
  const backEndTechs = computed(() => {
    return techStack.value.filter(x => x.category == 1)
  })
  const devopsTechs = computed(() => {
    return techStack.value.filter(x => x.category == 2)
  })
</script>

<style lang="less">
.hero-bullet {
  --animate-delay: 0.25s;
}
</style>