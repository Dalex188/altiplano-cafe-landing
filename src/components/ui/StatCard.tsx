import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <div className="stat">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);
