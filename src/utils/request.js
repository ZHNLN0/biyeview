import axios from 'axios'
import { Toast } from 'vant'
const CancelToken = axios.CancelToken
const requestList = []
const sources = {}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  withCredentials: true
})

console.log(process.env)

service.interceptors.request.use(config => {
  const request = config.url + config.method + JSON.stringify(config.data)
  config.cancelToken = new CancelToken(cancel => {
    sources[request] = cancel
  })
  if (requestList.includes(request)) {
    sources[request]('取消重复请求')
  } else {
    requestList.push(request)
  }
  if(config.method !== 'get') {
    config.data = config.params
    config.params = null
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  requestList.pop()
  const res = response.data
  if (res.code !== 20000) {
    Toast.fail({
      message: res.message
    })
  } else {
    return res
  }
}, error => {
  Toast.fail({
    message: error.message
  })
  return Promise.reject(error)
})

export default service
