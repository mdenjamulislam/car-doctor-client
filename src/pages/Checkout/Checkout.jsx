import React, { useContext } from "react";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { useLoaderData } from "react-router-dom";
import { Card, Input, Checkbox, Button, Typography, Textarea } from "@material-tailwind/react";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, service_id, img } = service;
    const { user } = useContext(AuthContext);

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone_number = form.phone_number.value;
        const email = form.email.value;
        const message = form.message.value;
        const service_name = form.service_name.value;
        const price = form.price.value;

        const order = {
            customerName: name,
            phoneNumber: phone_number,
            email: email,
            sercieTitle: service_name,
            price,
            message,
            service_id,
        };

        console.log(order);
    };
    return (
        <div className="container">
            <Breadcrumb title="Checkout" bg={img} />
            <Card color="transparent" shadow={true} className="my-10 rounded-2xl bg-dark7 p-5 md:my-14 md:p-10 lg:my-16 lg:p-14 xl:p-20">
                <form onSubmit={handleOrder} className="w-full">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input
                            name="name"
                            type="text"
                            defaultValue={user?.displayName}
                            size="lg"
                            placeholder="Full Name"
                            className="!border-white bg-white text-dark2 focus:!border-gray-300"
                            label="Full Name"
                            labelProps={{
                                className: "before:content-none after:content-none pl-4",
                            }}
                        />
                        <Input
                            name="service_name"
                            type="text"
                            value={title}
                            size="lg"
                            placeholder="Service Name"
                            className="!border-white bg-white text-dark2 focus:!border-gray-300"
                            label="Service Name"
                            labelProps={{
                                className: "before:content-none after:content-none pl-4",
                            }}
                        />
                        <Input
                            name="price"
                            type="text"
                            value={"$" + price}
                            size="lg"
                            placeholder="Service Amount"
                            className="!border-white bg-white text-dark2 focus:!border-gray-300"
                            label="Service Amount"
                            labelProps={{
                                className: "before:content-none after:content-none pl-4",
                            }}
                        />
                        <Input
                            name="phone_number"
                            size="lg"
                            placeholder="Phone Number"
                            className="!border-white bg-white text-dark2 focus:!border-gray-300"
                            label="Phone Number"
                            labelProps={{
                                className: "before:content-none after:content-none pl-4",
                            }}
                        />
                        <Input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            size="lg"
                            placeholder="Your Email"
                            className="!border-white bg-white text-dark2 focus:!border-gray-300"
                            label="Your Email"
                            labelProps={{
                                className: "before:content-none after:content-none pl-4",
                            }}
                        />
                        <Textarea name="message" placeholder="Your Message" className="col-span-full w-full !border-white bg-white text-dark2 focus:!border-gray-300" />
                    </div>
                    <Button type="submit" className="mt-6 w-full bg-accent" size="lg">
                        Order Confirm
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Checkout;
