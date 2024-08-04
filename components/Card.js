import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamCard = ({ member }) => {
  if (!member) return null;

  return (

// COPIED CARD

    //   <Card className="w-36 lg:w-56 rounded-lg shadow-md shadow-[#FBD784]">
    //   <CardHeader floated={false} className="h-24 lg:h-44">
    //     <img src = {member.image} alt="profile-picture" />
    //   </CardHeader>
    //   <CardBody className="text-center">
    //     <Typography variant="h2 lg:h4" color="blue-gray" className="mb-2">
    //       {member.name}
    //     </Typography>
    //     <Typography color="blue-gray" className=" font-small lg:font-medium" textGradient>
    //        {member.designation}
    //     </Typography>
    //   </CardBody>

    //   <div className="flex flex-row items-center justify-center max-auto gap-x-8 pb-4" >
    // <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    //   <FaLinkedin className="text-black text-3xl" />
    // </a>

    //         <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    //           <FaInstagram className="text-black text-3xl" />
    //         </a>
    //       </div>
    // </Card>


//  YELLOW CARD   
    <>
      <div className="w-32 lg:w-60 rounded-lg bg-[#ffd062] h-44 lg:h-72 z-4 overflow-visible flex flex-col"
      
      >
        <div className="flex flex-row items-center ">
          <div className="w-24 lg:w-48 rounded-br-lg bg-[rgb(138,138,138)] h-28 lg:h-52 z-8">
            <img src={member.image} alt="profile-picture" />{" "}
          </div>
          <div className="flex flex-col items-center justify-between gap-y-4 mx-auto">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-black text-xl  lg:text-3xl" />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-black text-xl lg:text-3xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col mx-auto justify-center items-center">
          <div className="text-blue-900 font-colona font-semibold text-xl lg:text-2xl">{member.name}</div>
          <div>{member.designation}</div>
        </div>

      </div>
    </>
  );
};

export default TeamCard;
