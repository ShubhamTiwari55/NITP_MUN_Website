import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold mb-8 text-[#FBD784] text-center tracking-wider">
            SPONSORS
          </h1>
          <div className="flex flex-col items-center space-y-8">
            {/* <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              
            <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
        
              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
            </div> */}

            <div className="bg-[black] p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(min(1160px, (100vw - (2 * (calc(100vw-70px) + 20px)))))] md:h-[400px] flex items-center justify-center max-w-[1160px] opacity-0">
              <div className="relative w-full h-full">
                <Image src="/" alt="" layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16"></div> {/* Add space after the content */}
      </div>

      <div className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold mb-8 text-[#FBD784] text-center tracking-widest">
            PARTNERS
          </h1>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              <div className="bg-white p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <Image
                    src="/Unstop-Logo-Blue-Medium.png"
                    alt="Unstop"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full cover">
                  <img
                    className="w-full h-full contain"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723299690/MUNLogo/Screenshot_20240810_194952_Gallery_zp6rgf.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img
                    className="w-full h-full contain"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723299690/MUNLogo/Screenshot_20240810_194941_Gallery_asdzbs.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center opacity-0">
                <div className="relative w-full h-full">
                  <img
                    className="w-full h-full contain"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723299690/MUNLogo/Screenshot_20240810_194952_Gallery_zp6rgf.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-16"></div>
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              
            <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
              
             
              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
            </div>
            
          </div>
          <div className="mt-16"></div>
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
             
            <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
              
             
              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
            </div>
            
          </div> */}
        </div>
        <div className="mt-16"></div>
      </div>

      <div className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center text-white pt-24 px-4">
        <div className="w-full flex flex-col items-center text-white">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-extrabold mb-8 text-[#FBD784] text-center tracking-widest">
            COLLABORATORS
          </h1>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              <div className="bg-white p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <img
                    className="contain w-full h-full"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723298675/MUNLogo/smitmun_logo_black_w3i4eo.png"
                    alt="SMIT"
                  />
                </div>
              </div>

              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <Image
                    src="/indore.jpg"
                    alt="IIT INDORE"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              <div className="bg-white p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <img
                    className="contain w-full h-full"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723298675/MUNLogo/MUN_logo_vtozzu.png"
                    alt="IIT DELHI"
                  />
                </div>
              </div>

              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <img
                    className="contain w-full h-full"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723298674/MUNLogo/228885355_1248533545645595_7676336129308392846_n_kldp6v.jpg"
                    alt="KIIT"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <img
                    className="contain w-full h-full"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723298675/MUNLogo/IMG-20230626-WA0010-modified_mzf3qt.png"
                    alt="MUNSOC"
                  />
                </div>
              </div>
              <div className="bg-white p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center opacity-0">
                <div className="relative w-full h-full">
                  <img
                    className="contain w-full h-full"
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1723298675/MUNLogo/smitmun_logo_black_w3i4eo.png"
                    alt="SMIT"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-16"></div>
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              
            <div className="bg-black p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center ">
      <div className="relative w-full h-full">
        <Image 
          src="" 
          alt="SMIT" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
    </div>
              
             
    <div className="bg-[#FBD784] p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center opacity-50">
      <div className="relative w-full h-full">
        <Image 
          src="/image1.png" 
          alt="Sponsor 1" 
          layout="fill" 
          objectFit="contain"
        />
      </div>
    </div>
            </div>
            
          </div>
          <div className="mt-16"></div>
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full max-w-6xl">
              
            <div className="bg-[#FBD784] p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center opacity-50">
      <div className="relative w-full h-full">
        <Image 
          src="/image1.png" 
          alt="Sponsor 1" 
          layout="fill" 
          objectFit="contain"
        />
      </div>
    </div>
              
    <div className="bg-[#FBD784] p-4 relative w-[calc(100vw-70px)] h-[200px] md:w-[calc(50vw-100px)] md:h-[400px] flex items-center justify-center opacity-50">
      <div className="relative w-full h-full">
        <Image 
          src="/image1.png" 
          alt="Sponsor 1" 
          layout="fill" 
          objectFit="contain"
        />
      </div>
    </div>
            </div>
            
          </div> */}
        </div>
        <div className="mt-16"></div>
      </div>
    </>
  );
};

export default Sponsors;
