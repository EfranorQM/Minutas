import axios from 'axios';
import { API_URL } from '../constants';

const persons = {
  get: () => axios.get(`${API_URL}/persona`),
  getNotEmployees: () => axios.get(`${API_URL}/persona/no-empleado`),
  getForId: id => axios.get(`${API_URL}/persona/${id}`),
  store: person => axios.post(
    `${API_URL}/persona/new`,
    person,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
  remove: id => axios.delete(`${API_URL}/persona/${id}`),
  update: person => axios.patch(
    `${API_URL}/persona/${person.id}`,
    person,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ),
  report: () => axios.get(
    `${API_URL}/persona/excel/reporte`,
    { responseType: 'blob' },
  ),
  // Nuevo método para obtener visitantes
  getVisitors: () => axios.get(`${API_URL}/bitacora/visitors`),
};

export default persons;
