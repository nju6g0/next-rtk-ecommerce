import { createAxiosInstance } from "./axiosBase";

const axiosClient = createAxiosInstance({
  baseURL: process.env.API_URL!,
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("authToken") || undefined;
    }
    return undefined;
  },
});

export default axiosClient;
