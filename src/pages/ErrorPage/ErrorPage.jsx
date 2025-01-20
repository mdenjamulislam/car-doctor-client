import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-10'>
            <img src="https://i.ibb.co.com/bHySfd5/404.png" alt="" />
            <Link to='/'>
                <Button variant='filled'>Back to Home</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;