import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BannerImg1 from '../../../assets/banner/banner1.png'
import BannerImg2 from '../../../assets/banner/banner2.png'
import BannerImg3 from '../../../assets/banner/banner3.png'


const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className='mt-[30px]'>
            <div className='relative'>
                <img src={BannerImg1} />
                <div className='absolute bottom-27 left-21   '>
                    {/* <p className='text-start'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p> */}
                    <button className='bg-primary px-5 py-2 font-bold rounded-4xl mr-2.5'>Track Your Parcel</button>
                    <button className='px-5 py-2 font-bold border-2 rounded-xl'>Be a Rider</button>
                </div>
                
            </div>
            <div>
                <img src={BannerImg2} />
                                <div className='absolute bottom-27 left-21   '>
                    {/* <p className='text-start'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p> */}
                    <button className='bg-primary px-5 py-2 font-bold rounded-4xl mr-2.5'>Track Your Parcel</button>
                    <button className='px-5 py-2 font-bold border-2 rounded-xl'>Be a Rider</button>
                </div>
                
            </div>
            <div>
                <img src={BannerImg3} />
                                <div className='absolute bottom-27 left-21   '>
                    {/* <p className='text-start'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p> */}
                    <button className='bg-primary px-5 py-2 font-bold rounded-4xl mr-2.5'>Track Your Parcel</button>
                    <button className='px-5 py-2 font-bold border-2 rounded-xl'>Be a Rider</button>
                </div>
                
            </div>
        </Carousel>
    );
};

export default Banner;