import { axiosInstance } from "./axiosInstance";

const loginApi = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login/", data);

    console.log(response);

    const access_token = response?.data?.data?.access;
    const refresh_token = response?.data?.data?.refresh;
    if (!access_token) {
      throw new Error("no token");
    }
    // console.log(access_token);

    return {access_token, refresh_token};
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default loginApi;
