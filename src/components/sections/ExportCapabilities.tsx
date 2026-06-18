import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ExportCard } from '../ui/ExportCard';
import { GlobeIcon, BoxIcon, DollarIcon, GraphIcon } from '../icons';

export const ExportCapabilities: React.FC = () => (
  <section id="export" className="export">
    <div className="container">
      <SectionHeading title="Export Capabilities" subtitle="Full-service export logistics tailored to importers, roasters, and distributors worldwide." />
      <div className="export-grid">
        <ExportCard icon={<GlobeIcon />} title="Global Distribution" description="End-to-end logistics to 50+ countries with customs clearance and documentation support." />
        <ExportCard icon={<BoxIcon />} title="Custom Blending &amp; Packaging" description="From 10&nbsp;kg sample boxes to containerised bulk — tailored to your market requirements." />
        <ExportCard icon={<DollarIcon />} title="Competitive &amp; Transparent Pricing" description="Direct trade removes intermediaries, delivering value without compromising quality." />
        <ExportCard icon={<GraphIcon />} title="Supply Chain Visibility" description="Real-time tracking from farm to port with detailed progress reports and certifications." />
      </div>
    </div>
  </section>
);
