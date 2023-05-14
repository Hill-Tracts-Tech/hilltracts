import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/home',
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
                path:'/services',
                element:<Services></Services>
            }
        ]
    }
])

export default router;