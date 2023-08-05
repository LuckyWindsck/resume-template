<template>
  <VSpace :size="1" />

  <div class="flex justify-between">
    <div>
      <span class="font-black underline">{{ school }}</span
      ><span>, {{ location }}</span>
    </div>
    <div>
      <span>{{ period }}</span>
    </div>
  </div>

  <div>
    <span class="italic">{{ degree }}</span
    ><span class="inline-block w-1" /><span> {{ introduction }}</span>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

import VSpace from './VSpace.vue'

const props = defineProps({
  education: {
    type: Object,
    required: true,
  },
})

const { school, location, period, degree, introduction } = toRef(props).value.education
</script>

<style scoped></style>
