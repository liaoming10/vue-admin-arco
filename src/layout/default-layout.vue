<template>
  <a-layout class="layout">
    <div class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout>
        <a-layout-sider class="layout-sider" style="padding-top: 60px;" :width="220">
          <div class="menu-wrapper">
            <Menu />
          </div>
        </a-layout-sider>
        <a-layout class="layout-content" style="padding-left: 220px; padding-top: 60px;">
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
import NavBar from '@/components/navbar/index.vue'
</script>

<style lang="less" scoped>
@layout-navbar-height: 64px;
@layout-max-width: 1100px;
.layout {
  height: 100%;

  .layout-navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: @layout-navbar-height;
  }

  .layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    width: 220px;
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }

  .menu-wrapper {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .layout-content {
    min-height: 100vh;
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
}
</style>
