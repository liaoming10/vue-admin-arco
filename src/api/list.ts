import axios from 'axios'
import qs from 'query-string'

export interface PolicyRecord {
  id: number
  number: number
  name: string
  contentType: 'img' | 'horizontalVideo' | 'verticalVideo'
  filterType: 'atifical' | 'rules'
  count: number
  status: 'offline' | 'online'
  createTime: string
}
export interface PolicyParams extends Partial<PolicyRecord> {
  current: number
  pageSize: number
}

export interface PolicyListRes {
  list: PolicyRecord[]
  total: number
}

export function queryPolicyList(params: PolicyParams) {
  return axios.get<PolicyListRes>('/api/policy/list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj)
    },
  })
}
