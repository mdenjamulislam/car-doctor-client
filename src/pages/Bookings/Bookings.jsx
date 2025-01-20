import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Breadcrumb from '../../components/shared/Breadcrumb';
import bannerBg from '../../assets/images/banner/6.jpg';
import Booking from './Booking';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, []);

    console.log(user.email);

    return (
        <div className="container">
            <Breadcrumb title="Booking Details" bg={bannerBg}></Breadcrumb>
            <div className="sec-space space-y-4 md:space-y-6">
                {bookings.map((booking) => (
                    <Booking key={booking._id} booking={booking}></Booking>
                ))}
                _
            </div>
        </div>
    );
};

export default Bookings;