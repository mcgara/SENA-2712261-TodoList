import { URL } from 'url';
import axios from 'axios';

export const API_URL = (() => {
  let url = null;
  try {
    url = new URL(process.env['EXPO_PUBLIC_API_URL']);
  } catch (err) {
    // Handler error url, logger
  }

  return url;
})();

export const api = !API_URL ? null : axios.create({ baseURL: API_URL });
export default api;
