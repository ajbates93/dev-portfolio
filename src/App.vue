<template>
  <Navigation />
  <main class="min-h-screen dark:bg-gray-800 bg-gray-100" role="main" id="main">
    <router-view v-slot="{ Component, route }">
      <transition 
        class="animate__animated animate__faster"
        :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Overlay />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "@/components/Navigation.vue"
import Overlay from "@/components/Overlay.vue"

export default defineComponent({
  components: {
    Navigation,
    Overlay
  }
})
</script>

<style lang="less">
#main {
  overflow: hidden;
}
</style>