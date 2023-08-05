<template>
  <VSpace />

  <div class="flex h-7">
    <div class="text-xl">
      {{ title }}
    </div>
  </div>

  <hr class="my-1 py-1 border-t-2 border-black">
</template>

<script setup>
import VSpace from './VSpace.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
</style>
