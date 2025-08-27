import { axiosInstance } from "./axiosInstance";

const loginApi = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login/", data);

    console.log(response);

    // return response.data;

    const access_token = response.data.data.access;
    console.log(access_token);

    localStorage.setItem("access_token", access_token);
  } catch (error) {
    console.error(error);
  }
};

export default loginApi;
