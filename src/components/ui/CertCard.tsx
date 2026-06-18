import React from 'react';

interface CertCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const CertCard: React.FC<CertCardProps> = ({ icon, title, description }) => (
  <div className="cert-card">
    <div className="cert-card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
