import { Navigate, useRoutes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLayout from "./components/adminComponents/AdminLayout";
import AdminHomePage from "./pages/ADMINPAGES/Home";
import Blogs from "./pages/ADMINPAGES/Blog";
import CreateBlog from "./pages/ADMINPAGES/CreateBlog";


export default function Routeer() {
  <Router></Router>;
  const routes = useRoutes([
    {
      path: "/*",
      element: <AdminLayout />,
      children: [
        { element: <Navigate to="/AdminHome" />, index: true },
        { path: "AdminHome", element: <AdminHomePage /> },
        { path: "allBlogs", element: <Blogs /> },
        { path: "createBlog", element: <CreateBlog /> },

    ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
      element: <AdminHomePage /> 
    },
  ]);

  return routes;
}