import { useQuery } from "@tanstack/react-query";
import getAmenityList from "../api/getAmenityList";

export const useAmenities = () => {
  return useQuery({
    queryKey: ["aminities"],
    queryFn: getAmenityList,
    //staleTime: 1000 * 60 * 5, // optional: 5 minutes fresh 
    //without stale time, it have to refetch for same data, but after this, the stale data will be fresh for 5 minute, and data will be stored in cache
  });
};
