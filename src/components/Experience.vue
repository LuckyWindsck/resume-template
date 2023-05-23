<template>
  <ResumeSection title="職歴"/>

  <ExperienceItem
    v-for="experienceItem of experienceItems"
    :key="experienceItem.company"
    :experience="experienceItem"
  />
</template>

<script setup>
import ResumeSection from './ResumeSection.vue'
import ExperienceItem from './ExperienceItem.vue'

import resumeInfo from '@/configs/resume-info.js'

const experienceItems = resumeInfo.experience
</script>
