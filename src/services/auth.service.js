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
		.then((response) => response.data)
		.catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}

export { axiosInstance };