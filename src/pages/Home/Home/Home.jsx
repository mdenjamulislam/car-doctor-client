import { Button } from '@material-tailwind/react';
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import CallToAction from '../CTA/CallToAction';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <>
            <Banner/>
            <About />
            <Services />
            <CallToAction />
            <Teams/>
        </>
    );
};

export default Home;