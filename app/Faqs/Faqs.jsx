"use client";
import { useState } from 'react';
import { faqs, answers } from './faqsData';

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen w-full bg-[#1b2138] flex flex-col items-center"
            style={{ backgroundImage: `url('/bg3.jpg')`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: 'cover',
            }}>
            <div className="font-montserrat max-w-[70%] w-full m-8">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`relative backdrop-filter backdrop-blur-lg bg-white/[0.1] border border-white rounded-[2vw] p-6 mb-4 cursor-pointer transition-all duration-300 ease-in-out w-full`}
                        style={{ 
                            maxHeight: activeIndex === index ? '500px' : '60px', // Adjust maxHeight based on content
                            overflow: 'hidden',
                        }}
                        onClick={() => handleClick(index)}
                    >
                        <div className="text-white font-montserrat text-[3.5vw] lg:text-[1.25vw] font-bold leading-tight">
                            {`Q.${index + 1} ${faq}`}
                        </div>
                        {activeIndex === index && (
                            <>
                                <div className="max-w-full h-0.5 bg-white mt-4 mb-4"></div>
                                <div className="text-white font-montserrat text-[3.5vw] lg:text-[1.25vw] font-bold">
                                    {answers[index]}
                                </div>
                            </>
                        )}
                        <div className="absolute right-6 top-6 text-white font-montserrat text-[4.5vw] lg:text-[1.25vw] font-bold">
                            {activeIndex === index ? '-' : '+'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
