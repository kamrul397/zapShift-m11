import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../Pages/Home";
import Coverage from "../Components/Coverage";

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
]);

export default router;
