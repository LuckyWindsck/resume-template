<template>
  <ResumeSection title="スキル"/>

  <div>
    <ul class="list-disc pl-4">
      <li v-for="[key, value] in Object.entries(skills)" :key="key">
        <span class="font-black">{{ key }}</span>
        <span>：{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ResumeSection from './ResumeSection.vue'

import resumeInfo from '@/configs/resume-info.js'

const skills = resumeInfo.skills
</script>
