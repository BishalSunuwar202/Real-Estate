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
    console.log("1");
    if (error.response.status === 401 && !OriginalRequest._retry) {
      console.log("2");
      OriginalRequest._retry = true; // Make the request as retried to avoid infinite loops.
      try {
        console.log("3");
        const refresh = localStorage.getItem("refresh_token");
        //check here if the token is expired or not
        //if expired use from public not private axiosInstance
        if (!refresh) {
          return Promise.reject(new Error("No refresh token available"));
        }
        const response = await axiosPublic.post("/auth/token/refresh/", {
          refresh,
        });
        const { access_token, refresh_token: newRefreshToken } = response.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", newRefreshToken);
        //updates the authorization header with the new access token
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        return axiosInstance(OriginalRequest);
        //retry the original request with the new access token
      } catch (refreshError) {
        console.log(("Token refresh failed:", refreshError));
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("refreshToken");
        // window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
