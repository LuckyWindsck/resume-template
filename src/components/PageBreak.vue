<template>
  <div ref="pageBreak" :style="{ height: `calc(297mm + 20mm - ${top}px)` }" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageBreak = ref(null)
let top = ref(0)

onMounted(() => {
  const el = pageBreak.value

  top.value = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top
})
</script>

<style scoped></style>
