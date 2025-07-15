import { createAxiosInstance } from "./axiosBase";

const axiosInstance = createAxiosInstance(process.env.API_URL!);

export default axiosInstance;
