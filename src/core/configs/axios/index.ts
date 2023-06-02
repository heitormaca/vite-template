import axios from 'axios';
import axiosInterceptors from './interceptors';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API });

axiosInterceptors(axiosInstance);

export default axiosInstance;
