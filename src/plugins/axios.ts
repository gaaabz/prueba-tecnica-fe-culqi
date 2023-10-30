import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
})

export default apiClient
