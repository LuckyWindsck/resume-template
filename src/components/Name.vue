<template>
  <h1>
    <ruby>
      {{ kanji[0] }} <rp>(</rp><rt>{{ furigana[0] }}</rt><rp>)</rp>
    </ruby>
    <span class="inline-block w-4" />
    <ruby>
      {{ kanji[1] }} <rp>(</rp><rt>{{ furigana[1] }}</rt><rp>)</rp>
    </ruby>
    /
    <span class="small-caps">{{ english }}</span>
  </h1>
</template>

<script setup>
defineProps({
  kanji: {
    type: Array,
    required: true,
  },
  furigana: {
    type: Array,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
span.small-caps {
  font-variant: small-caps;
}
</style>
