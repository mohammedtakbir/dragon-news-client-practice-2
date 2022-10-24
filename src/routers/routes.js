import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import News from "../pages/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/news',
                element: <News />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])