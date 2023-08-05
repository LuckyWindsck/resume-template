<template>
  <Name :kanji="kanji" :furigana="furigana" :english="english" class="text-4xl" />

  <VSpace :size="3" />
</template>

<script setup>
import Name from '@/components/Name.vue'
import VSpace from '@/components/VSpace.vue'
import resumeInfo from '@/configs/resume-info.js'

const { kanji, furigana, english } = resumeInfo.title
</script>
