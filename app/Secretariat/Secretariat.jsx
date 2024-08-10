"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import TeamCard from '@/components/Card';
import cardData from '@/constant/CardData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Secretariat = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const renderCarousel = (members) => (
    <Slider {...settings}>
      {members.map((member) => (
        <div key={member.id} className=" gap-x-4 px-4 mb-8">
          <TeamCard member={member} />
        </div>
      ))}
    </Slider>
  );

  return (
    <div
      className="container mx-auto min-w-full px-10 lg:min-h-fit"
      style={{
        backgroundImage: 'url(Bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
        className="text-center"
      >
        <TabList className="flex flex-wrap justify-center mb-4 cursor-pointer">
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 0 ? 'bg-yellow-700 text-black shadow-lg rounded-full' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out `}
          >
            Secretariat
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 1 ? 'bg-yellow-700 text-black shadow-lg rounded-full' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out `}
          >
            Seniors
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 2 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Technical
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 3 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Sponsorship
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 4 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Content
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 5 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Design
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 6 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Decoration
          </Tab>
          <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 7 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Media
          </Tab>
          {/* <Tab
            className={`px-4 py-2 mx-1 md:mx-2 text-base md:text-lg font-semibold rounded-full ${
              selectedTab === 8 ? 'bg-transparent text-white shadow-lg' : 'bg-transparent text-[#FBD784]'
            } transition-all duration-300 ease-in-out`}
          >
            Hospitality
          </Tab> */}
          {/* Add more Tab components as needed */}
        </TabList>

        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white"> The Secretariat</h2>
          {renderCarousel(cardData.Secretariat.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Seniors</h2>
          {renderCarousel(cardData.Seniors.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Technical Team</h2>
          {renderCarousel(cardData.Technical.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Sponsorship Team </h2>
          {renderCarousel(cardData.Sponsorship.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Content Team </h2>
          {renderCarousel(cardData.Content.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Design Team </h2>
          {renderCarousel(cardData.Design.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Decoration Team </h2>
          {renderCarousel(cardData.Decoration.members)}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Media Team </h2>
          {renderCarousel(cardData.Media.members)}
        </TabPanel>
        {/* <TabPanel>
          <h2 className="text-2xl mb-4 text-center font-bold text-white">Hospitality Team </h2>
          {renderCarousel(cardData.Hospitality.members)}
        </TabPanel> */}
        {/* Add more TabPanel components as needed */}
      </Tabs>
    </div>
  );
};

export default Secretariat;
