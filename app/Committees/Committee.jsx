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
        description: `The United Nations General Assembly (UNGA)
        It is one of the six principal organs of the United Nations and includes representatives from all 193 member states, making it the only UN body with universal representation. Each year, in September, the General Assembly convenes at the UN headquarters in New York City for its annual session. This session is a unique forum where world leaders, diplomats, and policymakers gather to discuss and address a broad range of international issues, including peace, security, development, human rights, and environmental sustainability.

The General Assembly operates on the principle of sovereign equality, meaning each member state, regardless of size or power, has one vote. This democratic structure allows for diverse perspectives and fosters international cooperation. While the resolutions and decisions made by the UNGA are not legally binding, they carry significant political and moral weight and can influence international policies and actions.

In addition to its annual session, the General Assembly can hold special sessions on urgent matters and high-level meetings to focus on specific global issues. The UNGA also oversees the budget of the United Nations, elects non-permanent members to the Security Council, and appoints the Secretary-General based on the recommendation of the Security Council.

The UNGA's work is vital in promoting peace, advancing development, protecting human rights, and addressing global challenges. By providing a platform for dialogue and negotiation, the General Assembly helps build consensus and foster cooperation among nations, striving to create a better and more sustainable world for all.
        `,
        images: [
          "/General Assembly.png",
        ],
      },
      {
        id: 2,
        title: "UNSC",
        description: `UNITED NATIONS SECURITY COUNCIL
        This is one of the six main organs of the United Nations, responsible for maintaining international peace and security. It has 15 members: five permanent members—China, France, Russia, the United Kingdom, and the United States—and ten non-permanent members elected for two-year terms by the General Assembly. The permanent members hold veto power, allowing them to block any substantive resolution.

The UNSC's primary responsibility is to address threats to international peace and security. It can adopt binding resolutions, impose sanctions, authorize the use of force to maintain or restore peace, and establish peacekeeping operations. The council meets whenever there is a perceived threat to peace, making it a continuously active body.

The UNSC also plays a crucial role in preventing conflicts through diplomacy and negotiation. It can call for ceasefires, send special envoys to troubled areas, and support peace talks. Additionally, the council works to combat terrorism, nuclear proliferation, and other global threats.

While the UNSC is vital for maintaining global stability, it faces criticism for its structure, particularly the veto power, which can lead to deadlock on critical issues. Despite this, the UNSC remains a cornerstone of international relations, striving to ensure a safer, more secure world.`,
        images: [
          "/SecurityCouncil.png",
        ],
      },
      {
        id: 3,
        title: "JPC",
        description: `Joint Parliamentary Committee (JPC)
        JPC in India is a parliamentary body composed of members from both the Lok Sabha (House of the People) and the Rajya Sabha (Council of States). The formation of a JPC requires a resolution passed by both houses of Parliament. JPCs are established to conduct detailed inquiries into specific issues, often involving significant public interest or allegations of financial mismanagement and corruption.

JPCs play a crucial role in scrutinizing government policies, proposed legislation, and financial expenditures. They are empowered to call witnesses, gather evidence, and examine documents related to the issue under investigation. The committee’s objective is to produce a comprehensive report with findings and recommendations based on its investigations.

The report of a JPC is presented to both houses of Parliament and is debated by legislators. While the recommendations of a JPC are not legally binding, they carry considerable political weight and can influence legislative changes and government actions. Notable JPCs in Indian history include those investigating the Bofors scandal and the 2G spectrum allocation case.

JPCs are essential for ensuring parliamentary oversight, accountability, and transparency in government operations, enhancing the checks and balances within the Indian democratic system.
        `,
        images: [
          "/JointParliamentaryCommitee.png",
        ],
      },
      {
        id: 4,
        title: "IP",
        description: `International Press (IP) 
        It is a collective term for media organizations and journalists operating beyond national boundaries, providing news coverage and reporting on global events. This includes international news agencies, multinational media companies, and independent journalists who work to cover stories of worldwide significance. Major players in the international press include agencies like Reuters, Associated Press (AP), and Agence France-Presse (AFP), which gather and distribute news across borders.

International press organizations have a significant role in shaping public perception and informing global audiences about crucial events such as conflicts, diplomatic relations, economic developments, and humanitarian crises. They operate under various journalistic standards and practices, often facing challenges such as differing national regulations, censorship, and political pressures.

These organizations contribute to the flow of information across countries, fostering a more informed global citizenry. They also play a critical role in holding governments and institutions accountable by investigating and reporting on issues that may impact international relations and human rights.

The international press operates within a complex landscape of media freedom and regulation, and its work is essential for promoting transparency, understanding, and dialogue on a global scale.`,
        images: [
          "/InternationalPress.png",
        ],
      },
    ];
    setEvents(data);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="flex flex-col bg-[#131947] h-full pt-4 px-4 sm:px-8 sm:justify-center"
    style={{ backgroundImage: `url('/bg3.jpg')`,
      backgroundRepeat: `no-repeat`,
            backgroundSize: 'cover',}}
            >
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
