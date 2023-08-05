<template>
  <section>
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <Title />
        <BasicInfo />
      </div>
      <ResumePhoto />
    </div>
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Certificates />
  </section>
</template>

<script setup>
import BasicInfo from '@/components/BasicInfo.vue'
import Certificates from '@/components/Certificates.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import ResumePhoto from '@/components/ResumePhoto.vue'
import Skills from '@/components/Skills.vue'
import Title from '@/components/Title.vue'
</script>

<style scoped>
@page {
  size: A4 portrait;
  margin: 0mm;
}

section {
  width: 210mm;
  height: 297mm;
  padding: 20mm;
}
</style>
