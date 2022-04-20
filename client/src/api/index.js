import axios from 'axios'

const api = axios.create({
  withCredentials: true
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth')

  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api
