<template>
  <article @click="toggleActive" class="p-5 rounded-md dark:bg-gray-900 bg-gray-100 animate__animated animate__faster animate__fadeInUp animate__delay-1s" id="github">
    <div class="text-white text-2xl font-bold mb-5">{{title}}</div>
    <div class="dark:text-gray-400 text-black-700 text-lg mb-10">{{summary}}</div>
    <a :href="link" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</a>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    title: String,
    summary: String,
    link: String
  },
  setup(props) {
    const active = ref(false)

    return { 
      active 
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    }
  }
})
</script>
