import React from "react";
import sponsorsData from "@/constant/SponsorsData";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: "url('/Bg.jpg')" }}>
      {/* Sponsors */}
      <div className="relative w-full flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-6vw sm:text-4vw md:text-3vw font-extrabold mb-8 text-[#FBD784] text-center tracking-wider">
            SPONSORS
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap px-4 py-2 gap-8 md:gap-16 w-full max-w-xl">
            {sponsorsData.sponsors.map((sponsor, index) => (
              <div key={index} className="w-full md:w-[40%]"> 
                <div className="w-full h-auto"> 
                  <Image
                    className="w-full h-auto object-contain" 
                    width={200} height={100}
                    src={sponsor.image}
                    alt={sponsor.name}
                  />
                </div>
                <div className="mx-auto text-center mt-6 py-4 rounded-lg bg-white lg:text-xl text-blue-800 font-montserrat font-extrabold backdrop-filter backdrop-blur-lg justify-center">
                  {sponsor.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16"></div> {/* Add space after the content */}
      </div>

      {/* Partners */}
      <div className="relative w-full flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-6vw sm:text-4vw md:text-3vw font-extrabold mb-8 text-[#FBD784] text-center tracking-widest">
            PARTNERS
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap px-4 py-2 gap-10 md:gap-16 w-full max-w-5xl">
            {sponsorsData.partners.map((partner, index) => (
              <div key={index} className="w-full md:w-[40%] justify-center mx-auto items-center">
                <div className="w-full h-auto lg:h-[140px]">
                  <Image
                    className="w-full h-auto object-contain"
                    width={200} height={100}
                    src={partner.image}
                    alt={partner.name}
                  />
                </div>
                <div className="mx-auto text-center mt-6 py-4 rounded-lg bg-white lg:text-xl text-blue-800 font-montserrat font-extrabold backdrop-filter backdrop-blur-lg justify-center">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-16"></div>
      </div>

      {/* Collaborators */}
      <div className="relative w-full flex flex-col items-center text-white pt-8 md:pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-6vw sm:text-4vw md:text-3vw font-extrabold mb-8 text-[#FBD784] text-center tracking-widest">
            COLLABORATORS
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap px-4 py-2 gap-12 w-full max-w-5xl justify-center">
            {sponsorsData.collaborators.map((collaborator, index) => (
              <div key={index} className="w-full md:w-[35%] m-2 p-2">
                <div className="w-full h-auto bg-white rounded-lg lg:h-[330px]">
                  <Image
                    className="w-full h-auto object-contain"
                    width={300} height={200}
                    src={collaborator.image}
                    alt={collaborator.name}
                  />
                </div>
                <div className="my-4"></div>
                <div className="mx-auto text-center mt-6 py-4 rounded-lg bg-white lg:text-lg text-blue-800 font-montserrat font-extrabold backdrop-filter backdrop-blur-lg align-bottom">
                  {collaborator.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16"></div>
      </div>
    </div>
  );
};

export default Sponsors;
