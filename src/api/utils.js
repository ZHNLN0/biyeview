import request from '@/utils/request'

export function upload(params) {
  return request({
    url: '/api/utils/upload',
    method: 'post',
    params
  })
}