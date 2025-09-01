import React from "react";
import ReactHookForm from "../components/ReactHookForm";
import { useQuery } from "@tanstack/react-query";
import getListApi from "../api/getListApi";
import AllPropertyList from "../components/AllPropertyList";

const Home = () => {
  //access the client
  //const queryClient = useQueryClient();

  //Queries
  const {
    data: Lists,
    error,
    isPending,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["getAllData"],
    queryFn: getListApi,
  });
7
  console.log(status);
  console.log(Lists)
  console.log(isPending);
  //console.log(Lists);
  console.log(status);
  //console.log(error);

  if (isLoading) return <div>Fetching post</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  //Mutations
  //   const mutation = useMutation({
  //     mutationFn: postData,
  //     onSuccess: () => {
  //       //Invalidate and refetch
  //       queryClient.invalidateQueries({ queryKey: ["getAllData"] });
  //     },
  //   }); //import mutation also

  return (
    <>
      <div className="house1">
        <div className="home-search">
          <h1>Find Your Best Property</h1>
          <p>
            We say goodbye to every home with the same care and respect we greet
            a new one.
          </p>
          <ReactHookForm />
        </div>
      </div>
      <div>
        <AllPropertyList Lists={Lists} />
      </div>
      {/* <Chatbotify /> */}
    </>
  );
};

export default Home;
