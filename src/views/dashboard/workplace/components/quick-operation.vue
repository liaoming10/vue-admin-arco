<template>
  <a-card
    class="general-card"
    :title="$t('workplace.quick.operation')"
    :header-style="{ paddingBottom: 0 }"
    :body-style="{ padding: '20px 20px 0 20px' }"
  >
    <template #extra>
      <a-link> {{ $t('workplace.quickOperation.setup') }} </a-link>
    </template>
    <a-row :gutter="8">
      <a-col :span="8" v-for="link in links" :key="link.text" class="wrapper">
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
  { text: 'workplace.contentManagement', icon: 'icon-file' },
  { text: 'workplace.contentStatistical', icon: 'icon-storage' },
  { text: 'workplace.advanced', icon: 'icon-settings' },
  { text: 'workplace.onlinePromotion', icon: 'icon-mobile' },
  { text: 'workplace.contentPutIn', icon: 'icon-fire' },
]
</script>

<style scoped></style>
