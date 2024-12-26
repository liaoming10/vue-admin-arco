import { computed } from 'vue'
import { EChartsOption } from 'echarts'

interface optionsFn {
  (isDark: boolean): EChartsOption
}

export default function useChartOption(sourceOption: optionsFn) {
  const isDark = computed(() => {
    return false
  })

  const chartOption = computed(() => {
    return sourceOption(isDark.value)
  })

  return {
    chartOption,
  }
}
