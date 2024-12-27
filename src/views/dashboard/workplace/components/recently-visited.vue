<template>
  <a-card
    class="general-card"
    :title="$t('workplace.recently.visited')"
    :header-style="{ paddingBottom: 0 }"
    :body-style="{ padding: '20px 20px 0 20px' }"
  >

    <div></div>
    <a-row :gutter="16">
      <a-col v-for="link in links" :key="link.text" :span="8" class="wrapper">
        <div class="icon">
          <component :is="link.icon"></component>
        </div>
        <a-typography-paragraph class="text"> {{ $t(link.text) }}</a-typography-paragraph>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
const links = [
  {
    text: 'workplace.contentManagement',
    icon: 'icon-storage',
  },
  {
    text: 'workplace.contentStatistical',
    icon: 'icon-file',
  },
  {
    text: 'workplace.advanced',
    icon: 'icon-settings',
  },
]
</script>

<style scoped></style>
