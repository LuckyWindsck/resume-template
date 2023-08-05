<template>
  <VSpace :size="1" />

  <div class="flex justify-between">
    <div>
      <span class="font-black underline">{{ company }}</span
      ><span>{{ `, ${location}` }}</span>
    </div>
    <div>
      <span>{{ period }}</span>
    </div>
  </div>

  <div>
    <span class="italic">{{ type }}</span
    ><span class="inline-block w-1" /><span>{{ ` ${role}` }}</span>
  </div>

  <ul class="list-disc pl-4">
    <template v-for="[key, list] of Object.entries(content)" :key="key">
      <li>{{ key }}</li>
      <li class="list-none">
        <ul class="list-circle pl-4">
          <li v-for="element of list" :key="element">
            {{ element }}
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script setup>
import { toRef } from 'vue'

import VSpace from './VSpace.vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

const { company, location, period, type, role, content } = toRef(props).value.experience
</script>

<style scoped></style>
