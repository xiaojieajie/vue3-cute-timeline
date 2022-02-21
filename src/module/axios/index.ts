import axios from 'axios'
// import { Notify } from "vant"
import CancelToken from './cancelToken'
import type { AxiosResponse } from 'axios'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface IResponse {
  data: any
  msg: string
  ok?: any
  status: number
}

// axios 实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_URL
})

instance.interceptors.request.use((config) => {
  // 请求开始前，检查一下是否已经有该请求了，有则取消掉该请求
  CancelToken.removePending(config)
  // 把当成请求添加进去
  CancelToken.addPending(config)
  return config
}, (err: Error) => err)

instance.interceptors.response.use((resp: AxiosResponse<IResponse>) => {
  // 接口响应之后把这次请求清除
  CancelToken.removePending(resp.config)
  if (resp.data.status === 200) {
    // 接口请求成功
    return resp.data.data
  }
  // Notify({
  //   message: resp.data.msg,
  //   duration: 1000
  // })
  return Promise.reject(new Error('错误了'))
}, (err: Error) => {
  return Promise.reject(err)
})

export default instance
