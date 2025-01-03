import Mock from 'mockjs'

import '@/views/dashboard/workplace/mock'
import '@/views/dashboard/monitor/mock'

import '@/views/visualization/data-analysis/mock'
import '@/views/visualization/multi-dimension-data-analysis/mock'

import '@/views/list/search-table/mock'
import '@/views/list/card/mock'

import '@/views/form/step/mock'

Mock.setup({
  timeout: '200-600',
})
