import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';


const ReviewCard = ({ review }) => {
    const {userName, review:testimonial, user_photoURL } = review
    return (
        <div className="card bg-base-100 shadow-md rounded-2xl p-6 max-w-md border border-gray-100">
            {/* Quote Icon */}
            <div className="text-primary mb-3">
                <FaQuoteRight  size={32} className="text-[#9AD5DB]" />
            </div>

            {/* Text */}
            <p className="text-gray-600 text-[15px] leading-relaxed">
                {testimonial}
            </p>

            {/* Divider (dotted) */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Profile */}
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#004C52]"><img src={user_photoURL} alt="" /></div>

                <div>
                    <h3 className="font-semibold text-[#004C52]">{userName}</h3>
                    <p className="text-gray-500 text-sm">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;