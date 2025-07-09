// Ya sin IP, usa las rutas que definiste en vercel.json
const API_BASE_URL = "/api";
const API_ADMIN_BASE_URL = "/administrativos";
const API_CITAS_BASE_URL = "/citas";
const API_PAGOS_BASE_URL = "/pagos";
const API_USUARIOS_BASE_URL = "/usuarios";
const API_RECUPERAR_CLAVE_URL = "/recuperar-clave";

export const API_NOTIFICACIONES = `${API_BASE_URL}/Notificaciones/ListarTodasNotificaciones`;

export {
  API_BASE_URL,
  API_ADMIN_BASE_URL,
  API_CITAS_BASE_URL,
  API_PAGOS_BASE_URL,
  API_USUARIOS_BASE_URL,
  API_RECUPERAR_CLAVE_URL
};