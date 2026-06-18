import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CertCard } from '../ui/CertCard';
import { AwardIcon, LeafIcon, ShieldIcon, CheckIcon } from '../icons';

export const Certifications: React.FC = () => (
  <section id="certifications" className="certifications">
    <div className="container">
      <SectionHeading title="Certifications &amp; Trust Signals" subtitle="Every shipment is backed by internationally recognised certifications that give you and your customers full confidence." />
      <div className="cert-grid">
        <CertCard icon={<AwardIcon />} title="Fair Trade Certified" description="Fair wages and sustainable farming practices verified by independent auditors." />
        <CertCard icon={<LeafIcon />} title="Organic Certified" description="Certified organic production — no synthetic pesticides or fertilisers." />
        <CertCard icon={<ShieldIcon />} title="ISO 9001:2015" description="Quality management system certified for export operations and processing." />
        <CertCard icon={<CheckIcon />} title="CUPSI Premium Standard" description="Guatemalan Quality Premium certification — recognised by speciality buyers worldwide." />
      </div>
    </div>
  </section>
);
