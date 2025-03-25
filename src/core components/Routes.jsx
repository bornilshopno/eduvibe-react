import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../shared components/ErrorPage";
import Home from "../pages/home/Home";
import JoinUs from "../auths/JoinUs";
import About from "../pages/about/About";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

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
                element:<Home/>
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
    {
        path: "/dashboard",
        element: <DashboardLayout/>
    }
]);


export default router