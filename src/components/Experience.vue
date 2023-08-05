<template>
  <ResumeSection title="職歴" />

  <ExperienceItem
    v-for="experienceItem of experienceItems"
    :key="experienceItem.company"
    :experience="experienceItem"
  />
</template>

<script setup>
import ExperienceItem from '@/components/ExperienceItem.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import resumeInfo from '@/configs/resume-info.js'

const experienceItems = resumeInfo.experience
</script>
