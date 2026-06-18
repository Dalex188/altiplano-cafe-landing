import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { QualityItem } from '../ui/QualityItem';
import { LabIcon, CoffeeIcon, DocumentIcon, ShieldIcon } from '../icons';

export const Quality: React.FC = () => (
  <section id="quality" className="quality">
    <div className="container">
      <SectionHeading title="Coffee Quality &amp; Origin" subtitle="Sourced from the volcanic highlands of Guatemala — where altitude, climate, and tradition produce exceptional beans for demanding international buyers." light />
      <div className="quality-grid">
        <div className="quality-items">
          <QualityItem icon={<LabIcon />} title="Laboratory Testing" description="Moisture content, density, and sensory analysis before every shipment" />
          <QualityItem icon={<CoffeeIcon />} title="Sensory Evaluation" description="Professional Q-grader cupping team profiles each lot for flavour consistency" />
          <QualityItem icon={<DocumentIcon />} title="Export Documentation" description="Full traceability, phytosanitary certificates, and customs-ready paperwork" />
          <QualityItem icon={<ShieldIcon />} title="Quality Guarantee" description="Grade 1 specialty coffee with consistent cup profile across harvests" />
        </div>
        <div className="quality-image">
          <img
            src="/images/eduardo-gorghetto-vJ3KldG86Eo-unsplash.jpg"
            alt="Guatemalan highlands coffee plantation"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);
