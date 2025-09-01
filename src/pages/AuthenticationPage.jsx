import React from "react";
import Authentication from "../components/Authentication";
import { useMutation } from "@tanstack/react-query";
import loginApi from "../api/loginApi";

const AuthenticationPage = () => {
  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ access_token, refresh_token }) => {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      console.log("sign in success", access_token, refresh_token);
      //queryClient.invalidateQueries(["users"]); // if you want to refetch users list
    },
    onError: (err) => {
      console.log(err.response?.data?.message || "post failed");
    },
  });

  return (
    <div>
      <Authentication mutation={mutation} />
    </div>
  );
};

export default AuthenticationPage;
