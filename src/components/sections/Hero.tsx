import React from 'react';
import { GlobeIcon, StarIcon, ShipIcon } from '../icons';

export const Hero: React.FC = () => (
  <section id="hero" className="hero">
    <div className="hero-content">
      <h1 className="hero-headline">Premium Guatemalan Coffee from Altiplano</h1>
      <p className="hero-subtitle">
        Direct origin to your door — quality you can trust, volume you can scale,
        and a supply chain built for international buyers.
      </p>
      <div className="hero-cta">
        <button
          className="btn btn-primary hero-cta-btn"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request Coffee Portfolio
        </button>
      </div>
      <div className="hero-value-props">
        <div className="hero-value-prop">
          <span className="icon"><GlobeIcon /></span>
          <span>Authentic Guatemalan Origin</span>
        </div>
        <div className="hero-value-prop">
          <span className="icon"><StarIcon /></span>
          <span>Premium Quality Standards</span>
        </div>
        <div className="hero-value-prop">
          <span className="icon"><ShipIcon /></span>
          <span>Global Export Expertise</span>
        </div>
      </div>
    </div>
  </section>
);
