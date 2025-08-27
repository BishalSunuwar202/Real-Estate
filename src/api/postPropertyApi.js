import { axiosInstance } from "./axiosInstance";

const postPropertyApi = async (data) => {
    try {
    const response = await axiosInstance.post("/property/residential/", data);
    console.log("res")
    return response.data;
  } catch (error) {
    console.log("in err")
    console.error(error.response?.data || error.message);
    //throw error; // rethrow so caller can handle it
     throw error.response?.data || error;
  }
};

export default postPropertyApi;
