import React from 'react';
import Image from 'next/image';

function LandingPage() {
  return (
    <div className="relative w-full h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url('/bg2.png')` }}>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-evenly z-10">
        {/* Main logo */}
        <Image width={300} height={300} src="/Logo-mun-gold.png" alt="logo" className=" flex justify-center mb-4" />
        
        {/* Text and rotated rectangle */}
        <div className="text-center flex flex-col align-center justify-items-center">
          <div className="absolute mx-auto top-0 left-0 w-full h-full flex flex-row justify-center items-center">
            {/* Rotated rectangle */}
            <Image 
              width={300} 
              height={300} 
              src="/rect.png" 
              alt="rectangle" 
              className="transform rotate-90" 
              style={{ opacity: 0.05 }}
            />
          </div>
          
          <h1 className="text-[10vw] md:text-[8vw] font-extrabold sm:mt-[-5%] md:mt-[-10%] lg:mt-[-12%] text-[#FBD784]">COMMITTEES</h1>

          <h1 className="text-[4vw] md:text-[2vw] font-extrabold align-text-bottom text-[#FBD784]">September 13 - September 15, 2024</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
