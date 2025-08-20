import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <h1>Something is wrong</h1>
        <p>reamining to do is css and error from api using useRouteError()</p>
      </div>
    </>
  );
};

export default ErrorPage;
