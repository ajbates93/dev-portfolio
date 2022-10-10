<template>
  <article @click="toggleActive" class="group p-6 rounded-md bg-gray-200 dark:bg-gray-800 bg-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 animate__animated animate__faster animate__fadeInUp ease-in-out" :class="[`animate__delay-${id}s`, active ? 'col-span-2' : '']" id="github">
    <div class="text-pastel-blue dark:text-white text-2xl font-bold mb-5">{{title}}</div>
    <div v-if="tags" class="flex my-5">
      <div class="rounded-xl bg-gray-200 bg-gray-300 group-hover:bg-gray-400 dark:bg-gray-700 dark:group-hover:bg-gray-600 group-hover:text-white text-gray-600 dark:text-gray-200 text-sm px-3 py-1 mr-2" v-for="tag, idx in tags" :key="idx">
        {{ tag }}
      </div>
    </div>
    <div class="dark:text-gray-400 text-black-700 text-lg">{{summary}}</div>
    <div class="mt-10"><a :href="link" class="sm:w-auto text-lg font-semibold bg-pastel-blue rounded-lg text-white py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-violet-500">View</a></div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    id: Number,
    title: String,
    summary: String,
    link: String,
    tags: Array<String>
  },
  setup() {
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
