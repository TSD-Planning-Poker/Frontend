import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 6000,
  });

  api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("userToken") 
    const multipart = localStorage.getItem("multipart") 

    if (token) {
      config.headers.Authorization = `Token ${token}`
    }

    if(multipart){
      config.headers['Content-Type'] = "multipart/form-data";
      console.log(config.headers)
    }

    return config
  }, function (error) {
    return Promise.reject(error)
  })


export default api