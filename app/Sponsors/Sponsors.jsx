import React from "react";
import sponsorsData from "@/constant/SponsorsData";

const Sponsors = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Sponsors */}
      <div className="relative w-full flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold mb-8 text-[#FBD784] text-center tracking-wider">
            SPONSORS
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap px-4 py-2 gap-8 md:gap-16 w-full max-w-7xl">
            {sponsorsData.sponsors.map((sponsor) => {
              return (
                <div className="w-full md:w-[45%]">
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full contain"
                      src={sponsor.img}
                      alt={sponsor.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-16"></div> {/* Add space after the content */}
      </div>

      {/* Partners */}
      <div className="relative w-full flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold mb-8 text-[#FBD784] text-center tracking-widest">
            PARTNERS
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap px-4 py-2 gap-8 md:gap-16 w-full max-w-7xl">
            {sponsorsData.patners.map((partner) => {
              return (
                <div className="w-full md:w-[45%]">
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full contain"
                      src={partner.img}
                      alt="LOGO"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 md:mt-16"></div>
      </div>

      {/* Collaborators */}
      <div className="relative w-full flex flex-col items-center text-white pt-8 md:pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold mb-8 text-[#FBD784] text-center tracking-widest">
            COLLABORATORS
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap px-4 py-2 gap-8 md:gap-16 w-full max-w-7xl">
            {sponsorsData.collaborators.map((collaborator) => {
              return (
                <div className="w-full bg-white md:w-[45%]">
                  <div className="w-full h-full">
                    <img
                      className="w-full h-full contain"
                      src={collaborator.img}
                      alt={collaborator.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-16"></div>
      </div>
    </div>
  );
};

export default Sponsors;
