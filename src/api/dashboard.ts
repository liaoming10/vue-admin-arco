import axios from 'axios'

export interface ContentDataRecord {
  x: string
  y: number
}
export function queryContentData() {
  return axios.get<ContentDataRecord[]>('/api/content-data')
}

