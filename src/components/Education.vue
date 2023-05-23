<template>
  <ResumeSection title="学歴"/>

  <EducationItem
    v-for="educationItem of educationItems"
    :key="educationItem.school"
    :education="educationItem"
  />
</template>

<script setup>
import ResumeSection from './ResumeSection.vue'
import EducationItem from './EducationItem.vue'

import resumeInfo from '@/configs/resume-info.js'

const educationItems = resumeInfo.education
</script>
