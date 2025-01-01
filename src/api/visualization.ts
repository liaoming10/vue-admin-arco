import axios from 'axios'

export interface ChartDataRecord {
  x: string
  y: number
  name: string
}

export interface DataChainGroth {
  quota: string
}

export interface PublicOpinionAnalysis {
  quota: string
}

export interface PublicOpinionAnalysisRes {
  count: number
  growth: number
  chartData: ChartDataRecord[]
}

export function queryPublicOpinionAnalysis(data: PublicOpinionAnalysis) {
  return axios.post<PublicOpinionAnalysisRes>('/api/public-opinion-analysis', data)
}

export interface ContentPublishRecord {
  x: string[]
  y: number[]
  name: string
}

export function queryContentPublish() {
  return axios.get<ContentPublishRecord[]>('/api/content-publish')
}

export interface PopularAuthorRes {
  list: {
    ranking: number
    author: string
    contentCount: number
    clickCount: number
  }[]
}

export function queryPopularAuthor() {
  return axios.get<PopularAuthorRes>('/api/popular-author/list')
}
