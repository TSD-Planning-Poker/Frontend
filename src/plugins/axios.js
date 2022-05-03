import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 6000,
    headers: { "Authorization" : "Token b138c9181d220b3f47d70159b989e6cc9023249e"}
  });


export default api