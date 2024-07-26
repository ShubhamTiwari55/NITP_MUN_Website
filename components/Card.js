import React from 'react';

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Card = ({ member }) => {
  if (!member) return null; 

  return (
    <div className="relative m-5 w-[367px] h-[546.68px]">
      <div className="bg-[#FEB952] w-[288.16px] h-[475.06px] rounded-[14.74px] absolute top-[80px] left-[100px] flex flex-col items-end p-2.5">
        <div className="flex flex-col gap-5 mt-[120px]">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={48} color="#000" />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={48} color="#000" />
          </a>
        </div>
      </div>
      <div className="bg-gray-400 w-[320.76px] h-[385.08px] rounded-[15.51px] absolute top-[10px] left-[calc(-316.76px + 320px)] flex justify-center items-center">
  <img 
    src={`/${member.image}`} 
    alt={member.name}
    // className="w-full h-full object-cover rounded-[15.51px]"
  />
</div>
      <div className="absolute top-[395px] left-[120px] text-black text-[20px] font-bold">
        <div>{member.name}</div>
      </div>
      <div className="absolute top-[430px] left-[120px] text-black text-[10px] font-normal">
        <div>{member.designation}</div>
      </div>
      <div className="bg-white w-[260.67px] h-[82.57px] rounded-[10.08px] absolute top-[450px] left-[110px] -mr-1.5"></div>
    </div>
  );
};

export default Card;
