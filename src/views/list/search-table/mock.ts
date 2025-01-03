import Mock from 'mockjs'
import qs from 'query-string'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'

const { Random } = Mock

const data = Mock.mock({
  'list|55': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      'number|2-3': /[0-9]/,
      'name|4-8': /[A-Z]/,
      'contentType|1': ['img', 'horizontalVideo', 'verticalVideo'],
      'filterType|1': ['atifical', 'rules'],
      'count|2-3': /[0-9]/,
      'status|1': ['online', 'offline'],
      createdTime: Random.datetime(),
    },
  ],
})

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/policy/list'), 'get', (params) => {
      const { current = 1, pageSize = 10 } = qs.parseUrl(params.url).query
      const p = current as number
      const ps = pageSize as number
      return successResponseWrap({
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55,
      })
    })
  },
})
