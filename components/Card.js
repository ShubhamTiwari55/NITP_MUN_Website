import React from 'react';

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Card = ({ member }) => {
  if (!member) return null; 

  return (
    <div className="relative m-5 w-[325px] h-[500.68px]">
      <div className="bg-[#FEB952] w-[215.16px] h-[400.06px] rounded-[14.74px] absolute top-[70px] left-[70px] flex flex-col items-end p-2.5">
        <div className="flex flex-col gap-5 mt-[110px]">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={36} color="#000" />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={36} color="#000" />
          </a>
        </div>
      </div>
      <div className="bg-gray-400 w-[225.76px] h-[288.08px] rounded-[15.51px] absolute top-[10px] left-[100] flex justify-center items-center">
  <img 
    src={`/${member.image}`} 
    alt={member.name}
    // className="w-full h-full object-cover rounded-[15.51px]"
  />
</div>
      <div className="absolute top-[300px] left-[80px] text-black text-[15px] font-bold">
        <div>{member.name}</div>
      </div>
      <div className="absolute top-[330px] left-[80px] text-black text-[10px] font-normal">
        <div>{member.designation}</div>
      </div>
      <div className="bg-white w-[190.67px] h-[70.57px] rounded-[10.08px] absolute top-[360px] left-[80px] -mr-1.5"></div>
    </div>
  );
};

export default Card;
