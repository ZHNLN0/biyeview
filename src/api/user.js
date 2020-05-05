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