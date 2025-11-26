import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../Pages/Home";
import Coverage from "../Components/Coverage";
import Authlayout from "../layouts/Authlayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <Authlayout></Authlayout>,
    children: [
      // Auth related routes can be added here
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
