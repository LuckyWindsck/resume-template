<template>
  <div class="flex flex-col">
    <BasicInfoGitHub :username="username" />
    <BasicInfoEmail :email="email" />
    <BasicInfoPhone :phone="phone" />
    <BasicInfoAddress :address="address" />
  </div>

  <VSpace />
</template>

<script setup>
import BasicInfoAddress from '@/components/BasicInfoAddress.vue'
import BasicInfoEmail from '@/components/BasicInfoEmail.vue'
import BasicInfoGitHub from '@/components/BasicInfoGitHub.vue'
import BasicInfoPhone from '@/components/BasicInfoPhone.vue'
import VSpace from '@/components/VSpace.vue'
import resumeInfo from '@/configs/resume-info.js'

const { username, email, address, phone } = resumeInfo.basicInfo
</script>
