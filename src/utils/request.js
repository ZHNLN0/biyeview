import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  withCredentials: true
})

console.log(process.env)

service.interceptors.request.use(config => {
  
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data
  if(res.code !== 0) {
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