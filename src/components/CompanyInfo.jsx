import React, { useState } from 'react';


export default function CompanyInfo(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`company-info-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleFlip}
    >
    
      <div className="company-info-image">
        <img src={props.imgUrl} alt={props.imgAlt} />
      </div>
      <div className="company-info-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
