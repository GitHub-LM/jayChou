import axios from 'axios'

axios.interceptors.response.use((response) => {

}, (error) => {

    return Promise.reject(error);
})

axios.interceptors.request.use(() => {

}, (error) => {

    return Promise.reject(error);
})