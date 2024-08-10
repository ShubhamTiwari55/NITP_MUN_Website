"use client";
import React, { useEffect, useState } from "react";

function HomePg() {
  const [showFullDescriptionExpresso, setShowFullDescriptionExpresso] = useState(false);
  const [showFullDescriptionNitPatna, setShowFullDescriptionNitPatna] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [showFullDescriptionExpresso, showFullDescriptionNitPatna]);

  const handleReadMoreExpresso = () => setShowFullDescriptionExpresso(true);
  const handleReadLessExpresso = () => setShowFullDescriptionExpresso(false);

  const handleReadMoreNitPatna = () => setShowFullDescriptionNitPatna(true);
  const handleReadLessNitPatna = () => setShowFullDescriptionNitPatna(false);

  const fullTextExpresso =
    `Welcome to Expresso - The Literary & Art Club NIT Patna! We are the vibrant community where creativity in literature and public speaking thrives. Whether you're into writing, debating, or any other form of expression, this is your place to explore and showcase your talents.
Expresso is more than just a club; it's a journey of self-discovery and growth. Since our inception, we've provided a platform for students to nurture their literary and oratory skills. With numerous events, workshops, and competitions, we inspire and engage creative minds, helping them flourish in their craft.
Over the years, Expresso has built a legacy of fostering literary and public speaking talents. Our members have won numerous events across various colleges, bringing accolades and recognition to NIT Patna. We take pride in our diverse and dynamic community, where every voice is heard, and every talent is celebrated.Get ready for an exciting event this September! We're bringing back NIT Patna MUN 2.0, one of our most eagerly anticipated events. This conference offers a platform for debate, diplomacy, and intellectual engagement. Join us for a thrilling experience and be part of this amazing adventure!`;

  const shortTextExpresso = fullTextExpresso.split(" ").slice(0, 50).join(" ") + "...";

  const fullTextNitPatna =
    `NIT Patna, established in 1886, is one of the oldest engineering institutions in India. Located in Patna, Bihar, the institute is renowned for its engineering and technological education. It has consistently been a leader in academic excellence and research, providing high-quality education and fostering innovation.
    The institute is committed to holistic development, with a focus on engineering, science, and technology. It offers a wide range of undergraduate, postgraduate, and doctoral programs. NIT Patna is known for its vibrant campus life, state-of-the-art infrastructure, and a strong emphasis on research and development.
    With a rich history and a reputation for producing outstanding graduates, NIT Patna is a hub for intellectual and technical advancement. The institute continues to contribute significantly to the field of engineering and technology, nurturing future leaders and innovators.`;

  const shortTextNitPatna = fullTextNitPatna.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <>
      <div className="flex flex-col bg-[#000829] px-4 py-6"
      style={{ backgroundImage: `url('/bg3.jpg')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: 'cover',
    }}>
        {/* About NIT Patna Section */}
        <div className="relative w-full max-w-screen-lg mx-auto text-white rounded-3xl p-6 mb-6"
              style={{ backgroundImage: `url('/bg2.png')` }}
        >
          <div className="flex flex-col items-start">
            <span className="text-5xl mb-2 font-semibold text-[#FBD784]">ABOUT</span>
            <span className="text-2xl font-futura underline md:text-3xl">NIT PATNA</span>
          </div>
          <div className="mt-4 text-left md:text-xl">
            <p className="p-0 w-full"
            
            >
              {isMobile && !showFullDescriptionNitPatna ? shortTextNitPatna : fullTextNitPatna}
            </p>
            {isMobile && (
              <div className="text-center mt-4">
                {showFullDescriptionNitPatna ? (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadLessNitPatna}
                  >
                    Read Less
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadMoreNitPatna}
                  >
                    Read More
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* About Expresso Section */}
        <div className="relative w-full max-w-screen-lg mx-auto text-white rounded-3xl p-6 mb-6"
              style={{ backgroundImage: `url('/bg2.png')` }}
>
          <div className="flex flex-col items-start">
            <span className="text-5xl mb-2 font-semibold text-[#FBD784]">ABOUT</span>
            <span className="text-2xl font-futura underline md:text-3xl">EXPRESSO</span>
          </div>
          <div className="mt-4 text-left md:text-xl">
            <p className="p-0 w-full">
              {isMobile && !showFullDescriptionExpresso ? shortTextExpresso : fullTextExpresso}
            </p>
            {isMobile && (
              <div className="text-center mt-4">
                {showFullDescriptionExpresso ? (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadLessExpresso}
                  >
                    Read Less
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-xl text-blue-600 hover:underline"
                    onClick={handleReadMoreExpresso}
                  >
                    Read More
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePg;
