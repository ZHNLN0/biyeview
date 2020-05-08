import request from '@/utils/request'

class DiaryApi {
  createDiary(params) {
    return request({
      url: '/api/diary/createDiary',
      method: 'put',
      params
    })
  }
  searchDiary(params) {
    return request({
      url: '/api/diary/searchDiary',
      method: 'get',
      params
    })
  }
  getDiaryList(params) {
    return request({
      url: '/api/diary/getDiaryList',
      method: 'get',
      params
    })
  }
}

export default new DiaryApi()