<template>
  <div class="flex justify-between">
    <BasicInfoGitHub :username="username"></BasicInfoGitHub>
    <BasicInfoEmail :email="email"></BasicInfoEmail>
  </div>

  <div class="flex justify-between">
    <BasicInfoAddress :address="address"></BasicInfoAddress>
    <BasicInfoPhone :phone="phone"></BasicInfoPhone>
  </div>

  <VSpace></VSpace>
</template>

<script setup>
import BasicInfoAddress from './BasicInfoAddress.vue'
import BasicInfoEmail from './BasicInfoEmail.vue'
import BasicInfoGitHub from './BasicInfoGitHub.vue'
import BasicInfoPhone from './BasicInfoPhone.vue'
import VSpace from './VSpace.vue'

import resumeInfo from '@/configs/resume-info.js'

const {
  username,
  email,
  address,
  phone,
} = resumeInfo.basicInfo
</script>
