import React, { useState, useEffect, useRef } from 'react';

export default function Card({ title, description, image }) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsInView(cardPosition.top < windowHeight * 0.75 && cardPosition.bottom > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`card ${isInView ? 'is-clicked' : ''}`} ref={cardRef}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
