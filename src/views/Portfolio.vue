<template>
  <div id="portfolio" class="mx-auto w-full">
    <div id="hero" class="mx-auto max-w-screen-xl py-10">
      <div class="hero-title text-white font-bold text-5xl mb-5">My work</div>
      <div class="hero-subtitle dark:text-gray-400 text-black-700 text-xl">A few examples of what I get up to both in work and play.</div>
      <section id="workGrid" class="mt-20 grid gap-5 grid-cols-2">
        <PortfolioItem v-for="(item, idx) in workItems" :key="idx" 
          :title="item.title" :summary="item.summary" :link="item.link" />
        <!-- <article class="p-5 rounded-md dark:bg-gray-900 bg-gray-100 animate__animated animate__faster animate__fadeInUp animate__delay-1s" id="github">
          <div class="text-white text-2xl font-bold mb-5">Github</div>
          <div class="dark:text-gray-400 text-black-700 text-lg mb-10">text about title.</div>
          <a href="https://github.com/ajbates93" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</a>
        </article>
        <article class="p-5 rounded-md dark:bg-gray-900 bg-gray-100 animate__animated animate__faster animate__fadeInUp animate__delay-2s" id="github">
          <div class="text-white text-2xl font-bold mb-5">Github</div>
          <div class="dark:text-gray-400 text-black-700 text-lg mb-10">text about title.</div>
          <a href="https://github.com/ajbates93" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</a>
        </article>
        <article class="p-5 rounded-md dark:bg-gray-900 bg-gray-100 animate__animated animate__faster animate__fadeInUp animate__delay-3s" id="github">
          <div class="text-white text-2xl font-bold mb-5">Github</div>
          <div class="dark:text-gray-400 text-black-700 text-lg mb-10">text about title.</div>
          <a href="https://github.com/ajbates93" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</a>
        </article>
        <article class="p-5 rounded-md dark:bg-gray-900 bg-gray-100 animate__animated animate__faster animate__fadeInUp animate__delay-4s" id="github">
          <div class="text-white text-2xl font-bold mb-5">Github</div>
          <div class="dark:text-gray-400 text-black-700 text-lg mb-10">text about title.</div>
          <a href="https://github.com/ajbates93" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</a>
        </article> -->
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PortfolioItem from '../components/portfolio/PortfolioItem.vue'

interface itemStructure {
  title: string,
  summary: string,
  link: string
}

const items: itemStructure[] = [
  {
    title: 'Github',
    summary: 'text about title.',
    link: 'https://github.com/ajbates93'
  },
  {
    title: 'Github',
    summary: 'text about title.',
    link: 'https://github.com/ajbates93'
  },
  {
    title: 'Github',
    summary: 'text about title.',
    link: 'https://github.com/ajbates93'
  },
  {
    title: 'Github',
    summary: 'text about title.',
    link: 'https://github.com/ajbates93'
  }
]

export default defineComponent({
  setup() {
    const workItems: itemStructure[] = ref([])
    items.forEach(x => workItems.value.push(x))
    workItems.value.push(items)
    return workItems
  },
  methods: {

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