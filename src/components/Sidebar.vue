<template>
  <aside :style="active ? 'transform: translateX(0)' : 'transform: translateX(100%)'" class="sidebar transition duration-500 fixed right-0 top-0 z-50 h-full w-2/5 origin-right bg-pastel-blue">
    <div id="sidebar-header" class="flex justify-end p-5">
      <a class="border-0 hover:border-transparent cursor-pointer" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-5 h-8 w-8 dark:text-white text-black-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </a>
    </div>
    <ul id="sidebar-links">
      <li v-for="link in items" :key="link.id">
        <router-link :to="link.link">{{link.label}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

interface Link {
  label: string,
  icon: string,
  link: string
}

export default defineComponent({
  props: {
    active: Boolean
  },
  setup() {
    const items: Ref<Array<Link>> = ref([
      {
        id: 1,
        label: 'Home',
        icon: 'home-icon',
        link: '/'
      },
      {
        id: 2,
        label: 'About',
        icon: 'about-icon',
        link: '/about'
      },
      {
        id: 3,
        label: 'Portfolio',
        icon: 'portfolio-icon',
        link: '/work'
      },
      {
        id: 4,
        label: 'Contact',
        icon: 'contact-icon',
        link: '/contact'
      },
    ])

    return { items }
  }
})
</script>
