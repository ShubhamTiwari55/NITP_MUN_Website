"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "./Typewriter";

function LandingPage() {
  

  return (
    <div
      className="font-montserrat relative w-full h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url('/bg2.png')` }}
    >
      <div className="absolute left-0 w-full mx-auto h-full flex flex-col md:flex-row items-center justify-evenly z-10">
        <div className="flex flex-col items-start justify-center lg:mt-[-8%] ">
          <h1 className="text-[#FBD784] text-[5vw] font-montserrat font-extrabold">
            MODEL UNITED
          </h1>
          <h1 className="text-[#FBD784] font-montserrat text-[8.5vw] font-extrabold mt-[-9%]">
            NATIONS
          </h1>
          <h1 className="text-[#FBD784] font-montserrat text-[8.3vw] mt-[-10%]">NIT PATNA</h1>
          <h1 className="text-[#FBD784] font-montserrat text-[5vw] mt-[-10%]">2024</h1>
          <h1 className="absolute text-[#FBD784] text-8vw md:text-[3vw] mt-[34%]"><Typewriter text="Enroll - Express - Execute !!!" delay={120} infinite /></h1>
        </div>

        <div className="flex flex-col items-center justify-center lg:h-full">
          <Image
            width={280}
            height={280}
            src="/Logo-mun-gold.png"
            alt="logo"
            className="mb-4 md:mb-0"
          />
                    <h1 className=" text-[18px] md:text-[30px] font-bold align-text-bottom text-[#FBD784] pt-4">September 13, 2024 - September 15, 2024</h1>

          <button className="font-montserrat mt-12 lg:mt-4 bg-[#FBD784] text-[#000829] px-5 py-3 font-bold rounded animate-pulse hover:text-[white] hover:border-4 hover:border-[#FBD784] hover:bg-[#000829] "
          >
            <a href="https://unstop.com/o/HUQtIAB?lb=vmHTSu8&utm_medium=Share&utm_source=WhatsApp" alt="unstop" target="_blank"
    rel="noopener noreferrer" >DELEGATE PORTAL</a>
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
