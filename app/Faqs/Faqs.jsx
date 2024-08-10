"use client";
import { useState } from 'react';
import { faqs, answers } from './faqsData';

function Faqs() {
    const [toggles, setToggles] = useState(Array(faqs.length).fill(false));

    const handleClick = (index) => {
        setToggles(toggles.map((toggle, i) => (i === index ? !toggle : toggle)));
    };

    return (
        <div className="min-h-screen w-full bg-[#1b2138] flex flex-col items-center"
            style={{ backgroundImage: `url('/bg3.jpg')`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: 'cover',
            }}>
            <div className="grid grid-cols-2 gap-4 m-12 max-w-[60%]" >
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`relative backdrop-filter backdrop-blur-lg bg-white/[0.1] border border-white rounded-[2vw] p-6 cursor-pointer transition-transform duration-500`}
                        style={{ height: toggles[index] ? 'auto' : 'auto' }}
                        onClick={() => handleClick(index)}
                    >
                        <div className="text-white font-montserrat text-[3.5vw] lg:text-[1.25vw] font-bold leading-tight">
                            {`Q.${index + 1} ${faq}`}
                        </div>
                        {toggles[index] && (
                            <>
                                <div className="max-w-screen-sm h-0.5 bg-white mt-4 mb-4"></div>
                                <div className="text-white font-montserrat text-[3.5vw] lg:text-[1.25vw] font-bold">
                                    {answers[index]}
                                </div>
                            </>
                        )}
                        <div className="absolute right-6 top-6 text-white font-montserrat text-[4.5vw] lg:text-[1.25vw] font-bold">
                            {toggles[index] ? '-' : '+'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
