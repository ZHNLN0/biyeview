import Cookies from 'js-cookie'

const cookiesKey = 'dtzdq.sid'

export function getToken() {
  console.log(Cookies.get(cookiesKey))
  return Cookies.get(cookiesKey)
}

export function setToken(cookies) {
  return Cookies.set(cookiesKey, cookies)
}

export function removeToken() {
  return Cookies.remove(cookiesKey)
}