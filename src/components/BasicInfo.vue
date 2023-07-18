<template>
  <div class="flex flex-col">
    <BasicInfoGitHub :username="username"></BasicInfoGitHub>
    <BasicInfoEmail :email="email"></BasicInfoEmail>
    <BasicInfoPhone :phone="phone"></BasicInfoPhone>
    <BasicInfoAddress :address="address"></BasicInfoAddress>
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
