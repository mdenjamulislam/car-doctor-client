import React from 'react';
import { Link } from 'react-router-dom';
import breadcrumbsBg from "../../assets/breadcrumbs.png";

const Breadcrumb = ({title, bg}) => {
    return (
        <div className="relative overflow-hidden rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col items-center justify-center bg-overlay-dark">
                <div className="px-5 py-10 md:px-12 lg:px-24 lg:py-28">
                    <h1 className="heading-one text-white">{title}</h1>
                </div>
                <div className="bottom-0 inline-flex w-auto bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${breadcrumbsBg})` }}>
                    <div className="w-72 flex items-center justify-center gap-2 py-2 text-white">
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
    );
};

export default Breadcrumb;