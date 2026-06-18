import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { StatCard } from '../ui/StatCard';

export const About: React.FC = () => (
  <section id="about" className="about">
    <div className="container">
      <SectionHeading title="About Altiplano Café" subtitle="Family-owned since 1985, we specialise in sourcing and exporting premium Guatemalan coffee from the highlands of the Altiplano region to buyers worldwide." />
      <div className="about-grid">
        <div className="about-text">
          <p>
            With four decades in international coffee trade, we have built strategic partnerships
            with local cooperatives and operate processing facilities that meet the highest global
            quality standards. Every shipment is backed by full traceability, sensory analysis, and
            certified export documentation.
          </p>
          <p>
            Our direct-trade model ensures farmers receive fair compensation while preserving the
            integrity of Guatemala's world-renowned coffee heritage. We serve over 200 active
            business partners across five continents.
          </p>
        </div>
        <div className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}images/daniel-lincoln-4MCJpRp_xbw-unsplash.jpg`}
            alt="Freshly harvested Guatemalan coffee beans"
            loading="lazy"
          />
        </div>
        <div className="about-stats">
          <StatCard number="38" label="Years in Business" />
          <StatCard number="50+" label="Countries Served" />
          <StatCard number="1,000" label="Tons Exported Annually" />
          <StatCard number="200+" label="Active Business Partners" />
        </div>
      </div>
    </div>
  </section>
);
