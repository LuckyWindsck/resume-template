<template>
  <span
    >Email：<a :href="`mailto://${email}`">{{ email }}</a></span
  >
</template>

<script setup>
defineProps({
  email: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
