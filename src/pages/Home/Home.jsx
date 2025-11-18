import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HouItWorks/HowItWorks';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Service></Service>
        </div>
    );
};

export default Home;