<template>
  <ResumeSection title="プロジェクト参加歴" />

  <template v-for="(project, index) in projects" :key="project.title">
    <ProjectItem :project="project" />
    <PageBreak v-if="index === 0" />
    <VSpace v-else />
  </template>
</template>

<script setup>
import PageBreak from './PageBreak.vue'
import ProjectItem from './ProjectItem.vue'
import ResumeSection from './ResumeSection.vue'
import VSpace from './VSpace.vue'

import resumeInfo from '@/configs/resume-info.js'

const projects = resumeInfo.projects
</script>
