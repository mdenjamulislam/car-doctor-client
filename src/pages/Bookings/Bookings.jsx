import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import Breadcrumb from "../../components/shared/Breadcrumb";
import bannerBg from "../../assets/images/banner/6.jpg";
import Booking from "./Booking";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
                console.log(data);
            });
    }, []);

    const handleCancle = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Canceled!",
                    text: "Your booking is cancel.",
                    icon: "success",
                });

                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            const remaning = bookings.filter((booking) => booking._id !== id);
                            setBookings(remaning);
                        }
                    });
            }
        });
    };

    return (
        <div className="container">
            <Breadcrumb title="Booking Details" bg={bannerBg}></Breadcrumb>
            <div className="sec-space space-y-4 md:space-y-6">
                {bookings.map((booking) => (
                    <Booking key={booking._id} booking={booking} handleCancle={handleCancle}></Booking>
                ))}
                _
            </div>
        </div>
    );
};

export default Bookings;
