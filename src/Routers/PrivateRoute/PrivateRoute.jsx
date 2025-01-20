import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex h-screen w-full items-center justify-center">loading</div>;
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
