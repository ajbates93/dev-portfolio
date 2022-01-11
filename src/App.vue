<template>
  <Navigation />
  <main role="main" id="main">
    <router-view/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "@/components/Navigation.vue"

export default defineComponent({
  components: {
    Navigation
  }
})
</script>


<style lang="less">
main#main {
  min-height: 100vh;
}
</style>
