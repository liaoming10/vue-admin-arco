<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.monitor']" />
    <div class="layout">
      <div class="layout-left-side">
        <ChatPanel />
      </div>
      <div class="layout-content">center</div>
      <div class="layout-right-side">right</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatPanel from './components/chat-panel.vue'
</script>
<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
  .layout {
    display: flex;

    &-left-side {
      flex-basis: 300px;
    }
    &-content {
      flex: 1;
      padding: 0 16px;
    }
    &-right-side {
      flex-basis: 280px;
    }
  }
}
</style>
