import React from "react";
import { useLoaderData } from "react-router-dom";
import Services from "../Home/Services/Services";
import Breadcrumb from "../../components/shared/Breadcrumb";

const AllServices = () => {
    const data = useLoaderData();
    return (
        <>
            <div className="container">
                <Breadcrumb title="Services" bg={`https://i.ibb.co.com/Rg1SwVM/4.jpg`} />
            </div>
            <Services />
        </>
    );
};

export default AllServices;
