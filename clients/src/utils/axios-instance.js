import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lama-backend-td7f.onrender.com/api/v1",
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // force redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
