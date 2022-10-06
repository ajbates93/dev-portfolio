<template>
  <div id="home" class="mx-auto w-full">
    <div id="hero" class="mx-auto my-10 md:my-20 md:mb-40 text-center px-5">
      <div class="hero-title dark:text-white text-pastel-blue font-bold text-7xl mb-5">Hello!</div>
      <div class="hero-title dark:text-white text-pastel-blue font-bold text-7xl mb-5">I'm Alex Bates</div>
      <picture class="hero-picture text-center my-10 block">
        <img class="mx-auto overflow-hidden rounded-full border-4 border-slate-800" src="@/assets/images/headshot.jpg" alt="">
      </picture>
      <div class="hero-subtitle dark:text-gray-400 text-black-700 w-full max-w-2xl mx-auto text-xl">I'm a full-stack software developer with a keen passion for building beautiful websites and web applications.</div>
    </div>
    <div id="examples" class="grid grid-cols-2">
      <div class="picture-example relative group">
        <picture>
          <img class="w-full" src="@/assets/images/image-1.jpg" />
        </picture>
        <div class="overlay absolute w-full h-full bg-black top-0 left-0 opacity-0 group-hover:opacity-30 transition"></div>
        <div class="bg-transparent w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <router-link to="/" class="sm:w-auto hover font-bold text-xl tracking-wide bg-pastel-blue rounded-xl text-white py-1 px-4 hover:bg-gray-800 hover:text-pastel-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</router-link>
        </div>
      </div>
      <div class="picture-example relative group">
        <picture>
          <img class="w-full" src="@/assets/images/image-3.jpg" />
        </picture>
        <div class="overlay absolute w-full h-full bg-black top-0 left-0 opacity-0 group-hover:opacity-30 transition"></div>
        <div class="bg-transparent w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <router-link to="/" class="sm:w-auto hover font-bold text-xl tracking-wide bg-pastel-blue rounded-xl text-white py-1 px-4 hover:bg-gray-800 hover:text-pastel-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</router-link>
        </div>
      </div>
      <div class="picture-example relative group">
        <picture>
          <img class="w-full" src="@/assets/images/image-4.jpg" />
        </picture>
        <div class="overlay absolute w-full h-full bg-black top-0 left-0 opacity-0 group-hover:opacity-30 transition"></div>
        <div class="bg-transparent w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <router-link to="/" class="sm:w-auto hover font-bold text-xl tracking-wide bg-pastel-blue rounded-xl text-white py-1 px-4 hover:bg-gray-800 hover:text-pastel-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</router-link>
        </div>
      </div>
      <div class="picture-example relative group">
        <picture>
          <img class="w-full" src="@/assets/images/image-2.jpg" />
        </picture>
        <div class="overlay absolute w-full h-full bg-black top-0 left-0 opacity-0 group-hover:opacity-30 transition"></div>
        <div class="bg-transparent w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <router-link to="/" class="sm:w-auto hover font-bold text-xl tracking-wide bg-pastel-blue rounded-xl text-white py-1 px-4 hover:bg-gray-800 hover:text-pastel-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</router-link>
        </div>
      </div>
    </div>
    <div id="content" class="p-5">
      <div class="hero-bullets mt-20 my-10 max-w-screen-xl mx-auto">
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
      <div class="hero-action py-10">
        <router-link tag="button" to="/work" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-3 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">SEE MY WORK</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      bullets: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 dark:text-white text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
          content: "I'm a Javascript developer first and foremost. Having built multiple large and small scale applications using different Javascript frameworks and libraries, I'm comfortable adapting to whatever modern environment I find myself working in.",
          delay: '1s'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 dark:text-white text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
          content: "I'm comfortable using Node, NPM and general terminal manipulation.",
          delay: '2s'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 dark:text-white text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
          content: "I can work well in both large and small teams, and also enjoy working solo when required.",
          delay: '3s'
        }
      ]
    }
  }
});
</script>

<style lang="less">
.hero-bullet {
  --animate-delay: 0.25s;
}
</style>