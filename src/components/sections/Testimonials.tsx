import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <SectionHeading title="What Our Clients Say" subtitle="Trusted by importers and roasters across five continents." light />
      <div className="testimonials-grid">
        <TestimonialCard
          text="&quot;Altiplano's consistency in quality and shipping reliability is unmatched. We've been importing their SHB EP green beans for three years — our roasters love the profile.&quot;"
          author="Marcus Weber"
          role="Head Roaster, Berlin Coffee Collective"
        />
        <TestimonialCard
          text="&quot;The traceability and documentation Altiplano provides makes our import compliance effortless. Direct trade that actually works at scale.&quot;"
          author="Yuki Tanaka"
          role="Procurement Director, Osaka Coffee Importers"
        />
        <TestimonialCard
          text="&quot;We switched to Altiplano for our single-origin line and our customers noticed the difference immediately. Cup scores consistently above 85.&quot;"
          author="Ana Lucía Herrera"
          role="CEO, Café Fino Brooklyn"
        />
      </div>
    </div>
  </section>
);
