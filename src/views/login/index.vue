<template>
  <div class="container">
    <div class="logo">
      <img
        alt="logo"
        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
      />
      <div class="logo-text">Arco Design Pro</div>
    </div>
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginBanner from './components/banner.vue'
import LoginForm from './components/login-form.vue'
import Footer from '@/components/footer/index.vue'
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;

  .banner {
    width: 550px;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }
  .content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
    position: relative;
  }
  .footer{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  .logo-text {
    margin-left: 4px;
    font-size: 4px;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
</style>
