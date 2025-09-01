import "./sass/style.scss";
import MainNavigation from "./components/MainNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import PostResidential from "./pages/postProperties/PostResidential";
import AuthenticationPage from "./pages/AuthenticationPage";
//import Chatbotify from "./components/Chatbotify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <AuthenticationPage />
      },
      {
        path: "/post-property",
        element: <PostResidential />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
