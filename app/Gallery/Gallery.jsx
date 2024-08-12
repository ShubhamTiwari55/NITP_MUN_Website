import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <div style={{ backgroundImage: `url('/bg3.jpg')`,
      backgroundRepeat: `no-repeat`,
            backgroundSize: 'cover',}}
            
      className="flex flex-col"      
            >

<div className=" flex flex-auto rounded-lg bg-[#000829]">
      <iframe
        className="top-0 left-0 w-full h-[22vh] sm:h-[40vh] lg:w-full lg:h-[80vh]"
        src="https://www.youtube.com/embed/hXUeBTFS8Z0?si=I-T0jClnsGX_9p71"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

      <div className="w-full h-fit bg-[url('https://res.cloudinary.com/dnbutfdy7/image/upload/v1719682809/Events/MUN/DSC_0418_lclzcs.jpg')] px-2 py-2 bg-[#FAB952] flex flex-col gap-2 sm:gap-3">
        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <Image alt="img"
                src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719682809/Events/MUN/DSC_0418_lclzcs.jpg"
                className="w-full h-full cover"
              />
            </div>
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <Image alt="img"
                src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1721986666/Events/MUN/20230909_114338_giwxyb.jpg"
                className="w-full h-full cover"
              />
            </div>
          </div>
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <Image alt="img"
                src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719682802/Events/MUN/DSC_0425_yqggxl.jpg"
                className="w-full h-full cover"
              />
            </div>
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <Image alt="img"
                src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678139/Gallery/IMG_0794_i34yhl.jpg"
                className="w-full h-full cover"
              />
            </div>
          </div>
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <Image alt="img"
                src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1721986664/Events/MUN/IMG-20230909-WA0003_yyct9o.jpg"
                className="w-full h-full cover"
              />
            </div>
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <Image alt="img"
                src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719684048/Events/MUN/DSC_0912-min_enfu1i.jpg"
                className="w-full h-full cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[50vw] rounded-lg overflow-hidden">
          <Image alt="img"
            className="w-full h-full cover"
            src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678134/Gallery/IMG_0795_pqa2uc.jpg"
          />
        </div>
        <div className="w-full flex sm:gap-3">
          <div className="w-[50%] h-[40vw] rounded-lg overflow-hidden">
            <Image alt="img"
              className="w-full h-full cover"
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719678162/Gallery/IMG_0787_tinvjq.jpg"
            />
          </div>
          <div className="w-[50%] h-[40vw] rounded-lg overflow-hidden">
            <Image alt="img"
              className="w-full h-full cover"
              src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1719684034/Events/MUN/DSC_0925-min_peci2j.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
