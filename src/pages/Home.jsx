import React from "react";
import ReactHookForm from "../components/ReactHookForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
  //access the client
  const queryClient = useQueryClient();

  //Queries
  const query = useQuery({ queryKey: ["getAllData"], queryFn: getAllData });

  //Mutations
  //   const mutation = useMutation({
  //     mutationFn: postData,
  //     onSuccess: () => {
  //       //Invalidate and refetch
  //       queryClient.invalidateQueries({ queryKey: ["getAllData"] });
  //     },
  //   }); //import mutation also 

  return (
    <div className="house1">
      <div className="home-search">
        <h1>Find Your Best Property</h1>
        <p>
          We say goodbye to every home with the same care and respect we greet a
          new one.
        </p>
        <ReactHookForm />
      </div>
      {/* <Chatbotify /> */}
    </div>
  );
};

export default Home;
