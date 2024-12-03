import axios from 'axios';
import { API_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Opcional para mejorar la experiencia en caso de retrasos
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la solicitud:', error.response || error.message);
    return Promise.reject(error);
  },
);

const bills = {
  get: (params) => axiosInstance.get('/bitacora', { params }),
  getForId: (id) => axiosInstance.get(`/bitacora/${id}`),
  store: (bill) => axiosInstance.post('/bitacora/new', bill),
  getReport: (data) => axiosInstance.post('/bitacora/reporte', data),
  remove: (id) => axiosInstance.delete(`/bitacora/${id}`),
  update: (bill) => axiosInstance.patch(`/bitacora/${bill.id}`, bill),
  report: () => axiosInstance.get('/bitacora/excel/reporte', { responseType: 'blob' }),
};

export default bills;
