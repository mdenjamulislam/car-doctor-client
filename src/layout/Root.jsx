import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Root = () => {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default Root;
