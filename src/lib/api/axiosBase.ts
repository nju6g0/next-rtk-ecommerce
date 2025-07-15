import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.API_URL || process.env.LOCAL_API_UR,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

interface CreateAxiosInstanceOptions {
  baseURL: string;
  getToken?: () => string | undefined;
}
export function createAxiosInstance({
  baseURL,
  getToken,
}: CreateAxiosInstanceOptions) {
  // ✅ 建立一個 Axios 實例
  const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // ✅ Request Interceptor：加上 token 或攔截特定路徑
  instance.interceptors.request.use(
    (config) => {
      const token = getToken?.();
      if (config.url?.startsWith("/todos")) {
        if (!token) {
          return Promise.reject(new Error("未登入，禁止請求 /todos"));
        }
      }
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // ✅ Response Interceptor：統一錯誤處理、重新導向
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.warn("未授權，請重新登入");
        // 可以選擇導向登入頁、清除 token 等
      }

      return Promise.reject(error);
    }
  );

  return instance;
}
