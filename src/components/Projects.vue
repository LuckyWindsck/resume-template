<template>
  <ResumeSection title="プロジェクト参加歴"/>

  <template
    v-for="(project, index) in projects"
    :key="project.title"
  >
    <ProjectItem :project="project"/>
    <PageBreak v-if="index === 0"/>
    <VSpace v-else></VSpace>
  </template>
</template>

<script setup>
import ResumeSection from './ResumeSection.vue'
import ProjectItem from './ProjectItem.vue'

import PageBreak from './PageBreak.vue'
import VSpace from './VSpace.vue'

import resumeInfo from '@/configs/resume-info.js'

const projects = resumeInfo.projects
</script>
