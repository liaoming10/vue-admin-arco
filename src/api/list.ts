import axios from 'axios'
import qs from 'query-string'
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface'

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

export interface ServiceRecord {
  id: number
  title: string
  description: string
  name?: string
  actionType?: string
  icon?: string
  data?: DescData[]
  enable?: boolean
  expires?: boolean
}

export function queryInspectionList() {
  return axios.get('/api/list/quality-inspection')
}

export function queryTheServiceList() {
  return axios.get('/api/list/the-service')
}

export function queryRulesPresetList() {
  return axios.get('/api/list/rules-preset')
}
