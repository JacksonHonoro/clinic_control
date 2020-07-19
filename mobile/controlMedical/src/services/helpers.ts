import api from './api';

export async function listDoctors() {
  const result = await api.get('/doctors');
  return result;
}

export async function registerDoctor(data) {
  const result = await api.post('/doctors', data);
  return result;
}
