import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const axiosPublic = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});
//Why use timeout?
//To avoid keeping the user waiting forever if the server hangs or network is unstable.
//To give better UX: you can show a message like "Server is taking too long, please try again.".

//Request interceptor to add token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const OriginalRequest = error.config;
    if (error.response.status === 401 && !OriginalRequest._retry) {
      OriginalRequest._retry = true; // Make the request as retried to avoid infinite loops.
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosInstance.post("/auth/token/refresh/", {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        //updates the authorization header with the new access token
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        return axiosInstance(OriginalRequest);
        //retry the original request with the new access token
      } catch (refreshError) {
        console.log(("Token refresh failed:", refreshError));
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
