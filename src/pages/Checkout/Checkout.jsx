import React from 'react';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='container'>
            <Breadcrumb title='Checkout' bg='https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b' />
        </div>
    );
};

export default Checkout;