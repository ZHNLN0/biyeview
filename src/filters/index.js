import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

/**
 * @description 全局时间格式化过滤器
 * @param {String|Number|Date} value 时间的值
 * @param {String} pattern 时间格式
 */
export function momentFilter(value, pattern = 'YYYY-MM-DD HH:mm') {
  if(!value) {
    return '暂无'
  }
  return moment(value).format(pattern)
}

export default {
  install(Vue) {
    Vue.filter('momentFilter', momentFilter)
  }
}