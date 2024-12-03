import axios from 'axios';
import { API_URL } from '../constants';

const fingerprintes = {
  removeForEmployee: id => axios.delete(`${API_URL}/huella/por-empleado/${id}`),
  createHuella: id => axios.post(`${API_URL}/huella/crear/${id}`),
};

export default fingerprintes;
