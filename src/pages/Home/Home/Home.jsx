import { Button } from '@material-tailwind/react';
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import CallToAction from '../CTA/CallToAction';

const Home = () => {
    return (
        <>
            <Banner/>
            <About />
            <Services />
            <CallToAction/>
        </>
    );
};

export default Home;