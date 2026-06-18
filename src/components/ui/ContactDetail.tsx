import React from 'react';

interface ContactDetailProps {
  icon: React.ReactNode;
  text: string;
}

export const ContactDetail: React.FC<ContactDetailProps> = ({ icon, text }) => (
  <div className="contact-detail">
    <span className="contact-detail-icon">{icon}</span>
    <span>{text}</span>
  </div>
);
