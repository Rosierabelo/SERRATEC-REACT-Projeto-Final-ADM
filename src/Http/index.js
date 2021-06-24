import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/'
})

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (erro) => {
        return Promise.reject(erro)
    }
)

export default http;