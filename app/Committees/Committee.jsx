"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Committee = () => {
  const [events, setEvents] = useState([]);

  const fetchEventData = async () => {
    const data = [
      {
        id: 1,
        title: "UNGA",
        description: `UNITED NATIONS GENERAL ASSEMBLY
        The main policy-making body of the organisation. It provides, to all the member states, an important platform for multi-dimensional discussion of international issues varying through a wide range covered by the Charter of the United Nations.
        ■  It's Objectives are : Upholding International Law, Protecting Human Rights, Promoting Sustainable Development, Humanitarian Assistance.
        `,
        images: [
          "/GA.png",
        ],
      },
      {
        id: 2,
        title: "UNSC",
        description: `UNITED NATIONS SECURITY COUNCIL
         This body of MUN primarily responsible for maintaining international peace and security. It has 15 members and acts as a center for harmonizing the actions of nations. It takes the lead in determining the existence of a threat to the peace or act of aggression.
         ■  It's Objectives are : Maintaining internal peace and security, developing friendly relations among nations, cooperating in solving international problems, promoting respect for Human Rights.`,
        images: [
          "/SC.png",
        ],
      },
      {
        id: 3,
        title: "JPC",
        description: `JOINT PARLIAMENTARY COMMITTEE
        This Committee is constituted by the Parliament to investigate a particular issue or matter of national importance. It comprises members from both houses of Parliament, ensuring a balanced representation and collective expertise. It has the authority to summon individuals, request documents, and gather information necessary for its investigation.
        ■  It's Objectives are : Investigating financial irregularities, legislative matters or any significant policy issue, Examining and reporting on complex issues, Maintaining transparency and accountability.
        `,
        images: [
          "/JPC.png",
        ],
      },
      {
        id: 4,
        title: "IP",
        description: `INTERNATIONAL PRESS
        International Press typically refers to news media organizations and journalists that operate across international borders, covering global events, politics, economics, culture, and other significant issues. They play a crucial role in informing the global public, shaping public opinions, and holding governments and institutions accountable. Prominent international press organizations include Reuters, Associated Press (AP), Agence France-Presse (AFP), BBC World Service, Al Jazeera, and CNN International, among others.
        ■  It's Objectives are : Informing the public, Promoting Transparency and Accountability, Fostering Global Dialogue, Supporting Democracy and Human Rights.`,
        images: [
          "/IP.png",
        ],
      },
    ];
    setEvents(data);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="flex flex-col bg-[#131947] h-full pt-4 px-4 sm:px-8 sm:justify-center">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`flex flex-col sm:flex-row items-center sm:items-${
            index % 2 === 0 ? "start" : "end"
          } mt-4 gap-4`}
        >
          <div
            className={`w-full sm:w-auto ${
              index % 2 !== 0 ? "sm:order-2" : ""
            } `}
          >
            <div
              className="relative h-80 w-80 lg:mx-4 overflow-visible mx-auto "
            >
              <Image
                src={event.images[0]} // Only one image now
                objectFit="cover"
                alt="Event Picture"
                height={220}
                width={220}
              />
            </div>
          </div>
          <div className="flex flex-col w-full sm:ml-4 lg:mx-16">
            <div
              className={`font-antonio text-[#FBD784] text-2xl sm:text-5xl underline ${
                index % 2 !== 0 ? "text-right" : ""
              }`}
            >
              {event.title}
            </div>
            <div
              className="text-[#ffffff] text-base sm:text-lg bg-cover bg-center p-4 mt-4 mb-6 whitespace-pre-line overflow-y-auto max-h-64 rounded-2xl"
              style={{ backgroundImage: `url('/bg2.png')` }}
            >
              {event.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Committee;
