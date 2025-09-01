import { axiosPublic } from "./axiosInstance";

const getListApi = async () => {
  try {
    const response = await axiosPublic.get("/property/all/");
    //return  await response.data;
    return response.data;
  } catch (error) {
    console.error(error.message);
  }

  //return <div>getListApi</div>;
};

export default getListApi;
