<template>
  <div id="portfolio" class="mx-auto w-full">
    <div id="hero" class="mx-auto max-w-screen-xl py-10">
      <div class="hero-title text-pastel-blue dark:text-white font-bold text-5xl mb-5">My work</div>
      <div class="hero-subtitle dark:text-gray-400 text-black-700 text-xl">A few examples of what I get up to both in work and play.</div>
      <section id="workGrid" class="mt-20 grid gap-5 grid-cols-2 grid-rows-2">
        <PortfolioItem v-for="(item, idx) in workItems" :key="idx" 
          :title="item.title" :summary="item.summary" :link="item.link" 
          :id="item.id" :tags="item.tags" :imageURL="item.imageURL" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PortfolioItem from '../components/portfolio/PortfolioItem.vue'
import { IPortfolioItem } from '../utils/types'

const items: IPortfolioItem[] = [
  {
    id: 1,
    title: 'RambleOn',
    summary: 'Website that users can find walking/running routes with good pubs/restaurants either at the start, halfway through or at the end of.',
    link: 'https://github.com/ajbates93',
    tags: ['Javascript', 'Vue', 'Tailwind', 'Vite'],
    imageURL: ''
  },
  {
    id: 2,
    title: 'Meldle',
    summary: 'A simple Wordle clone with share facilities, statistics & more.',
    link: 'https://github.com/ajbates93/vue-meldle',
    tags: ['Javascript', 'Vue', 'Tailwind', 'Vite'],
    imageURL: ''
  },
  {
    id: 3,
    title: 'Morning Routine Logger',
    summary: 'A CRUD application used for tracking morning routine exercises.',
    link: 'https://github.com/ajbates93/morning-routine-logger',
    tags: ['Javascript', 'Vue', 'Pinia', 'PostgreSQL', 'UnoCSS', 'Vite'],
    imageURL: ''
  },
  {
    id: 4,
    title: 'Coming soon...',
    summary: '',
    link: 'https://github.com/ajbates93',
    tags: [''],
    imageURL: ''
  }
]

export default defineComponent({
  setup() {
    const workItems = ref(items)
    return { workItems }
  },
  components: {
    PortfolioItem
  }
})
</script>


<style lang="less">
#portfolio {
  position: absolute;
  z-index: 1;
}
#workGrid {
  .animate__animated {
    --animate-delay: 0.25s;
  }
}
</style>