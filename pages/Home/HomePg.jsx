"use client"
import React from "react";
import { useState , useEffect } from "react";
function RuleBook() {

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [parentHeight, setParentHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
      if (window.innerWidth >= 600 && window.innerWidth < 800) {
        setParentHeight(780); // Adjust height for screens between 600px and 800px
      } else {
        setParentHeight(showFullDescription ? 700 : 380);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [showFullDescription]);

  useEffect(() => {
    setParentHeight(showFullDescription ? 300 : 280);
  }, [showFullDescription]);

  const handleReadMore = () => setShowFullDescription(true);
  const handleReadLess = () => setShowFullDescription(false);

  const fullText =
    "Expresso is the club where literature and art collide, creating a vibrant community for passionate students. It's a dynamic hub designed to nurture and showcase your talents, whether in crafting words or painting visuals. Immerse yourself in poetry slams, art workshops, and diverse events that provide a platform to discover and showcase your creative flair. Connect with a supportive community of fellow students, writers, and artists, leaving an indelible mark in this enchanting space. From diverse opportunities to skill development workshops, Espresso Club is more than a club – it's a journey of creative discovery. Contribute to the college's cultural tapestry, organize events, participate in campus initiatives, and make a lasting impression. Ready to embark on this creative odyssey? Sign up, become a member, and let your unique talents complete our Espresso Club mosaic. Join us, and let your creativity brew in the extraordinary blend of inspiration!";
  const shortText = fullText.split(" ").slice(0, 50).join(" ") + "...";



  return (
    <>
      <div className="flex flex-col bg-[#171f44] w-full min-h-screen">

      <div className="relative bg-black md:bg-white w-full flex flex-col items-center">
        <div className="relative h-auto sm:h-120 bg-slate-900 px-12 pt-6 pb-3 mx-4 rounded-3xl my-3 text-white flex flex-col lg:flex-row items-start gap-x-6 justify-between lg:mx-20 lg:gap-x-16 lg:h-100">
          <div className="flex flex-col items-start">
            <span className="text-5xl mb-2 font-semibold text-orange-300">
              ABOUT
            </span>
            <span className="text-2xl font-futura hover:underline md:text-3xl">
              EXPRESSO
            </span>
          </div>
          <div className="mt-4 sm:mt-0 text-left md:text-xl">
            <p className="p-0 w-full">
              {isMobile && !showFullDescription ? shortText : fullText}
            </p>
            {isMobile && (
              <div className="text-center mt-4">
                {showFullDescription ? (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadLess}
                  >
                    Read Less
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadMore}
                  >
                    Read More
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default RuleBook;
