"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isnav, setIsnav] = useState(false);

  return (
    <div
      className="bg-[#000829] w-full font-extrabold min-h-32 xl:bg-right lg:bg-[25%] bg-[15%] max-[500px]:bg-[10%]"
      style={{
        backgroundImage: `url('munNavbar.png')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: "cover",
        margin: 0, // Ensure no extra margins
        padding: 0, // Ensure no extra padding
      }}
    >
      <div className="text-[#000829] h-24 items-center flex p-0 mx-auto max-w-screen-xl justify-end">
        <div className="lg:hidden">
          <button
            onClick={() => setIsnav(!isnav)}
            className="text-[#000829] focus:outline-none focus:text-white top-0 mr-8 sm:mr-16"
          >
            {!isnav ? (
              <MdOutlineMenu className="text-black" size={"2em"} />
            ) : (
              <MdClose className="text-white" size={"2em"} />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-full lg:justify-end">
          <ul className="flex space-x-4">
            {[
              { href: "/", text: "HOME" },
              { href: "/Committees", text: "COMMITTEES" },
              { href: "/Secretariat", text: "SECRETARIAT" },
              { href: "/Gallery", text: "GALLERY" },
              { href: "/Rulebook", text: "RULEBOOK" },
              { href: "/Faqs", text: "FAQS" },
              { href: "/Sponsors", text: "SPONSORS" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="p-2 font-['Coluna'] font-semibold rounded hover:rounded-full hover:text-white hover:bg-[#000829]"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isnav && (
        <div className="fixed inset-0 bg-[#000829] bg-opacity-90 z-50 flex justify-center items-center lg:hidden">
          <button
            onClick={() => setIsnav(!isnav)}
            className="text-white focus:outline-none fixed top-10 right-10"
          >
            <MdClose className="text-white" size={"2em"} />
          </button>
          <ul className="space-y-6">
            {[
              { href: "/", text: "HOME" },
              { href: "/Committees", text: "COMMITTEES" },
              { href: "/Secretariat", text: "SECRETARIAT" },
              { href: "/Gallery", text: "GALLERY" },
              { href: "/Rulebook", text: "RULEBOOK" },
              { href: "/Faqs", text: "FAQS" },
              { href: "/Sponsors", text: "SPONSORS" },
            ].map((item, index) => (
              <li key={index} className="group relative">
                <Link href={item.href} onClick={() => setIsnav(false)}>
                  <p className="nav-link font-semibold text-lg font-coluna m-2 transition duration-300 text-white">
                    {item.text}
                  </p>
                  <hr className="w-40 mt-1 border-t-2 border-gray-300 transition duration-300 transform group-hover:translate-x-2 text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
