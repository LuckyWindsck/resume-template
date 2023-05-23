<template>
  <ResumeSection title="免許·資格"/>

  <div>
    <ul class="list-disc pl-4">
      <li v-for="certificate of certificates" :key="certificate">{{ certificate }}</li>
    </ul>
  </div>
</template>

<script setup>
import ResumeSection from './ResumeSection.vue'

import resumeInfo from '@/configs/resume-info.js'

const certificates = resumeInfo.certificates
</script>
