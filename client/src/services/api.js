import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
})

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  const { user, token } = resp.data;
  storeToken(token);
  return user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData });
  const token = resp.data.token;
  storeToken(token);
  return resp.data
}

export const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}