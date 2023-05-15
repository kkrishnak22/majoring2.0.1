import React, { useState, useEffect } from 'react';

export default function Card({ title, description, image }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let timeout;
    if (isClicked) {
      timeout = setTimeout(() => {
        setIsClicked(false);
      }, 6000);
    }
    return () => clearTimeout(timeout);
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className={`card ${isClicked ? 'is-clicked' : ''}`} onClick={handleClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
