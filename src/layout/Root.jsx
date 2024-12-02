import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Root = () => {
    return (
        <>
            <Outlet />
            <Footer/>
        </>
    );
};

export default Root;
