<template>
  <aside :style="active ? 'transform: translateX(0)' : 'transform: translateX(100%)'" 
    class="sidebar transition duration-500 fixed right-0 top-0 z-50 h-full w-2/5 origin-right bg-pastel-blue flex flex-col justify-between">
    <div>
      <div id="sidebar-header" class="flex justify-end p-5">
        <a class="border-0 hover:border-transparent cursor-pointer" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-5 h-8 w-8 dark:text-white text-black-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
      </div>
      <ul id="sidebar-links" class="px-10">
        <li v-for="link in items" :key="link.id">
          <router-link @click="$emit('close')" class="text-3xl text-white my-2 inline-block font-bold transition" :to="link.link">{{link.label}}</router-link>
        </li>
      </ul>
    </div>
    <div class="p-10">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <a class="mx-2" href="mailto:me@alexbates.co.uk">me@alexbates.co.uk</a>
      </div>

    </div>
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
        label: 'Portfolio',
        icon: 'portfolio-icon',
        link: '/work'
      },
      {
        id: 3,
        label: 'Contact',
        icon: 'contact-icon',
        link: '/contact'
      },
    ])

    return { items }
  }
})
</script>

<style lang="less" scoped>
a {
  position: relative;
  color: #222;
  overflow: hidden;
  background: linear-gradient(to right, #222, #222 50%,#fff 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 375ms ease;

  &:hover {
    background-position: 0 100%;
  }
}
</style>