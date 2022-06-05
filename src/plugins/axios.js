import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 6000,
  });

  api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("userToken") 

    if (token) {
      config.headers.Authorization = `Token ${token}`
    }

      // config.headers['Access-Control-Allow-Origin'] = '*';

    return config
  }, function (error) {
    return Promise.reject(error)
  })


export default api