import React from 'react';

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({ number, title, description, imageSrc, imageAlt }) => (
  <div className="timeline-step">
    <span className="step-number">{number}</span>
    <div className="step-content-group">
      <div className="step-text">
        <h3 className="step-title">{title}</h3>
        <p className="step-desc">{description}</p>
      </div>
      <div className="step-image">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
    </div>
  </div>
);
