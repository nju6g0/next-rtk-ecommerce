import { createAxiosInstance } from "./axiosBase";

const axiosClient = createAxiosInstance(process.env.API_URL!);

export default axiosClient;
