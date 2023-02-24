interface Data {
  [key: string]: string;
}
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const api: Data = {
  login: `${BASE_URL}/api/login`
};
export default api;
