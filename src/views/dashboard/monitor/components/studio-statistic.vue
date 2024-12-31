<template>
  <a-card :bordered="false" :body-style="{ padding: '20px' }">
    <a-tabs default-active-tab="liveMethod">
      <a-tab-pane key="liveMethod" :title="$t('monitor.tab.title.liveMethod')"></a-tab-pane>
      <a-tab-pane
        key="onlinePopulation"
        :title="$t('monitor.tab.title.onlinePopulation')"
      ></a-tab-pane>
    </a-tabs>
    <div class="data-statistic-content">
      <a-radio-group :defaultValue="2" type="button">
        <a-radio :value="1">{{ $t('monitor.liveMethod.normal') }}</a-radio>
        <a-radio :value="2">{{ $t('monitor.liveMethod.flowControl') }}</a-radio>
        <a-radio :value="3">{{ $t('monitor.liveMethod.video') }}</a-radio>
        <a-radio :value="4">{{ $t('monitor.liveMethod.web') }}</a-radio>
      </a-radio-group>
      <div class="data-statistic-list-wrapper">
        <div class="data-statistic-list-header">
          <a-button type="text">{{ $t('monitor.editCarousel') }}</a-button>
          <a-button disabled>{{ $t('monitor.startCarousel') }}</a-button>
        </div>
        <div class="data-statistic-list-content">
          <DataStatisticListContent />
        </div>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import DataStatisticListContent from './data-statistic-list-content.vue'
</script>

<style lang="less" scoped>
.data-statistic {
  &-cotnent {
    padding: 20px 0;
  }

  &-list {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    &-content {
      margin-top: 16px;
    }
  }
}
</style>
