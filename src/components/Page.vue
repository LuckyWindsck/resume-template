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
import Title from './Title.vue'
import BasicInfo from './BasicInfo.vue'
import ResumePhoto from './ResumePhoto.vue'
import Education from './Education.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
import Certificates from './Certificates.vue'
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
