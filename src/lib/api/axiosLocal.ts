import { createAxiosInstance } from "./axiosBase";

const axiosPost = createAxiosInstance(process.env.LOCAL_API_URL!);

export default axiosPost;
