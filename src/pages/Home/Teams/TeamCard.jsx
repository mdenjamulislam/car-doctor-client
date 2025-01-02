import { IconButton } from "@material-tailwind/react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamCard = ({ team }) => {
    const { name, role, image, social_media } = team;

    console.log(social_media);
    return (
        <div className="flex flex-col items-center gap-4 space-y-5 rounded-xl border border-gray-400 p-6">
            <img className="h-24 w-24 rounded-full" src={image} alt="" />
            <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold text-dark2 md:text-xl">{name}</h3>
                <p>{role}</p>
            </div>
            {/* Social media */}
            <div className="flex items-center gap-2">
                <Link to={social_media.facebook}>
                    <IconButton className="rounded-full">
                        <FaFacebookF />
                    </IconButton>
                </Link>
                <Link to={social_media.twitter}>
                    <IconButton className="rounded-full">
                        <FaXTwitter />
                    </IconButton>
                </Link>
                <Link to={social_media.instagram}>
                    <IconButton className="rounded-full">
                        <FaInstagram />
                    </IconButton>
                </Link>
                <Link to={social_media.linkedin}>
                    <IconButton className="rounded-full">
                        <FaLinkedinIn />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default TeamCard;
