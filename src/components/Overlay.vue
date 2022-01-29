<template>
  <div class="fixed w-full h-full top-0 left-0 z-40 bg-black transition duration-500" :class="active ? 'opacity-60 visible' : 'opacity-0 invisible'"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const active = computed(() => store.state.overlay)

    return {
      active
    }
  },
})
</script>
