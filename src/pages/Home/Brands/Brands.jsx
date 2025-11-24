import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import randstad from '../../../assets/brands/randstad.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';


const brandLogo = [ amazon, casio, moonstar, star, randstad, start_people ]

const Brands = () => {
    return (
        <div className=' mt-[50px]  '>
            <div>
                <h2 className='font-bold text-center my-[30px] text-2xl'>We've helped thousands of sales teams</h2>
            </div>
            <Swiper
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={30}
                
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }
                } >

                {
                    brandLogo.map((logo, index) => (
                        <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Brands;