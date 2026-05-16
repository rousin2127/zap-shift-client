import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Faq = () => {
    // State to keep track of the currently open accordion item
    const [openIndex, setOpenIndex] = useState(0); // Default first item open as per design

    const faqData = [
        {
            id: 1,
            question: "How does this posture corrector work?",
            answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
        },
        {
            id: 2,
            question: "Is it suitable for all ages and body types?",
            answer: "Yes, our posture corrector features adjustable straps to ensure a comfortable and secure fit for various body shapes, sizes, and age groups."
        },
        {
            id: 3,
            question: "Does it really help with back pain and posture improvement?",
            answer: "Absolutely. By keeping your muscles and spine properly aligned, it reduces strain on key tension points, helping alleviate chronic back pain over time."
        },
        {
            id: 4,
            question: "Does it have smart features like vibration alerts?",
            answer: "Select models include intelligent sensors that gently vibrate whenever you slouch, reminding you actively to correct your posture."
        },
        {
            id: 5,
            question: "How will I be notified when the product is back in stock?",
            answer: "You can sign up with your email address on the product page to receive an instant automated notification the moment inventory is restocked."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" py-16 px-4 ">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003333] mb-4">
                        Frequently Asked Question (FAQ)
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
                        Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={faq.id}
                                className={`transition-all duration-300 rounded-xl border ${
                                    isOpen 
                                    ? 'bg-[#e2f0f0] border-[#99cccc]' 
                                    : 'bg-white border-transparent shadow-sm hover:border-gray-200'
                                }`}
                            >
                                {/* Accordion Toggle Button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-5 text-left text-[#003333] font-semibold text-base focus:outline-none "
                                >
                                    <span>{faq.question}</span>
                                    <span className="ml-4 flex-shrink-0 w-5 h-5 hover:cursor-pointer ">

                                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        

                                        {/* <svg 
                                            className={`w-5 h-5 text-[#003333] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            <IoIosArrowUp />
                                        </svg> */}
                                    </span>
                                </button>

                                {/* Accordion Content Body */}
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? 'max-h-60 border-t border-[#cce6e6]' : 'max-h-0'
                                    }`}
                                >
                                    <div className="p-5 text-gray-600 text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Button CTA */}
                <div className="text-center mt-10">
                    <button className="inline-flex items-center gap-2 bg-[#ccff66] text-[#003333] font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#b3ff1a] transition-all duration-200">
                        <span>See More FAQ's</span>
                        {/* <div className="bg-[#003333] text-white rounded-full p-1.5 flex items-center justify-center">
                            <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div> */}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Faq;