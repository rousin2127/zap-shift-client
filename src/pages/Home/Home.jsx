import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HouItWorks/HowItWorks';
import Service from './Service/Service';
import Brands from './Brands/Brands';
import Reviews from './Reviews/Reviews';
import ParcelService from './PercelService/ParcelService';
import Faq from './FAQ/Faq';


const reviewsPromise= fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Service></Service>
            <Brands></Brands>
            <ParcelService></ParcelService>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;