<template>
  <VSpace :size="1"></VSpace>

  <div class="flex justify-between">
    <div>
      <span class="font-black">{{ school }}</span><span>, {{ location }}</span>
    </div>
    <div>
      <span>{{ period }}</span>
    </div>
  </div>

  <div>
    <span class="italic">{{ degree }}</span><span class="inline-block w-1"></span><span> {{ introduction }}</span>
  </div>
</template>

<script setup>
import { toRef } from 'vue'
import VSpace from './VSpace.vue'

const props = defineProps({
  education: {
    type: Object,
    require: true,
  },
})

const {
  school,
  location,
  period,
  degree,
  introduction,
} = toRef(props).value.education
</script>

<style scoped>
</style>
