<template>
  <a-layout class="layout">
    <a-layout>
      <a-layout>
        <a-layout-sider class="layout-sider">
          <div class="menu-wrapper">
            <Menu />
          </div>
        </a-layout-sider>
        <a-layout class="layout-content " >
          <a-layout-content>
            <PageLayout />
          </a-layout-content>
          <Footer />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/index.vue'
import Menu from '@/components/menu/index.vue'
import PageLayout from './page-layout.vue'
</script>

<style lang="less" scoped>
.layout {
  height: 100%;

  .layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }

  .menu-wrapper {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .layout-content {
    min-height: 100vh;
    padding-left: 200px;
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
}
</style>
