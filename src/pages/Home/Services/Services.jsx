import React, { useEffect, useState } from "react";
import { use } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch("services.json");
            const data = await response.json();
            setServices(data);
        };
        fetchServices();
    }, []);

    console.log(services);

    return (
        <section className="sec-space">
            <div className="container">
                {/* Section-title */}
                <div className="mx-auto w-full text-center md:max-w-2xl">
                    <strong className="text-base text-accent md:text-lg">Service</strong>
                    <h2 className="heading-two">Our Service Area</h2>
                    <p className="mt-3 md:mt-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((service) => <ServiceCard key={service.id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
