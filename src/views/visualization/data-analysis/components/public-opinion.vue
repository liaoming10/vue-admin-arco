<template>
  <a-card
    class="general-card"
    :title="$t('dataAnalysis.title.publicOpinion')"
    :header-style="{ paddingBottom: '12px' }"
  >
    <a-grid :cols="24" :row-gap="12" :col-gap="12">
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <ChainItem
          :title="$t('dataAnalysis.card.title.allVisitors')"
          quota="visitors"
          chart-type="line"
          :card-style="{
            background: 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        />
      </a-grid-item>
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <ChainItem
          :title="$t('dataAnalysis.card.title.contentPublished')"
          quota="published"
          chart-type="bar"
          :card-style="{
            background: 'linear-gradient(180deg, #F5FEF2 0%, #E6FEEE 100%)',
          }"
        />
      </a-grid-item>
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <ChainItem
          :title="$t('dataAnalysis.card.title.totalComment')"
          quota="comments"
          chart-type="line"
          :card-style="{
            background: 'linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)',
          }"
        />
      </a-grid-item>
      <a-grid-item :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6, xxl: 6 }">
        <ChainItem
          :title="$t('dataAnalysis.card.title.totalShare')"
          quota="share"
          chart-type="pie"
          :card-style="{
            background: 'linear-gradient(180deg, #F7F7FF 0%, #ECECFF 100%)',
          }"
        />
      </a-grid-item>
    </a-grid>
  </a-card>
</template>

<script setup lang="ts">
import ChainItem from './chain-item.vue'
</script>

<style scoped></style>
