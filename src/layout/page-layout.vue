<template>
  <router-view v-slot="{ Component, route }">

    <transition name="fade" mode="out-in" appear>
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('page-layout')
})
</script>

<style scoped></style>
