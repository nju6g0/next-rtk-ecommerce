import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.API_URL || process.env.LOCAL_API_UR,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

export function createAxiosInstance(baseURL: string) {
  return axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
