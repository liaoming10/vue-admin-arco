import axios from 'axios'

export interface ChatRecord {
  id: number
  username: string
  content: string
  time: string
  isCollect: boolean
}

export function queryChatList() {
  return axios.get<ChatRecord[]>('/api/chat/list')
}
