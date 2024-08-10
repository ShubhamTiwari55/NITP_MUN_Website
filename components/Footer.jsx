"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="mx-auto grid grid-cols-2 md:flex md:flex-row bg-[#171f44] bg-gradient-to-t text-white max-w-screen px-6 py-1 md:py-2 md:justify-between"
      // style={{ backgroundImage: `url('/bg3.jpg')`,
      //   backgroundRepeat: `no-repeat`,
      //         backgroundSize: 'cover',}}
              >
        <div className="flex my-2 object-contain items-center justify-center">
          <Image src="/logomun2.png" alt="Logo" width={160} height={130} />
        </div>

        <div className="flex flex-col text-white py-4 items-center text-center md:justify-evenly">
          <h1 className="font-bold font-colona">CONTACT US</h1>
         <div className="flex flex-row justify-between">
         <a
            href="mailto:expresso.club@nitp.ac.in"
            target="blank"
            className="my-2"
          >
            <IoIosMail className="text-white w-6 h-6 md:w-10 md:h-10" />
          </a>
          <a
            href="mailto:nitpmun.club@nitp.ac.in"
            target="blank"
            className="my-2"
          >
            <IoIosMail className="text-white w-6 h-6 md:w-10 md:h-10" />
          </a>
         </div>
          <div className="text-white text-xs">
            <p className="mb-1 font-Antonio">
              Student Activity Centre (SAC), NIT Patna
            </p>
            <p>Ashok Rajpath, Patna, Bihar - 800005</p>
          </div>
        </div>

        <div className="flex flex-col py-4 items-center text-center justify-evenly">
          <h1 className="font-bold font-colona">FOLLOW US</h1>
          <h1></h1><h1></h1><h1></h1><h1></h1> <h1></h1>
          <div className="flex flex-row justify-center space-x-4 mt-2">
            <a href="https://www.instagram.com/nitpatna_mun/" target="blank">
              <FaInstagram className="text-white w-6 h-6 md:w-10 md:h-10" />
            </a>
            <a href="https://www.linkedin.com/company/expressonitp/" target="blank">
              <FaLinkedin className="text-white w-6 h-6 md:w-10 md:h-10" />
            </a>
            <a
              href="https://www.instagram.com/expresso_nitp/"
              target="blank"
            >
              <FaInstagram className="text-white w-6 h-6 md:w-10 md:h-10" />
            </a>
          </div>
        </div>

        <div className="flex flex-col text-white justify-between py-2 items-center text-center">
          <h1 className="font-Colona font-bold pt-4">ORGANISER</h1>
          <Link href="https://expressonitp.vercel.app/" target="blank">
          <Image
            src="/expresso.png"
            className="pb-2"
            alt="expresso"
            width={80}
            height={80}
          />
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
