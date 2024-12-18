<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-sub-title">{{ $t('login.form.title') }}</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form ref="loginForm" :model="userInfo" layout="vertical" @submit="handleSubmit">
      <a-form-item field="username">
        <a-input :placeholder="$t('login.form.userName.placeholder')" v-model="userInfo.username">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item field="password">
        <a-input-password
          :placeholder="$t('login.form.password.placeholder')"
          v-model="userInfo.password"
          allow-clear
        >
          <template #prefix> <icon-lock /> </template
        ></a-input-password>
      </a-form-item>
      <a-space direction="vertical" :size="16">
        <div class="login-form-password-actions">
          <a-checkbox>{{ $t('login.form.rememberPassword') }}</a-checkbox>
          <a-link>{{ $t('login.form.forgetPassword') }}</a-link>
        </div>
        <a-button type="primary" html-type="submit" long>{{ $t('login.form.login') }}</a-button>
        <a-button type="text" class="login-form-register-btn" long>{{
          $t('login.form.register')
        }}</a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const errorMessage = ref('')

const userInfo = ref({
  username: '',
  password: '',
})

const handleSubmit = () => {
  console.log('submit')
}
</script>

<style lang="less" scoped>
.login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }
}
</style>
