import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Component/Home/Home/Home";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import JavaScript from "../../Pages/Items/JavaScript/JavaScript";
import PHP from "../../Pages/Items/PHP/PHP";
import WordPress from "../../Pages/Items/WordPress/WordPress";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/javascript',
                element:<JavaScript></JavaScript>
            },
            {
                path:'/php',
                element:<PHP></PHP>
            },
            {
                path:'/wordpress',
                element:<WordPress></WordPress>
            },
        ]
    }
])