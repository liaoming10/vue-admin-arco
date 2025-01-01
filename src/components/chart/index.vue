<template>
  <VCharts
    v-if="renderChart"
    :options="options"
    :autoResize="autoResize"
    :style="{ width, height }"
  ></VCharts>
</template>

<script setup lang="ts">
import VCharts from 'vue-echarts'
import { nextTick, ref } from 'vue'

const props = defineProps({
  options: {
    type: Object,
    default() {
      return {}
    },
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
})

const renderChart = ref(false)
const options = ref({})

nextTick(() => {
  console.log(props.options)
  renderChart.value = true
})
</script>

<style scoped></style>
