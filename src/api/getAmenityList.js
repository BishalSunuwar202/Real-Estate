import { axiosInstance } from "./axiosInstance";

const getAmenityList = async () => {
  try {
    const response = await axiosInstance.get("/property/amenities/");
    //return  await response.data;

    return response.data;
  } catch (error) {
    console.error(error.message);
  }

  //return <div>getListApi</div>;
};

export default getAmenityList;
