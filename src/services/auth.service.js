import axios from "axios";
import { getToken, setToken } from "./helpers";
//!remove token todavia no se esta utilizando, no importar para evitar errores

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({ baseURL: BASE_URL });

const token = getToken();

if (token) {
	setToken(token);
}

export function login({ email, password }) {
	return axiosInstance
    .post(`${BASE_URL}/auth/login`, { email, password })
    .then((response) => {
      if (response.data.user) {
        return { token: response.data.token, user: response.data.user };
      } else {
        throw new Error('Login inválido');
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('login invalido');
      }
    });
}

export { axiosInstance };