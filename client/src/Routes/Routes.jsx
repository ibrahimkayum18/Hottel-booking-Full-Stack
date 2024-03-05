import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import About from "../Pages/AboutUs/About";
import Buses from "../Pages/Buses/Buses";
import Hotels from "../Pages/Hotels/Hotels";
import MyBookings from "../Pages/Guest/MyBookings";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/bus',
                element:<Buses />
            },
            {
                path:'/hotel',
                element:<Hotels />
            },
            {
                path:'/my-bookings',
                element:<MyBookings />
            }
        ]
    },
    {path:'/login', element:<LogIn />},
    {path:'/register', element:<Register />}
])

export default Routes;