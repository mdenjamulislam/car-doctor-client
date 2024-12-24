import React from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { IoSearch, IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <Typography as="li">
                <Link to="/" className="text-base font-semibold text-dark2 md:text-lg">
                    Home
                </Link>
            </Typography>
            <Typography as="li">
                <Link to="/about" className="text-base font-semibold text-dark2 md:text-lg">
                    About
                </Link>
            </Typography>
            <Typography as="li">
                <Link to="/service" className="text-base font-semibold text-dark2 md:text-lg">
                    Services
                </Link>
            </Typography>
            <Typography as="li">
                <Link to="/blog" className="text-base font-semibold text-dark2 md:text-lg">
                    Blog
                </Link>
            </Typography>
            <Typography as="li">
                <Link to="/contact" className="text-base font-semibold text-dark2 md:text-lg">
                    Contact
                </Link>
            </Typography>
        </ul>
    );
    return (
        <header className="">
            <Navbar className="h-max max-w-full rounded-none px-4 py-3 lg:px-8 lg:py-6 shadow-none">
                <div className="container">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Link to="/">
                            <img className="w-14 md:w-16 lg:w-20" src="https://i.ibb.co.com/HhrB90f/logo-light.png" alt="Car Doctor" />
                        </Link>
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-x-3">
                                <button className="text-2xl">
                                    <AiOutlineShopping />
                                </button>
                                <button className="text-2xl">
                                    <IoSearch />
                                </button>
                                <Button variant="outlined" className="hidden border-accent text-accent lg:inline-block">
                                    <span>Appointment</span>
                                </Button>
                            </div>
                            <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
                                {openNav ? <IoClose className="text-2xl" /> : <RiMenu3Line className="text-2xl" />}
                            </IconButton>
                        </div>
                    </div>
                    <MobileNav open={openNav}>
                        {navList}
                        <div className="flex items-center gap-x-3">
                            <Button variant="outlined" className="border-accent text-accent">
                                <span>Appointment</span>
                            </Button>
                        </div>
                    </MobileNav>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
