import React from 'react';

function Actor(props) {
  const { moviename, firstname, lastname, dob } = props;

  return (
  

<div className="actor grid-item">
     
     <div>
     <img src={'inconnu.jpeg'} className={'circular-image'} style={{width:100}} alt="Unknown" />
     </div>
     <div style={{margin:10}}>
     <div>
       Movie Name : {moviename}
       </div>
       <div>
       Actual Name : {firstname}{lastname}
       </div>
       <div>
       Date of Birth : {dob}
       </div>
       </div>
     
     </div>

  );
}

export default Actor;