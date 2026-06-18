import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light }) => (
  <>
    <h2 className={`section-heading${light ? ' section-heading--light' : ''}`}>{title}</h2>
    {subtitle && <p className={`section-subtitle${light ? ' section-subtitle--light' : ''}`}>{subtitle}</p>}
  </>
);
