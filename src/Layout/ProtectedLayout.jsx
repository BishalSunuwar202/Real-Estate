import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const token = localStorage.getItem("access_token");
  if (!token || token === "undefined" || token === "null") {
    return <Navigate to="/login" replace />;
    //replace here replaces the current history entry instead of adding a new one.Use it when you want to redirect automatically without allowing the user to hit back and return to the protected page.
    //navigate("/dashboard", { replace: true }) does the same as <Navigate replace />.
    // //Imperative navigation is used inside functions (event handlers, effects, loaders).Declarative <Navigate /> is used in JSX when rendering a redirect as a component.
    //Use <Navigate replace /> for automatic redirects in render (like private route).Use navigate(..., { replace: true }) for imperative redirects in functions.
  }
  return <Outlet />;
};

export default ProtectedLayout;
