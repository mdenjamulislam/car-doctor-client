import { Button, IconButton } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";


const Booking = ({ booking, handleCancle }) => {
    const { _id, sercieTitle, img, price, date } = booking;

    return (
        <div className="flex items-center justify-between rounded-lg border border-dark6 p-4">
            <div className="flex items-center gap-4">
                <IconButton onClick={() => handleCancle(_id)} className="rounded-full">
                    <IoMdClose />
                </IconButton>
                <figure>
                    <img src={img} alt={sercieTitle} className="h-36 w-36 rounded-md object-cover" />
                </figure>
                <h4 className="text-base font-medium text-dark1 md:text-lg">{sercieTitle}</h4>
            </div>
            <p>
                <strong>{price}</strong>
            </p>
            <p className="font-semibold">{date}</p>
            <Button className="bg-accent text-white">
                <span>Pending</span>
            </Button>
        </div>
    );
};

export default Booking;
