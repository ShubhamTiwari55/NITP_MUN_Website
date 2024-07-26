import React from 'react';
import teamDetails from '@/constant/teamdata';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';

function Secratriat() {
  return (
    <>

       <div style={{
      backgroundImage: 'url(/bg.jpg)', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src='/sec.png' alt="Logo" style={{ width: '1439px', height: '1281px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {teamDetails.secretrians.members.map(member => (
          <Card key={member.id} member={member} />
        ))}
        </div>
    </div>
    </>
  );
}

export default Secratriat;
