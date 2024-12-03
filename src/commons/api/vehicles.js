import axios from 'axios';
import { API_URL } from '../constants';

const vehicles = {
  // Obtiene todos los vehículos
  get: () => axios.get(`${API_URL}/vehiculo`),

  // Obtiene un vehículo específico por ID
  getForId: id => axios.get(`${API_URL}/vehiculo/${id}`),

  // Crea un nuevo vehículo
  store: vehicle =>
    axios.post(`${API_URL}/vehiculo/new`, vehicle, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),

  // Elimina un vehículo por ID
  remove: id => axios.delete(`${API_URL}/vehiculo/${id}`),

  // Actualiza un vehículo existente
  update: vehicle =>
    axios.patch(`${API_URL}/vehiculo/${vehicle.id}`, vehicle, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),

  // Genera un reporte en Excel
  report: () =>
    axios.get(`${API_URL}/vehiculo/excel/reporte`, { responseType: 'blob' }),

  // Obtiene los vehículos disponibles (Nuevo método)
  getAvailable: () => axios.get(`${API_URL}/bitacora/maquinas-disponibles`),
};

export default vehicles;
