import React from 'react';
import service from '../../../../public/service.json'
import ServiceIcon from '../../../assets/service.png'

const Service = () => {
    return (
        <div className='bg-gray-900 mt-[50px] py-[60px] rounded-3xl'>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-400 mb-4 text-center">
                Our Logistics Services
            </h1>
            <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
                Explore the comprehensive range of solutions designed to meet all your personal and corporate delivery needs.
            </p>
            <div className='grid grid-cols-3 gap-4 py-[60px] max-w-6xl mx-auto '>
            {service.map(service => (

                    <div
                        key={service.id}
                        className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${service.highlighted ?
                        'bg-primary' : 'bg-white'} flex flex-col items-center text-center`}
                    >
                        {/* Icon Placeholder (mimicking the circular graphic) */}
                        <div className={`mb-6 h-16 w-16 flex items-center justify-center rounded-full shadow-md`}>
                            <img src={ServiceIcon} alt="" />
                        </div>

                        {/* Title */}
                        <h2 className={`text-xl font-bold mb-3 ${service.highlighted ? 'text-gray-900' : 'text-teal-400'} `}>
                            {service.title}
                        </h2>

                        {/* Description */}
                        <p className={`text-base leading-relaxed ${service.highlighted ? 'text-gray-800' : 'text-gray-400'}`}>
                            {service.description}
                        </p>
                    </div>
                
            ))}
            </div>
        </div>
    );
};

export default Service;