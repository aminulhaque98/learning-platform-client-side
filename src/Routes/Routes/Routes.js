import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Others/Blog/Blog";
import Faq from "../../Others/FAQ/Faq";
import Profile from "../../Others/Profile/Profile";
import Category from "../../pages/Category/Category/Category";
import Course from "../../pages/Course/Course/Course";
import CourseDetails from "../../pages/Course/CourseDetails/CourseDetails";
import PremiumCourse from "../../pages/Course/PremiumCourse/PremiumCourse";

import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }

        ]
    }
])