import React from 'react';
import LandingPage from './LandingPgRB';

function RuleBook() {
  return (
    <>
<LandingPage/>
<div className="bg-gray-900 text-white p-20">
 <section className="mb-10">
  <div className="flex items-center mb-4">
    <div className="">
      <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
        01
      </div>
    </div>
    <div className="relative text-lg font-bold text-[#FBD784]">
      <div className="absolute left-[50px] top--5 flex items-center">
        <div className="h-[20px] w-[50px] flex items-center justify-center">
          _______
        </div>
      </div>
      <div className="absolute left-[120px] top-[5px] flex items-center">
        <div className="h-[20px] w-[30px]">
          MOTIONS
        </div>
      </div>
    </div>
  </div>
  
  <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Moderated</h2>
  </div>

  <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div>
  
  
  <div className="relative mt-8 h-[234px] w-[1300px] p-10 top-10" style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
      Give us a structured way of discussing solutions to the issue at hand:
    </p>
    <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p>
  </div>
</section>

<section className="relative h-screen pt-0  pl-0">
  <div className="absolute top-[70px] right-[200px] flex flex-col items-end space-y-4"> 
    
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0"> 
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          02
        </div>
      </div>
      
      <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
  <div className="h-[20px] w-[50px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
    _______
  </div>
  <div className="flex items-center space-x-4" style={{ position: 'relative', top: '13px' }}> 
    <div className="h-[10px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
      RESOLUTION
    </div>
    <div className="h-[10px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
      WRITING
    </div>
  </div>
</div>
</div>
<div className="relative mb-6 h-[10px] w-[13px] top-[0] right-20">
      <h2 className="text-4xl font-bold">Fixed</h2>
    </div>
    <div className="relative mb-6 h-[10px] w-[13px] top-[2px] right-20">
      <h2 className="text-4xl font-bold">Topics</h2>
    </div>
  </div>
</section>




    </div>
    </>



    
  );
}

export default RuleBook;
