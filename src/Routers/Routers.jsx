import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import Service from "../pages/Service/Service";
import Checkout from "../pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                path: "/services/:id",
                element: <Service />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/checkout/:id",
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`),
            },

        ],
    },
]);

export default router;
