import axios from 'axios'

export const API_URL = process.env['EXPO_PUBLIC_API_URL'] ?? null;

export const api = !API_URL ? null : axios.create({ baseURL: API_URL });
export default api;
