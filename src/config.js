const API_BASE_URL = "/api";
const API_ADMIN_BASE_URL = "/administrativos";
const API_CITAS_BASE_URL = `${API_BASE_URL}/Citas`;
const API_PAGOS_BASE_URL = `${API_BASE_URL}/Pagos`;
const API_USUARIOS_BASE_URL = `${API_BASE_URL}/Usuarios`;
const API_RECUPERAR_CLAVE_URL = `${API_USUARIOS_BASE_URL}/ObtenerNuevaClave`;

export const API_NOTIFICACIONES = `${API_BASE_URL}/Notificaciones/ListarTodasNotificaciones`;

export {
  API_BASE_URL,
  API_ADMIN_BASE_URL,
  API_CITAS_BASE_URL,
  API_PAGOS_BASE_URL,
  API_USUARIOS_BASE_URL,
  API_RECUPERAR_CLAVE_URL
};