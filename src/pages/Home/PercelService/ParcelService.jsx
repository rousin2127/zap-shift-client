import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';
// Note: You might want to import a specific call center image for item 3 later!

const ParcelService = () => {

    const deliveryFeatures = [
        {
            id: 1,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: liveTracking 
        },
        {
            id: 2,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safeDelivery 
        },
        {
            id: 3,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: safeDelivery 
        }
    ];

    return (
        <div className='max-w-5xl mx-auto px-4 my-8'>
            {/* Adjusted to grid-cols-3 on larger screens for a nice feature row */}
            <div className='grid grid-cols-1 gap-8'>
                {deliveryFeatures.map((feature) => (
                    <div 
                        key={feature.id} 
                        className='flex  items-center text-center bg-white rounded-lg shadow-sm border border-gray-100'
                    >
                        <div className='w-24 h-24 mb-4 flex items-center justify-center  '>
                            <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className='max-w-full max-h-full object-contain px-3  border-r-1 border-dashed border-gray-400'
                            />
                        </div>
                        <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                            {feature.title}
                        </h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParcelService;