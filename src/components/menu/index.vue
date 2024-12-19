<template>
  <div>
    <a-menu
      :style="{ width: '220px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_1']"
      show-collapse-button
    >
      <a-sub-menu key="0">
        <template #icon><icon-dashboard></icon-dashboard></template>
        <template #title>{{ $t('menu.dashboard') }}</template>
        <a-menu-item key="/dashboard/workplace" @click="goto('/dashboard/workplace')">{{
          $t('menu.dashboard.workplace')
        }}</a-menu-item>
        <a-menu-item key="/dashboard/minitor" @click="goto('/dashboard/monitor')">{{
          $t('menu.dashboard.monitor')
        }}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>Navigation 2</template>
      </a-sub-menu>
      <a-sub-menu key="2">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>Navigation 3</template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goto = (path: string) => {
  router.push(path)
}
</script>

<style lang="less" scoped></style>
