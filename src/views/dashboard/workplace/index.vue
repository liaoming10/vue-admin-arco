<template>
  <div class="container">
    <div class="left-side">
      <div class="panel">
        <Banner />
      </div>
    </div>
    <div class="right-side">right side</div>
  </div>
</template>

<script setup lang="ts">
import Banner from './components/banner.vue'
</script>

<style scoped>
.container {
  display: flex;
  background-color: var(--color-fill-2);
  padding: 16px 20px;
  padding-bottom: 0;
}

.left-side {
  flex: 1;
  overflow: hidden;
}
.right-side {
  width: 280px;
  margin-left: 16px;
}
.panel {
  background-color: var(--color-bg-2);
  border-radius: 4px;
  overflow: auto;
}
:deep(.panel-border) {
  margin-bottom: 0;
  border-bottom: 1px solid rgb(var(--gray-2));
}
</style>
