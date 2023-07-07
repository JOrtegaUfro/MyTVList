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

export function seriesAdmin() {
	return axiosInstance
		.get(`${BASE_URL}/series/1`,)
		.then((response) => response.data.series)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}
export function crearSerieAdmin({portada, nombre, estado,capitulos,minutos}) {
	return axiosInstance
		.post(`${BASE_URL}/series/1`,{ portada, nombre, estado,capitulos,minutos })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function seriesUsuario() {
	return axiosInstance
		.get(`${BASE_URL}/users/1/series`,)
		.then((response) => response.data.series)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}
export function crearSerieUsuario({portada, nombre, estado,capitulos,minutos}) {
	return axiosInstance
		.post(`${BASE_URL}/users/23/series`,{ portada, nombre, estado,capitulos,minutos })
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function deleteSerie({idSerie}) {
	return axiosInstance
		.delete(`${BASE_URL}/series/`+idSerie)
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export function actualizarEstadoSerie({idSerie,estado}) {
	return axiosInstance
		.put(`${BASE_URL}/users/1/series/`+idSerie,{estado})
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export { axiosInstance };