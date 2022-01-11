<template>
  <nav>
    <ul>
      <router-link class="text-white" as="li" to="/">Home</router-link>
      <router-link class="text-white" as="li" to="/about">About</router-link>
      <router-link class="text-white" as="li" to="/work">Work</router-link>
      <router-link class="text-white" as="li" to="/contact">Contact</router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>