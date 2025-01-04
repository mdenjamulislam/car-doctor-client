import { Breadcrumbs, Button, IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa";
import breadcrumbsBg from "../../assets/breadcrumbs.png";

const Service = () => {
    const [serviceTitle, setServiceTitle] = useState([]);
    const service = useLoaderData();
    const { _id, title, img, price, description, facility } = service;

    useEffect(() => {
        fetch("http://localhost:5000/services/title")
            .then((response) => response.json())
            .then((data) => setServiceTitle(data));
    }, []);

    console.log(serviceTitle);
    return (
        <div className="container">
            <div className="relative overflow-hidden rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
                <div className="flex flex-col items-center justify-center bg-overlay-dark">
                    <div className="px-5 py-10 md:px-12 lg:px-24 lg:py-28">
                        <h1 className="heading-one text-white">{title}</h1>
                    </div>
                    <div className="bottom-0 inline-flex w-auto bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${breadcrumbsBg})` }}>
                        <div className="flex items-center gap-2 px-8 py-2 text-white">
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                            /
                            <Link to={`/services/{$_id}`} className="opacity-60 hover:underline hover:opacity-100">
                                {title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="col-span-full space-y-4 md:space-y-6 lg:col-span-2">
                    <figure>
                        <img src={img} alt={title} className="h-auto w-full rounded-md object-cover md:h-60 lg:h-[400px]" />
                    </figure>
                    <h2 className="heading-three">{title}</h2>
                    <p className="text-dark3">{description}</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                        {facility.map((item, index) => (
                            <div key={index} className="space-y-2 rounded-lg border-t-4 border-accent bg-dark7 p-4 md:p-6">
                                <h4 className="text-base font-semibold text-dark3 md:text-lg">{item.name}</h4>
                                <p className="text-dark3">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-full space-y-5 md:space-y-6 lg:col-span-1">
                    <div className="space-y-4 rounded-lg bg-dark7 p-5 md:p-8 lg:p-10">
                        <h2 className="heading-three">Services</h2>
                        {serviceTitle.map((data) => (
                            <div key={data._id} className="group flex items-center justify-between rounded-md bg-white p-4 text-dark1 transition-all duration-300 hover:bg-accent hover:text-white">
                                <p className="text-base font-medium">{data.title}</p>
                                <Link to={`/services/${data._id}`}>
                                    <IconButton variant="text" className="text-accent group-hover:text-white">
                                        <FaArrowRight />
                                    </IconButton>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 rounded-xl bg-dark1 p-5 text-white md:p-8 lg:p-10">
                        <h3 className="heading-three text-white">Download</h3>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaRegFilePdf className="text-2xl md:text-4xl" />
                                <div className="space-y-1">
                                    <strong>Our Brochure</strong>
                                    <p className="text-xs text-dark6">Download</p>
                                </div>
                            </div>
                            <IconButton className="bg-accent text-white">
                                <FaDownload />
                            </IconButton>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaRegFilePdf className="text-2xl md:text-4xl" />
                                <div className="space-y-1">
                                    <strong>Company Details</strong>
                                    <p className="text-xs text-dark6">Download</p>
                                </div>
                            </div>
                            <IconButton className="bg-accent text-white">
                                <FaDownload />
                            </IconButton>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 rounded-xl bg-dark1 p-5 text-center text-white md:gap-5 md:p-8 lg:p-10">
                        <img src="https://i.ibb.co.com/HhrB90f/logo-light.png" alt="" />
                        <h4 className="text-lg font-semibold text-white md:text-xl">Need Help? We Are Here To Help You</h4>
                        <div className="flex flex-col items-center">
                            <div className="space-y-2 rounded-lg bg-white p-6 md:p-8">
                                <h4 className="text-lg text-dark1 md:text-lg">
                                    <span className="text-lg font-semibold text-accent md:text-xl">Car Doctor</span> Special
                                </h4>
                                <p className="text-dark2">
                                    Save up to <span className="text-accent">60% off</span>
                                </p>
                            </div>
                            <Button size="lg" className="-mt-5 bg-accent">
                                Get A Quote
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="heading-three">Price ${price}</h3>
                        <Button size="lg" className="w-full bg-accent text-center">
                            Proceed Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
