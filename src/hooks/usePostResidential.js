import { useMutation } from "@tanstack/react-query";
import postPropertyApi from "../api/postPropertyApi";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
const usePostResidential = () => {
  //  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postPropertyApi,
  });
};

export default usePostResidential;
