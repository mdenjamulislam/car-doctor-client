import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import Service from "../pages/Service/Service";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Service/AllServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/services/:id",
                element: <Service />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/checkout/:id",
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`),
            },
            {
                path: "/booking",
                element: (
                    <PrivateRoute>
                        <Bookings />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
