import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";
import NotFound from "../../Pages/_404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/servicesDetails",
        element: <ServiceDetails />,
      },

      {
        path: "/blogs/:blogId",
        element: <BlogDetails />,
        loader: ({ params }) => {
          return fetch(
            `https://rowopyusay-server.vercel.app/blogs/${params.blogId}}`
          );
        },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
