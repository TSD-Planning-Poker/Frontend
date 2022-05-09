import axios from "axios";

const user_1 = "92dc5dee7e5901be49fca3deb57378ace074ee2e"
const admin = "b138c9181d220b3f47d70159b989e6cc9023249e"

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 6000,
    headers: { "Authorization" : `Token ${admin}`}
  });


export default api