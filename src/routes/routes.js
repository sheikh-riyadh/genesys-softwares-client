import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Recover from "../pages/Login/Recover";
import Register from "../pages/Login/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }, {
                path: '/login',
                element: <Login />
            }, {
                path: '/register',
                element: <Register />
            }, {
                path: '/recover-password',
                element: <Recover />
            }
        ]
    }
])