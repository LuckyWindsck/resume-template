<template>
  <Name
    :kanji="kanji"
    :furigana="furigana"
    :english="english"
    class="text-4xl"
  />

  <VSpace :size="3"></VSpace>
</template>

<script setup>
import Name from './Name.vue'
import VSpace from './VSpace.vue'

import resumeInfo from '@/configs/resume-info.js'

const {
  kanji,
  furigana,
  english,
} = resumeInfo.title
</script>
