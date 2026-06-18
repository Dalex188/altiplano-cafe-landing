import React from 'react';

interface ExportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ExportCard: React.FC<ExportCardProps> = ({ icon, title, description }) => (
  <div className="export-card">
    <div className="export-card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
