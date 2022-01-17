<template>
  <Navigation />
  <main class="min-h-screen dark:bg-gray-800 bg-gray-100" role="main" id="main">
    <router-view v-slot="{ Component, route }">
      <transition 
        :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
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
#main {
  overflow: hidden;
}
</style>