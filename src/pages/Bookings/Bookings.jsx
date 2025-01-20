import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Breadcrumb from '../../components/shared/Breadcrumb';
import bannerBg from '../../assets/images/banner/6.jpg';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/booking?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, []);

    return (
        <div className='container'>
            <Breadcrumb title="Booking Details" bg={bannerBg}></Breadcrumb>
        </div>
    );
};

export default Bookings;