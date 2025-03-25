import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../shared components/ErrorPage";
import Home from "../pages/home/Home";
import JoinUs from "../auths/JoinUs";
import About from "../pages/about/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/courses",
                element:<Home/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/join-us",
                element:<JoinUs/>
            },

        ]
    },
]);


export default router