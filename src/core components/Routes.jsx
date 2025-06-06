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

import Contact from "../pages/Contact/Contact";
import ChatRoom from "../pages/ChatRoom/ChatRoom";
import LiveClass from "../pages/LiveClass/LiveClass";
import Room from "../pages/LiveClass/Room";
import AddNewCourse from "../pages/addNewCourse/addNewCourse";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import Courses from "../pages/courses/Courses";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/join-us",
                element: <JoinUs />
            },
            // {
            //     path: "/chat",
            //     element: <ChatRoom></ChatRoom>
            // },
            {
                path: "/live-class",
                element: <LiveClass></LiveClass>
            },
            {
                path: "/room/:roomId",
                element: <Room></Room>
            },
            {
                path: "/courses",
                element: <Courses />,
            },
            {
                path: "/addNewCourse",
                element: <AddNewCourse />,
            },
            {
                path: "/courses/:id",
                element: <CourseDetails />,
            },
         
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />

    }
]);


export default router