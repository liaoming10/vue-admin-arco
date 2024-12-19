<template>
  <a-col class="banner">
    <a-col>
      <a-typography-title :heading="5">{{ $t('workplace.welcome') }} admin</a-typography-title>
    </a-col>
    <a-divider class="panel-border"></a-divider>
  </a-col>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.banner {
  width: 100%;
  padding: 20px 20px 0 20px;
  background-color: var(--color-gb-2);
  border-radius: 4px 4px 0 0;
}

.panel-border{
}
</style>
