import axios from 'axios';
import { KEY_ACCESS_TOKEN, getItem } from './localStorageManager';
import { setItem, removeItem } from './localStorageManager';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
})

axiosClient.interceptors.request.use(
    (request) => {
        const accessToken = getItem(KEY_ACCESS_TOKEN);
        console.log('Access Token', accessToken);
        request.headers['Authorization'] = `Bearer ${accessToken}`;

        return request;
    }
);

axiosClient.interceptors.response.use(
    async (response) => {
        // return response;
        if (response.data.status === 'ok') {
            return response;
        }
        if (response.data.statusCode === 404) {
            return response;
        }
        console.log(response);

        const originalRequest = response.config;
        const statusCode = response.data.statusCode;
        const result = response.data.result;

        if (statusCode === 401 && originalRequest.url === '/api/auth/refresh') {
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace('/login/', '_self');
            return Promise.reject(result);
        }
        if (statusCode === 401) {
            const data = await axiosClient.get('/api/auth/refresh');
            console.log('after refresh api', data);
            if (data.data.status === 'ok') {
                const accessToken = data.data.result;
                console.log(accessToken);
                setItem(KEY_ACCESS_TOKEN, accessToken);
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                originalRequest._retry = true;
                return axiosClient(originalRequest)
            }
        }
    }
);