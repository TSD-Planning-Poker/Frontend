import { CSRF_TOKEN } from "./csrf_token.js"
// import axios from 'axios'

function handleResponse(response) {
    if (response.headers.get("Content-Type") != "application/json") {
        return response.text()
    }
    return response.json()
}



function apiService(endpoint, method, data) {
    // const config = {
    //     method: method || "GET",
    //     body: data != undefined ? JSON.stringify(data) : null,

    //     headers: {
    //         'content-type': 'application/json;',
    //         'X-CSRFTOKEN': CSRF_TOKEN
    //     }
    // }
    // return fetch(`http://127.0.0.1:8000/api${endpoint}`, config)
    //     .then(handleResponse)
    //     .catch(error => { console.log(error) })
    console.log("====================")
}


export { apiService }