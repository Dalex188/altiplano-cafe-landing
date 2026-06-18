import React from 'react';
import { StarRating } from './StarRating';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, role }) => (
  <div className="testimonial-card">
    <StarRating />
    <p className="testimonial-text">{text}</p>
    <div className="testimonial-author">
      <span className="testimonial-name">{author}</span>
      <span className="testimonial-role">{role}</span>
    </div>
  </div>
);
