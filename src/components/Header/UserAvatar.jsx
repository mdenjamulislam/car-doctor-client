import React, { useContext } from "react";
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { FaUser, FaGear, FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const UserAvatar = () => {
    const { logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogOut = () => {
        logOut();
        closeMenu();
    }
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button variant="text" color="blue-gray" className="flex items-center rounded-full p-0">
                    <Avatar variant="circular" size="md" alt="tania andrew" withBorder={true} color="blue-gray" className="p-0.5" src="https://docs.material-tailwind.com/img/face-2.jpg" />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 border-none">
                <ul className="border-none">
                    <li>
                        <Link className="flex items-center gap-2 p-2 text-dark2 hover:bg-dark6 hover:text-accent" to="/profile">
                            <FaUser />
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-2 p-2 text-dark2 hover:bg-dark6 hover:text-accent" to="">
                            <FaGear />
                            <span>Edit Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-2 p-2 text-dark2 hover:bg-dark6 hover:text-accent" onClick={logOut}>
                            <FaArrowRightFromBracket />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </MenuList>
        </Menu>
    );
};

export default UserAvatar;
