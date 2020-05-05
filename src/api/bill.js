import request from '@/utils/request'

class BillApi {
  createBill(params) {
    return request({
      url: '/api/bill/createBill',
      method: 'put',
      params
    })
  }
  searchBill(params) {
    return request({
      url: 'api/bill/searchBill',
      method: 'get',
      params
    })
  }
  updateBill(params) {
    return request({
      url: '/api/bill/updateBill',
      method: 'post',
      params
    })
  }
}

export default new BillApi()
