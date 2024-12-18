<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel class="carousel" animation-name="fade" autoplay>
        <a-carousel-item v-for="item in carouseItems" :key="item.slogan">
          <div class="carousel-item">
            <div class="carousel-title">{{ item.slogan }}</div>
            <div class="carousel-sub-title">{{ item.subSlogan }}</div>
            <img class="carousel-image" :src="item.image" />
          </div>
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import bannerImage from '@/assets/images/login-banner.png'

const { t } = useI18n()
const carouseItems = computed(() => {
  return [
    {
      slogan: t('login.banner.slogan1'),
      subSlogan: t('login.banner.subSlogan1'),
      image: bannerImage,
    },
    {
      slogan: t('login.banner.slogan2'),
      subSlogan: t('login.banner.subSlogan2'),
      image: bannerImage,
    },
    {
      slogan: t('login.banner.slogan3'),
      subSlogan: t('login.banner.subSlogan3'),
      image: bannerImage,
    },
  ]
})
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    flex: 1;
    height: 100%;
  }
}

.carousel {
  height: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  &-title {
    color: var(--color-fill-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    margin-top: 8px;
    color: var(--color-text-3);
  }

  &-image {
    width: 320px;
    margin-top: 32px;
  }
}
</style>
