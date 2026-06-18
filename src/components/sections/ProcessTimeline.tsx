import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineStep } from '../ui/TimelineStep';

export const ProcessTimeline: React.FC = () => (
  <section id="process" className="process">
    <div className="container">
      <SectionHeading title="Our Process &amp; Supply Chain" subtitle="From highland farm to your warehouse — four steps that guarantee quality, transparency, and on-time delivery." light />
      <div className="timeline">
        <TimelineStep
          number="01"
          title="Sourcing"
          description="Direct partnerships with 200+ smallholder farmers in the Altiplano region. Selective hand-picking at peak ripeness ensures only the best cherries enter our supply chain."
          imageSrc="/images/pablo-merchan-montes-SCbq6uKCyMY-unsplash.jpg"
          imageAlt="Coffee farmer harvesting ripe cherries"
        />
        <TimelineStep
          number="02"
          title="Processing"
          description="State-of-the-art washing stations and solar drying facilities. Fully traceable from delivery lot to export batch."
          imageSrc="/images/macarena-navarro-br-BVH65K78-unsplash.jpg"
          imageAlt="Coffee processing and drying"
        />
        <TimelineStep
          number="03"
          title="Quality Control"
          description="Comprehensive moisture testing, screen grading, and professional cupping before any lot is approved for export."
          imageSrc="/images/tina-guina-obV_LM0KjxY-unsplash.jpg"
          imageAlt="Coffee cupping and quality evaluation"
        />
        <TimelineStep
          number="04"
          title="Packaging &amp; Export"
          description="GrainPro or vacuum packaging, container loading supervision, and full customs-ready documentation for hassle-free delivery."
          imageSrc="/images/vonvix-36IX3vlzqds-unsplash.jpg"
          imageAlt="Coffee packaging and export preparation"
        />
      </div>
    </div>
  </section>
);
