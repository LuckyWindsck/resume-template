<template>
  <span>携帯電話：{{ phone }}</span>
</template>

<script setup>
defineProps({
  phone: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
