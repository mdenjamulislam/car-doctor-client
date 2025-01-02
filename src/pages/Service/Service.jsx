import React from "react";
import { useLoaderData } from "react-router-dom";

const Service = () => {
    const service = useLoaderData();
    const { _id, title, img, price, description, facility } = service;
    return (
        <div className="container">
            <div className="overflow-hidden rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
                <div className="bg-overlay-dark px-5 py-10 md:px-10 lg:px-20 lg:py-20">
                    <h1 className="heading-one text-white">{title}</h1>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="col-span-full space-y-4 md:space-y-6 lg:col-span-2">
                    <figure>
                        <img src={img} alt={title} className="h-auto w-full rounded-md object-cover md:h-60 lg:h-[400px]" />
                    </figure>
                    <h2 className="heading-three">{title}</h2>
                    <p className="text-dark3">{description}</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                        {facility.map((item, index) => (
                            <div key={index} className="space-y-2 rounded-lg border-t-4 border-accent bg-dark7 p-4 md:p-6">
                                <h4 className="text-dark3 text-base font-semibold md:text-lg">{item.name}</h4>
                                <p className="text-dark3">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
