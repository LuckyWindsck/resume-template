<template>
  <div class="flex justify-between">
    <div>
      <span class="font-black underline">{{ title }}</span>
    </div>
    <div class="flex justify-center h-6">
      <span><a :href="url">{{ url }}</a></span>
    </div>
  </div>
  <div>{{ introduction }}</div>

  <VSpace :size="2" />

  <div>
    <ul class="list-disc pl-4">
      <li
        v-for="explanation in explanations"
        :key="explanation"
      >
        {{ explanation }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRef } from 'vue'
import VSpace from './VSpace.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const {
  title,
  url,
  introduction,
  explanations,
} = toRef(props).value.project


</script>

<style scoped>
</style>
