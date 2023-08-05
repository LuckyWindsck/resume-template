<template>
  <ResumeSection title="職歴" />

  <ExperienceItem
    v-for="experienceItem of experienceItems"
    :key="experienceItem.company"
    :experience="experienceItem"
  />
</template>

<script setup>
import ExperienceItem from './ExperienceItem.vue'
import ResumeSection from './ResumeSection.vue'

import resumeInfo from '@/configs/resume-info.js'

const experienceItems = resumeInfo.experience
</script>
