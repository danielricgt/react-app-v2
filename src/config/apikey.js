// Solo usa import.meta, porque este archivo NO debe ser cargado durante tests
const apiKey = import.meta.env.VITE_API_KEY;
export default apiKey;