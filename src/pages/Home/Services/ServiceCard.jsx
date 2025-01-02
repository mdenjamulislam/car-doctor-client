import { IconButton } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description, facility } = service;
    return (
        <div className="space-y-5 rounded-lg border border-gray-400 p-4 md:p-5 lg:space-y-6 lg:p-6">
            <img src={img} alt={title} className="rounded-lg" />
            <div>
                <h3 className="text-base font-semibold text-dark2 md:text-lg">{title}</h3>
                <div className="flex items-center justify-between">
                    <p className="text-accent">Price: {price}</p>
                    <Link to={`/services/${_id}`}>
                        <IconButton variant="text" className="text-accent">
                            <FaArrowRight />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
