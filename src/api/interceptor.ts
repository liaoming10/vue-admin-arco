import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message, Modal } from '@arco-design/web-vue'

export interface HttpResponse<T = unknown> {
  status: number
  code: number
  msg: string
  data: T
}

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
}

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code !== 200000) {
      Message.error({
        content: res.msg,
        duration: 5 * 1000,
      })
    }

    return res
  },
  (error) => {
    // do something with response error
    return Promise.reject(error)
  },
)
