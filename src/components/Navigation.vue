<template>
  <nav class="dark:bg-gray-800 bg-gray-200 py-7 px-2">
    <div class="nav-container mx-auto max-w-screen-xl text-2xl flex justify-end items-center">
      <router-link class="dark:text-white text-gray-700 font-bold mr-auto border-b-pastel-blue border-b-2" as="a" to="/">alex bates</router-link>
      <ul class="text-right">
        <router-link class="dark:text-white text-gray-700 font-bold mr-5 text-2xl hover:border-b-pastel-blue hover:border-b-2" as="li" to="/">home</router-link>
        <router-link class="dark:text-white text-gray-700 font-bold mr-5 text-2xl" as="li" to="/about">about</router-link>
        <router-link class="dark:text-white text-gray-700 font-bold mr-5 text-2xl" as="li" to="/work">work</router-link>
        <router-link class="dark:text-white text-gray-700 font-bold text-2xl" as="li" to="/contact">contact</router-link>
      </ul>
      <a @click="toggleTheme" class="border-0 hover:border-transparent cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-5 h-8 w-8 dark:text-yellow-300 text-black-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    toggleTheme() {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        localStorage.theme = 'light'
      } else {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      }
    }
  }
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