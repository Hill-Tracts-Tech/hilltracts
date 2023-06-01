import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            }
            ,
            {
                path:'/servicesDetails',
                element:<ServiceDetails/>
            },

            {
                path:'/blog-details',
                element:<BlogDetails/>
            }
        ]
    }
])

export default router;