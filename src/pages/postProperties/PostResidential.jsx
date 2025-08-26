import React from "react";
import PostResidentialPropertyForm from "../../components/forms/PostResidentialPropertyForm";
import { useMutation } from "@tanstack/react-query";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import postPropertyApi from "../../api/postPropertyApi";

const PostResidential = () => {
  //  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: postPropertyApi,
    onSuccess: () => {
      alert("signup successful");
      //queryClient.invalidateQueries(["users"]); // if you want to refetch users list
    },
    onError: (err) => {
      alert(err.response?.data?.message || "post failed");
    },
  });

  return (
    <>
      <div>
        <PostResidentialPropertyForm mutate={mutate} />
      </div>
    </>
  );
};

export default PostResidential;
