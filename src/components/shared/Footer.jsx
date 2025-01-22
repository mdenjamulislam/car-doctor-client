import { IconButton, Typography } from "@material-tailwind/react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LINKS = [
    {
        title: "About",
        items: ["Home", "Services", "Contact"],
    },
    {
        title: "Company",
        items: ["About us", "Who Car Doctor"],
    },
    {
        title: "Support",
        items: ["Support Center", "Feedback", "Accesbility"],
    },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="relative w-full bg-primary">
            <div className="container">
                <div className="grid grid-cols-1 justify-between gap-4 py-8 md:grid-cols-3 md:gap-8 md:py-10 lg:gap-10">
                    <div className="space-y-4 md:space-y-5">
                        <div className="space-y-0">
                            <img src="https://i.ibb.co.com/R6g8D7N/Group-1.png" alt="" />
                            <h5 className="font-semibold text-white">Car Doctor</h5>
                        </div>
                        <p className="text-dark6">Car Doctor is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        <div className="flex items-center gap-2">
                            <IconButton className="rounded-full">
                                <FaFacebookF />
                            </IconButton>
                            <IconButton className="rounded-full">
                                <FaXTwitter />
                            </IconButton>
                            <IconButton className="rounded-full">
                                <FaInstagram />
                            </IconButton>
                            <IconButton className="rounded-full">
                                <FaLinkedinIn />
                            </IconButton>
                        </div>
                    </div>
                    <div className="col-span-full grid grid-cols-3 justify-between gap-4 md:col-span-2">
                        {LINKS.map(({ title, items }) => (
                            <div key={title} className="space-y-5">
                                <h4 className="text-lg font-semibold text-gray-200 lg:text-xl">{title}</h4>
                                <ul className="flex flex-col gap-2">
                                    {items.map((link) => (
                                        <li key={link}>
                                            <Link className="text-dark7 font-normal transition-colors hover:text-white">{link}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center border-t border-gray-600 py-4 md:flex-row md:justify-between">
                    <Typography variant="small" className="text-center font-normal text-dark6 md:mb-0">
                        &copy; {currentYear} <Link to="/">Car Doctor</Link>. All Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
