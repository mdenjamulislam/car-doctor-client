import { IconButton } from "@material-tailwind/react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const TeamCard = ({ team }) => {
    return (
        <div className="flex flex-col items-center gap-4 space-y-5 rounded-xl border border-gray-400 p-6">
            <img className="h-24 w-24 rounded-full" src={team.image} alt="" />
            <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold text-dark2 md:text-xl">{team.name}</h3>
                <p>{team.role}</p>
            </div>
            {/* Social media */}
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
    );
};

export default TeamCard;
