import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaLinkedin , FaInstagram } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  if (!member) return null;

  return (
    <Card className="w-36 lg:w-56 rounded-lg shadow-md shadow-[#FBD784]">
    <CardHeader floated={false} className="h-24 lg:h-44">
      <img src = {member.image} alt="profile-picture" />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h2 lg:h4" color="blue-gray" className="mb-2">
        {member.name}
      </Typography>
      <Typography color="blue-gray" className=" font-small lg:font-medium" textGradient>
         {member.designation}
      </Typography>
    </CardBody>
   
    <div className="flex flex-row items-center justify-center max-auto gap-x-8 pb-4" >
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-black text-3xl" />
          </a>
          
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-black text-3xl" />
          </a>
        </div>
  </Card>
  );
};

export default TeamCard;
