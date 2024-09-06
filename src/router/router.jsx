import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import WomenPage from "../pages/WomenPage";
import MalePage from "../pages/MalePage";
import ChildrenPage from "../pages/ChildrenPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <WomenPage />,
      },
      {
        path: "/male",
        element: <MalePage />,
      },
      {
        path: "/children",
        element: <ChildrenPage />,
      },
    ],
  },
]);
