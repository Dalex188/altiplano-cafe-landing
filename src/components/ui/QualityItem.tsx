import React from 'react';

interface QualityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const QualityItem: React.FC<QualityItemProps> = ({ icon, title, description }) => (
  <div className="quality-item">
    <div className="quality-item-icon">{icon}</div>
    <div>
      <h3 className="quality-item-title">{title}</h3>
      <p className="quality-item-desc">{description}</p>
    </div>
  </div>
);
