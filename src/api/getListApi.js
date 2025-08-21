import { axiosInstance } from "./axiosInstance";

const getListApi = async () => {
  try {
    const response = await axiosInstance.get("/property/all/");
    //return  await response.data;
    return response.data;
  } catch (error) {
    console.error(error);
  }

  //return <div>getListApi</div>;
};

export default getListApi;
