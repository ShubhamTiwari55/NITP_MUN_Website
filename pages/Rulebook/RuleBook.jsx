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
    {/* <div className="relative text-lg font-bold text-[#FBD784]">
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
    </div> */}
  </div>
  
  <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">ATTIRE</h2>
  </div>

  {/* <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div> */}
  
  
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[90px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    Delegates should be dressed in business-style attire. Delegates will not be allowed 
    to take the floor in informal costume or inappropriately revealing outfits. Traditional 
    clothing is allowed for those who want to wear it to represent their respective countries. </p>
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative h-screen p-20 pt-20 pl-3">
  <div className="absolute top-[220px] right-[10px] transform -translate-y-1/2 flex flex-col items-end space-y-0">
    <div className="flex items-center mb-2">
      <div className="flex-shrink-0">
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          02
        </div>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
        <div className="h-[10px] w-[20px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
          _______
        </div>
        <div className="flex items-center space-x-4" style={{ position: 'relative', top: '14px' }}>
          <div className="h-[3px] w-[20px] flex items-center justify-center" style={{ position: 'relative', left: '8px' }}>
            L.B.
          </div>
          <div className="h-[3px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
            WRITING
          </div>
        </div>
      </div> */}
    </div>
    <div className="relative flex flex-col items-center mt-[-5px]">
      <div className="text-4xl font-bold" style={{ marginBottom: '0' }}>
        AGENDA
      </div>
      {/* Uncomment if needed */}
      {/* <div className="text-4xl font-bold" style={{ marginTop: '0' }}>
        Topics
      </div> */}
    </div>
  </div>
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[280px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    In the context of the United Nations (UN), an "Agenda" refers to a concise list of specific 
    topics or issues that member countries address during meetings and conferences. It sets 
    the framework for discussions,  allowing representatives to propose solutions, negotiate,
     and work towards resolutions on global challenges and concerns.   </p>
    {/* Uncomment if needed */}
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>


<section className="relative p-10 pt-20 pl-3">
  <div className="absolute top-[-50px] left-[-2px] transform -translate-y-1/2 flex flex-col items-start space-y-2">
    <div className="">
      <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
        03
      </div>
    </div>
    {/* Uncomment if needed */}
    {/* <div className="relative text-lg font-bold text-[#FBD784]">
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
    </div> */}
  </div>
  
  <div className="absolute top-[-18px] left-[3px] flex flex-col items-start space-y-2">
    <h2 className="text-4xl font-bold">AMENDMENTS</h2>
  </div>
  {/* <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div> */}
  
  
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[30px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    "Amendments" are proposed changes or modifications to an existing resolution or document. They aim to revise specific clauses, add new information, or remove certain provisions. Delegates put forward amendments during debates to refine the resolution to gain wider acceptance among participants. The voting process decides whether the proposed amendments are adopted and incorporated into the final resolution. </p>
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative h-screen p-20 pt-20 pl-3">
  <div className="absolute top-[212px] right-[10px] transform -translate-y-1/2 flex flex-col items-end space-y-0">
    <div className="flex items-center mb-2">
      <div className="flex-shrink-0">
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          04
        </div>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
        <div className="h-[10px] w-[20px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
          _______
        </div>
        <div className="flex items-center space-x-4" style={{ position: 'relative', top: '14px' }}>
          <div className="h-[3px] w-[20px] flex items-center justify-center" style={{ position: 'relative', left: '8px' }}>
            L.B.
          </div>
          <div className="h-[3px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
            WRITING
          </div>
        </div>
      </div> */}
    </div>
    <div className="relative flex flex-col items-center mt-[-5px]">
      <div className="text-4xl font-bold" >
        SPEAKER'S LIST
      </div>
      {/* Uncomment if needed */}
      {/* <div className="text-4xl font-bold" >
        LIST
      </div> */}
    </div>
  </div>
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[280px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    It is a list that contains the order of speakers in the committee. The specific way that the order is determined varies by conference. The Speaker's List is the default format of debate and the committee will proceed with speeches until a delegate makes a motion to change up the debate format.</p>
    {/* Uncomment if needed */}
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative p-10 pt-20 pl-3">
  <div className="absolute top-[-50px] left-[-2px] transform -translate-y-1/2 flex flex-col items-start space-y-2">
    <div className="">
      <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
        05
      </div>
    </div>
    {/* Uncomment if needed */}
    {/* <div className="relative text-lg font-bold text-[#FBD784]">
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
    </div> */}
  </div>
  
  <div className="absolute top-[-18px] left-[3px] flex flex-col items-start space-y-2">
    <h2 className="text-4xl font-bold">MOTION</h2>
  </div>
  {/* <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div> */}
  
  
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[30px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    Motion is a specific action made by delegates to direct debate in a certain direction. Motions are proposals made to direct discussions and decisions. They structure debates, set agendas, and control speaking time. By guiding conversations, they ensure order and efficiency, helping groups make informed choices in organized settings.
<br /><br />There are several types of motions commonly used in MUN:
<br /><br />
<ol>
  <li><b>1. Motion to Open Debate:</b><br />
  At the beginning of the committee session, the first motion made is typically to open the debate on the agenda topics. This motion is usually passed unanimously or without much opposition, and it signals the start of discussions.
  </li><br />

  <li><b>2. Motion to Set the Agenda:</b><br />
  After the debate is open, delegates may propose motions to determine the order in which the topics will be discussed. This
  motion allows delegates to prioritize the most pressing issues or contentious topics first.
  </li><br />

  <li><b>3. Motion for Moderated Caucus:</b><br />
  During a moderated caucus, the committee is temporarily adjourned, and the debate is structured with a specific speaking time allotted to each delegate. A motion for a moderated caucus is made to discuss a specific topic or issue in-depth.
  </li><br />

  <li><b>4. Motion for an Unmoderated Caucus:</b><br />
  An unmoderated caucus is a less formal session where delegates can move around the room and interact more freely with each other to collaborate, draft resolutions, or form alliances.
  </li><br />

  <li><b>5. Motion to Enter Voting Procedure:</b><br />
  When delegates believe that sufficient debate and discussion have taken place, they may propose a motion to enter the voting procedure. This motion requires a specific threshold of support to pass, indicating that the committee is ready to vote on a resolution.
  </li><br />

  <li><b>6. Motion to Close Debate:</b><br />
  If the committee feels that they have adequately discussed a topic and are ready to move on or conclude the debate on a specific issue, a motion to close the debate can be made.
  </li><br />

  <li><b>7. Motion to Adjourn the Committee:</b><br />
  This motion is made towards the end of the conference when the delegates wish to end the session. It signals the conclusion of the committee's work and officially adjourns the session.
  </li>
</ol>
</p> {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative h-screen p-20 pt-20 pl-3">
  <div className="absolute top-[212px] right-[10px] transform -translate-y-1/2 flex flex-col items-end space-y-0">
    <div className="flex items-center mb-2">
      <div className="flex-shrink-0">
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          06
        </div>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
        <div className="h-[10px] w-[20px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
          _______
        </div>
        <div className="flex items-center space-x-4" style={{ position: 'relative', top: '14px' }}>
          <div className="h-[3px] w-[20px] flex items-center justify-center" style={{ position: 'relative', left: '8px' }}>
            L.B.
          </div>
          <div className="h-[3px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
            WRITING
          </div>
        </div>
      </div> */}
    </div>
    <div className="relative flex flex-col items-center mt-[-5px]">
      <div className="text-4xl font-bold" style={{ marginBottom: '0' }}>
        RIGHT OF REPLY 
      </div>
      {/* Uncomment if needed */}
      {/* <div className="text-4xl font-bold" style={{ marginTop: '0' }}>
        Topics
      </div> */}
    </div>
  </div>
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[280px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    If a country is mentioned by name or is singled out during another delegate's speech, and the mention can be perceived negatively by that country, they may ask the Chair for a Right of Reply. If granted, a Right of Reply allows a country to speak immediately after the "accusing" country has finished, regardless of the replying country's place in line. The Chair can use his/her discretion to regulate the use of this motion for the sake of good decorum. </p>
    {/* Uncomment if needed */}
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative p-10 pt-20 pl-3">
  <div className="absolute top-[-50px] left-[-2px] transform -translate-y-1/2 flex flex-col items-start space-y-2">
    <div className="">
      <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
        07
      </div>
    </div>
    {/* Uncomment if needed */}
    {/* <div className="relative text-lg font-bold text-[#FBD784]">
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
    </div> */}
  </div>
  
  <div className="absolute top-[-18px] left-[3px] flex flex-col items-start space-y-2">
    <h2 className="text-4xl font-bold">CHIT WRITING AND PASSING</h2>
  </div>
  {/* <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div> */}
  
  
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[30px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    Delegates may find limited time to express their views and strategize on agendas. To address this, they can participate in concise informal discussions using chits. This also contributes to the assessment process. Delegates write crisp chits indicating their country's name, discussion topics, and recipient's country. The process follows the given Sequence: <br /><br />

    <ol>
      <li>1. Delegates write chits, including the sender and receiver's country names.
      </li><br />

      <li>2. Chits are submitted to the Chair for approval.
      </li><br />

      <li>3. Approved chits are forwarded by the Chair to the intended delegate
      </li><br />

      <li>4. Delegates engage in unmoderated discussions on indicated
      topics</li><br />

      <li>5. Discussions aim to facilitate collaboration, planning, and alliances,
      </li><br />
    </ol>
    This approach empowers delegates to enhance engagement, plan effectively, and establish connections while ensuring transparency and maintaining the Chair's oversight. The Source and destination countries for each chit are clearly stated to ensure proper communication channels. </p>
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative h-screen p-20 pt-20 pl-3">
  <div className="absolute top-[212px] right-[10px] transform -translate-y-1/2 flex flex-col items-end space-y-0">
    <div className="flex items-center mb-2">
      <div className="flex-shrink-0">
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          08
        </div>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
        <div className="h-[10px] w-[20px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
          _______
        </div>
        <div className="flex items-center space-x-4" style={{ position: 'relative', top: '14px' }}>
          <div className="h-[3px] w-[20px] flex items-center justify-center" style={{ position: 'relative', left: '8px' }}>
            L.B.
          </div>
          <div className="h-[3px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
            WRITING
          </div>
        </div>
      </div> */}
    </div>
    <div className="relative flex flex-col items-center mt-[-5px]">
      <div className="text-4xl font-bold" style={{ marginBottom: '0' }}>
        YIELD
      </div>
      {/* Uncomment if needed */}
      {/* <div className="text-4xl font-bold" style={{ marginTop: '0' }}>
        Topics
      </div> */}
    </div>
  </div>
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[280px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    Yield is when a speaker decides to give up the remaining time in his or her speech. You must be very careful while using 'Yields', proper use can give you points and vice-versa. Typically, the three types of yields are: <br /><br />
    <ol>
      <li><b>1. Yield to the Chair:</b><br />
      It means you give up the rest of your time,
      </li><br />

      <li><b>2. Yield to another delegate:</b><br />
      It means you give up the rest of your time to another delegate.
      </li><br />

      <li><b>3. Yield to questions:</b><br />
      It means you give up you're from speech to answer questions from other delegates or to Yield to comments to your speech by other delegates.
      </li>
    </ol>







  </p>
    {/* Uncomment if needed */}
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative p-10 pt-20 pl-3">
  <div className="absolute top-[-50px] left-[-2px] transform -translate-y-1/2 flex flex-col items-start space-y-2">
    <div className="">
      <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
        09
      </div>
    </div>
    {/* Uncomment if needed */}
    {/* <div className="relative text-lg font-bold text-[#FBD784]">
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
    </div> */}
  </div>
  
  <div className="absolute top-[-18px] left-[3px] flex flex-col items-start space-y-2">
    <h2 className="text-4xl font-bold">POINTS</h2>
  </div>
  {/* <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div> */}
  
  
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[30px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    Points are procedural tools that delegates can use to raise specific requests, seek clarification, or address procedural matters during the committee session, Points are used to ensure order, faimess, and efficiency in the debate and decision-making process. There are mainly 3 types of Points raised during a discussion.
    <br /><br />
    <ol>
      <li><b>1. Point of Inquiry</b><br /><br />
      It is used when a delegate has a question about something that is not clearly understood in the committee. Use this to ask a question if you don't understand a term or get what's going on in committeel
      </li><br />

      <li><b>2. Point of Personal Privilege:</b><br /><br />
      It is used when a delegate experiences personal discomfort that hinders their ability to participate in the committee. Examples: temperature of room, distractions during committee, can't hear another delegate, etc.
      </li><br />

      <li><b>3. Point of Order:</b><br /><br />
      It is used when a delegate believes that there was a mistake made regarding the rules of procedure. It is also called the Point of Parliamentary Procedure.
      </li>
    </ol>
 </p>
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative h-screen p-20 pt-20 pl-3">
  <div className="absolute top-[212px] right-[10px] transform -translate-y-1/2 flex flex-col items-end space-y-0">
    <div className="flex items-center mb-2">
      <div className="flex-shrink-0">
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          10
        </div>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
        <div className="h-[10px] w-[20px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
          _______
        </div>
        <div className="flex items-center space-x-4" style={{ position: 'relative', top: '14px' }}>
          <div className="h-[3px] w-[20px] flex items-center justify-center" style={{ position: 'relative', left: '8px' }}>
            L.B.
          </div>
          <div className="h-[3px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
            WRITING
          </div>
        </div>
      </div> */}
    </div>
    <div className="relative flex flex-col items-center mt-[-5px]">
      <div className="text-4xl font-bold" style={{ marginBottom: '0' }}>
        CAUCUS
      </div>
      {/* Uncomment if needed */}
      {/* <div className="text-4xl font-bold" style={{ marginTop: '0' }}>
        Topics
      </div> */}
    </div>
  </div>
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[280px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    A Caucus refers to a specific period of time during a committee session when delegates come together in smaller groups to engage in more informal and focused discussions on specific agenda topics or issues. The purpose of a caucus is to encourage collaboration, negotiation, and the drafting of solutions or resolutions. <br /><br />
    <ol>
      <li><b>1. Moderated Caucus:</b><br /><br />
      A debate format that allows delegates to make short comments on a specific sub-issue. Typically, delegates who are interested in speaking will raise their placards and the Chairs will call on delegates to speak one at a time. In order to move into a moderated caucus, the motion must include the overall speaking time, the time per speaker, and the sub-issue to be discussed. Example: Italy moves for a 5-minute moderated caucus with 30 seconds of speaking time per delegate for the purpose of discussing solutions to women's rights.
      </li><br />

      <li><b>2. Unmoderated Caucus</b><br /><br />
      A debate format in which delegates can leave their seats to go and talk to others freely and informally. This is usually when delegates find allies and work on draft resolutions. In order to move into an unmoderated caucus, the motion must include the overall caucus time and preferably the purpose of the unmoderated caucus. It is also called an Informal Caucus.
      </li><br />
    </ol>
    Example: Delegate of Australia moves for an unmoderated caucus for 10 minutes to complete draft resolutions.    </p>
    {/* Uncomment if needed */}
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative p-10 pt-20 pl-3">
  <div className="absolute top-[-50px] left-[-2px] transform -translate-y-1/2 flex flex-col items-start space-y-2">
    <div className="">
      <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
        11
      </div>
    </div>
    {/* Uncomment if needed */}
    {/* <div className="relative text-lg font-bold text-[#FBD784]">
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
    </div> */}
  </div>
  
  <div className="absolute top-[-18px] left-[3px] flex flex-col items-start space-y-2">
    <h2 className="text-4xl font-bold">RESOLUTIONS</h2>
  </div>
  {/* <div className="relative mb-6 h-[10px] w-[13px] top-0 left-2">
    <h2 className="text-4xl font-bold">Caucus</h2>
  </div> */}
  
  
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[30px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    The goal of the committee is to pass a resolution. Although you may not know how to write a resolution yet, it's important to know the basic terms so you can write one yourself and keep up as they are presented. Remember writing and getting your Resolutions passed by the committee establishes you as a respected delegate and gives you maximum points. Keep reading to know all about a Resolution: <br /><br />
    <ol>
      <li><b>1. Working paper</b><br /><br />
      Working papers are just a list of ideas formed by the blocs. They may or may not be written in resolution format. The working paper needs to be approved by the chairs.
      </li><br />

      <li><b>2. Draft Resolution:</b><br /><br />
      A document written in resolution format, approved by the chairs, and introduced to the committee but not yet voted upon is called a draft resolution. Delegates will be spending most of their time writing and amending the draft resolutions. Once a draft resolution is passed by a committee, then it becomes a Resolution.
      </li><br />

      <li><b>3. Sponsors:</b><br /><br />
      Delegates who authored the draft resolution or actively contributed ideas. They support the draft resolution and want to see it get passed, so they should vote for it. All resolutions will require a minimum number of sponsors.
      </li><br />

      <li><b>4. Signatories</b><br /><br />
      Delegates who wish the see the draft resolution debated but may or may not agree with all of the ideas. However, they think there is some
      merit to it and want to see it presented. Some resolutions will require a minimum number of signatories.
      </li><br />

      <li><b>5. Pre-ambulatory clauses:</b><br /><br />
      Statements in the first section of the draft resolution describes the problems that the committee wants to solve as well as previous measures taken to combat the problem. Pre-ambulatory clauses are usually italicized or underlined by not numbered.
      </li><br />

      <li><b>6. Operative clauses:</b><br /><br />
      Statements in the second section of the draft resolution outlines the specific solutions the sponsors wish to implement. Operative clauses are usually numbered and underlined.
      </li><br />

      <li><b>7. Amendment</b><br /><br />
      A change made to an operative clause of a draft resolution. Amendments can add, delete, or change an operative clause in a draft resolution. A Friendly Amendment is an amendment written and approved by all the sponsors to a draft resolution and is automatically included in the text. An Unfriendly Amendment is an amendment not approved by all the sponsors to their draft resolution and must be voted upon before it can be included in the text.
      </li><br />

      <li><b>8. Merging:</b><br /><br />
      Combining two or more draft resolutions to make a bigger or new draft resolution.
      </li><br />

      <li><b>9. Voting bloc:</b><br /><br />
      When delegates vote on the drafted resolutions and amendments.
      </li>
    </ol>
   </p>
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is
      narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of
      time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>

<section className="relative h-screen p-20 pt-20 pl-3">
  <div className="absolute top-[212px] right-[10px] transform -translate-y-1/2 flex flex-col items-end space-y-0">
    <div className="flex items-center mb-2">
      <div className="flex-shrink-0">
        <div className="text-7xl font-bold h-[45px] w-[45px] flex items-center justify-center text-gray-700">
          12
        </div>
      </div>
      {/* Uncomment if needed */}
      {/* <div className="relative text-lg font-bold text-[#FBD784] ml-6 flex items-center space-x-8">
        <div className="h-[10px] w-[20px] flex items-center justify-center" style={{ marginLeft: '20px', position: 'relative', top: '5px' }}>
          _______
        </div>
        <div className="flex items-center space-x-4" style={{ position: 'relative', top: '14px' }}>
          <div className="h-[3px] w-[20px] flex items-center justify-center" style={{ position: 'relative', left: '8px' }}>
            L.B.
          </div>
          <div className="h-[3px] w-[90px] flex items-center justify-center" style={{ position: 'relative', left: '10px' }}>
            WRITING
          </div>
        </div>
      </div> */}
    </div>
    <div className="relative flex flex-col items-center mt-[-5px]">
      <div className="text-4xl font-bold" style={{ marginBottom: '0' }}>
        SAMPLE RESOLUTIONS
      </div>
      {/* Uncomment if needed */}
      {/* <div className="text-4xl font-bold" style={{ marginTop: '0' }}>
        Topics
      </div> */}
    </div>
  </div>
  <div className="relative mt-8 max-h-[40vh] w-[1300px] p-10 top-[280px] overflow-y-scroll" 
  style={{ backgroundColor: '#0F121C' }}>
    <p className="text-2xl text-white mb-4">
    Resolution GA/3/1.1 <br /><br />
    General Assembly <br /><br />
    Sponsors: United States, Austria, and Italy <br /><br />
    Signatories: Greece, Tajikistan, Japan, Canada, Mali, the Netherlands, and Gabon <br /><br />
    Topic: "Strengthening UN Coordination of Humanitarian Assistance in Complex Emergencies" <br /><br /><br />
    The General Assembly. <br /><br />
    Preambulatory Clauses: <br /><br />

    Reminding all nations of the celebration of the 50th anniversary of the Universal Declaration of Human Rights, which recognizes the inherent dignity, equality, and inalienable rights of all global citizens,
    Reaffirming its Resolution 33/1996 of 25 July 1996, which encourages Governments to work with UN bodies aimed at improving the coordination and effectiveness of humanitarian assistance, <br /><br />
    Noting with satisfaction the past efforts of various relevant UN bodies and nongovernmental organizations, <br /><br />
    Operative Clauses: <br /><br />
    <ol>
      <li>1. Encourages all relevant agencies of the United Nations to collaborate more closely with countries at the grassroots level to enhance the carrying out of relief efforts;
      </li><br />
      <li>2. Urges member states to comply with the goals of the UN Department of Humanitarian Affairs to streamline efforts of humanitarian aid:
      </li><br />
      <li>3. Requests that all nations develop rapid deployment forces to better enhance the coordination of relief efforts of humanitarian assistance in complex emergencies;
      </li><br />
      <li>4. Calls for the development of a United Nations Trust Fund that encourages voluntary donations from the private transnational sector to aid in funding the implementation of rapid deployment forces;
      </li><br />
      <li>5. Stresses the continuing need for impartial and objective
      information on the political, economic, and social situations and events of all countries
      </li><br />
      <li>6. Calls upon states to respond quickly and generously to consolidated appeals for humanitarian assistance, and
      </li><br />
      <li>7. Requests the expansion of preventive actions and assurance of post-conflict assistance through reconstruction and development.
      </li>
    </ol><br /><br /><br />
    This resolution aims to strengthen the coordination of humanitarian
      assistance in complex emergencies, acknowledging the importance of collaboration, rapid response, and unbiased information sharing. The General Assembly affirms its commitment to addressing global crises with effective measures
      <br /><br /><br />
    *End of Resolution* 
  </p>
    {/* Uncomment if needed */}
    {/* <p className="text-2xl text-white mb-4">
      <strong>FOCUSED TOPIC.</strong> The topic for the moderated caucus is narrow and focused, making conversation more productive.
    </p>
    <p className="text-2xl text-white">
      <strong>TIME LIMITS.</strong> Each person is given a specific amount of time to speak, and the discussion has a set time limit.
    </p> */}
  </div>
</section>
    </div>
    </>



    
  );
}

export default RuleBook;
