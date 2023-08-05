<template>
  <span>GitHub：<a :href="`https://github.com/${username}`">{{ username }}</a></span>
</template>

<script setup>
defineProps({
  username: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
</style>
