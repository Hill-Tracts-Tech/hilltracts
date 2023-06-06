import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";
import NotFound from "../../Pages/_404";
import Term_Condition from "../../Pages/Term_Condition/Term_Condition";

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
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://rowopyusay-server.vercel.app/blogs/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/term-condition",
    element: <Term_Condition />,
  },
]);

export default router;
