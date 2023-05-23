<template>
  <br :class="`mt-${size}`">
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 4,
  },
})
</script>

<style scoped>
br {
  display: block; /* makes it have a width */
  content: "";    /* clears default height */
}
</style>
