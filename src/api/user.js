import request from '@/utils/request'

export function login(params) {
  return request ({
    url: '/api/user/login',
    method: 'post',
    params
  })
}

export function regist(params) {
  return request({
    url: '/api/user/register',
    method: 'post',
    params
  })
}

export function updateInfo(params) {
  return request({
    url: '/api/user/changeInfo',
    method: 'post',
    params
  })
}

export function upload(params) {
  return request({
    url: '/api/utils/upload',
    method: 'post',
    params
  })
}