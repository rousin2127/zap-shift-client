import React from 'react';

import bookingIcon from '../../../assets/bookingIcon.png'

const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            title: 'Booking Pick & Drop',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: bookingIcon 
        },
        {
            id: 2,
            title: 'Cash On Delivery',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: bookingIcon
        },
        {
            id: 3,
            title: 'Delivery Hub',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: bookingIcon
        },
        {
            id: 4,
            title: 'Booking SME & Corporate',
            description: 'From personal packages to business shipments — we deliver on time, every time.',
            icon:bookingIcon
        },
    ]

    return (
        <div className='max-w-6xl mx-auto'>

            <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 text-center'>How Its Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {steps.map(step => (
                    <div className='flex flex-col bg-white p-[32px] rounded-2xl ' key={step.id}> 
                        <div className="mb-6 flex items-center justify-start text-blue-600">
                            <img src={step.icon} alt="" />
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-gray-900 mb-3">
                            {step.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;

