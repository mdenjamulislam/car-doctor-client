import React, { useState } from "react";

const Services = () => {
    const [services, setServices] = useState();
    
    return (
        <section>
            <div className="container">
                {/* Section-title */}
                <div>
                    <div className="w-full md:max-w-2xl mx-auto text-center">
                        <strong className="text-base text-accent md:text-lg">Service</strong>
                        <h2 className="heading-two">Our Service Area</h2>
                        <p className="mt-3 md:mt-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
