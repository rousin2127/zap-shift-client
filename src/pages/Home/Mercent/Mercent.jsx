import React from 'react';
import merchent from '../../../assets/be-a-merchant-bg.png'
import merchentLocation from '../../../assets/location-merchant.png'

const Mercent = () => {
    return (
        <div className='max-w-5xl mx-auto border border-2 bg-[#03373D] rounded-[32px] relative '>
            <img src={merchent} alt="" />
            <div className=' flex pr-8 pl-20  '>
            <div className='text-wrap max-w-[500px] ' >
                <h1 className='text-white text-3xl font-semibold -mt-10 '>Merchant and Customer Satisfaction is Our First Priority</h1>
                <p className='text-[#DADADA] text-wrap max-w-[450px] my-4'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className='flex '>
                    <button className='bg-[#CAEB66] font-semibold p-3 rounded-4xl'>Become a Merchant</button>
                    <button className='text-[#CAEB66] border border-[#CAEB66] p-3 ml-3 rounded-4xl'>Earn with ZapShift Courier</button>
                </div>
            </div>
             
            
            <div className='h-[300px] -ms-10'>
                <img src={merchentLocation} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Mercent;