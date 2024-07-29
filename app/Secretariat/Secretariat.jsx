import React from 'react';
import Card from '@/components/Card';
import cardData from '@/constant/CardData';

const Secretariat = () => {
  const members = cardData.secretrians.members;

  return (
    <div
      className="container mx-auto px-4"
      style={{
        backgroundImage: 'url(Bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-wrap -mx-4">
        {members.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <Card member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Secretariat;
