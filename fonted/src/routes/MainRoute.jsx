import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Instructor from "../pages/instructor/Instructor";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Register from "../Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Register></Register>,
      },
    ],
  },
]);
