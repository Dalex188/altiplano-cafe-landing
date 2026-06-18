import React, { useState, useEffect } from 'react';
import './AltiplanoCafeLanding.css';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const GlobeIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const StarIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const ShipIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const LeafIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75c.5-1.5 3-4.75 6.25-5.25S17 8 17 8z"/>
  </svg>
);

const AwardIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const LabIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 7.86l-2.44 2.44 1.06 1.06 2.44-2.44c.59-.59.59-1.54 0-2.12-.58-.59-1.54-.59-2.12 0zM4.86 16.14l-1.06 1.06c-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0l2.44-2.44-1.06-1.06-2.44 2.44zM12 4c-1.1 0-2 .9-2 2v.29c0 .39.16.76.44 1.04l5.58 5.58c.56.56.79 1.31.58 2.06l-.82 2.93c-.15.54-.65.9-1.2.9H9.42c-.55 0-1.05-.36-1.2-.9l-.82-2.93c-.21-.75.02-1.5.58-2.06l5.58-5.58c.28-.28.44-.65.44-1.04V6c0-1.1-.9-2-2-2z"/>
  </svg>
);

const CoffeeIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21v-2h20v2H2zM20 8V5h-2v3h2zm0 5c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V3h16v10z"/>
  </svg>
);

const GraphIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>
);

const DollarIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
  </svg>
);

const BoxIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H5v-2h14v2zm0-4H5v-2h14v2zm0-4H5V6h14v2z"/>
  </svg>
);

const DocumentIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

const PinIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const MailIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const AltiplanoCafeLanding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    if (formState === 'submitting') return;
    e.preventDefault();
    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.consent) {
      setFormState('error');
      setSubmitError('Please fill in all required fields and accept the privacy policy.');
      return;
    }
    setFormState('submitting');
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/mqeojool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');
      setFormState('success');
      console.log('Lead submitted:', formData);
    } catch (err) {
      setFormState('error');
      setSubmitError('There was a problem submitting your request. Please try again or email us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : (target as HTMLInputElement | HTMLTextAreaElement).value;
    setFormData({ ...formData, [target.name]: value });
  };

  const isFormInvalid = !formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.consent;

  // Intersection Observer: update URL hash based on visible section
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'quality', 'export', 'certifications', 'process', 'testimonials', 'contact-form'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (window.location.hash !== `#${id}` && id !== 'hero') {
            history.replaceState(null, '', `#${id}`);
          } else if (id === 'hero' && window.location.hash !== '') {
            history.replaceState(null, '', window.location.pathname);
          }
        }
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="altiplano-landing">
      {/* ──────── Sticky Header ──────── */}
      <header className="site-header">
        <div className="header-inner container">
          <a href="#hero" className="header-brand" onClick={closeMenu}>Altiplano Café</a>
          <nav className="header-nav">
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#quality" onClick={closeMenu}>Quality</a>
            <a href="#export" onClick={closeMenu}>Export</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#contact-form" onClick={closeMenu} className="header-nav-cta">Contact</a>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ──────── Mobile Nav Overlay ──────── */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMenu}>
          <a href="#hero" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Home</a>
          <a href="#about" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>About</a>
          <a href="#quality" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Quality</a>
          <a href="#export" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Export</a>
          <a href="#process" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Process</a>
          <a href="#testimonials" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>Testimonials</a>
          <a href="#contact-form" onClick={(e) => { e.stopPropagation(); closeMenu(); }} className="mobile-nav-cta">Contact</a>
        </div>
      )}

      {/* ──────── Hero ──────── */}
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

      {/* ──────── About ──────── */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-heading">About Altiplano Café</h2>
          <p className="section-subtitle">
            Family-owned since 1985, we specialise in sourcing and exporting premium Guatemalan coffee
            from the highlands of the Altiplano region to buyers worldwide.
          </p>
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
                src="/images/daniel-lincoln-4MCJpRp_xbw-unsplash.jpg"
                alt="Freshly harvested Guatemalan coffee beans"
                loading="lazy"
              />
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">38</span>
                <span className="stat-label">Years in Business</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">1,000</span>
                <span className="stat-label">Tons Exported Annually</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Active Business Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Quality & Origin ──────── */}
      <section id="quality" className="quality">
        <div className="container">
          <h2 className="section-heading section-heading--light">Coffee Quality &amp; Origin</h2>
          <p className="section-subtitle section-subtitle--light">
            Sourced from the volcanic highlands of Guatemala — where altitude, climate, and tradition
            produce exceptional beans for demanding international buyers.
          </p>
          <div className="quality-grid">
            <div className="quality-items">
              <div className="quality-item">
                <div className="quality-item-icon"><LabIcon /></div>
                <div>
                  <h3 className="quality-item-title">Laboratory Testing</h3>
                  <p className="quality-item-desc">Moisture content, density, and sensory analysis before every shipment</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-item-icon"><CoffeeIcon /></div>
                <div>
                  <h3 className="quality-item-title">Sensory Evaluation</h3>
                  <p className="quality-item-desc">Professional Q-grader cupping team profiles each lot for flavour consistency</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-item-icon"><DocumentIcon /></div>
                <div>
                  <h3 className="quality-item-title">Export Documentation</h3>
                  <p className="quality-item-desc">Full traceability, phytosanitary certificates, and customs-ready paperwork</p>
                </div>
              </div>
              <div className="quality-item">
                <div className="quality-item-icon"><ShieldIcon /></div>
                <div>
                  <h3 className="quality-item-title">Quality Guarantee</h3>
                  <p className="quality-item-desc">Grade 1 specialty coffee with consistent cup profile across harvests</p>
                </div>
              </div>
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

      {/* ──────── Export Capabilities ──────── */}
      <section id="export" className="export">
        <div className="container">
          <h2 className="section-heading">Export Capabilities</h2>
          <p className="section-subtitle">
            Full-service export logistics tailored to importers, roasters, and distributors worldwide.
          </p>
          <div className="export-grid">
            <div className="export-card">
              <div className="export-card-icon"><GlobeIcon /></div>
              <h3>Global Distribution</h3>
              <p>End-to-end logistics to 50+ countries with customs clearance and documentation support.</p>
            </div>
            <div className="export-card">
              <div className="export-card-icon"><BoxIcon /></div>
              <h3>Custom Blending &amp; Packaging</h3>
              <p>From 10&nbsp;kg sample boxes to containerised bulk — tailored to your market requirements.</p>
            </div>
            <div className="export-card">
              <div className="export-card-icon"><DollarIcon /></div>
              <h3>Competitive &amp; Transparent Pricing</h3>
              <p>Direct trade removes intermediaries, delivering value without compromising quality.</p>
            </div>
            <div className="export-card">
              <div className="export-card-icon"><GraphIcon /></div>
              <h3>Supply Chain Visibility</h3>
              <p>Real-time tracking from farm to port with detailed progress reports and certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Certifications ──────── */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-heading">Certifications &amp; Trust Signals</h2>
          <p className="section-subtitle">
            Every shipment is backed by internationally recognised certifications that give you and
            your customers full confidence.
          </p>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-card-icon"><AwardIcon /></div>
              <h3>Fair Trade Certified</h3>
              <p>Fair wages and sustainable farming practices verified by independent auditors.</p>
            </div>
            <div className="cert-card">
              <div className="cert-card-icon"><LeafIcon /></div>
              <h3>Organic Certified</h3>
              <p>Certified organic production — no synthetic pesticides or fertilisers.</p>
            </div>
            <div className="cert-card">
              <div className="cert-card-icon"><ShieldIcon /></div>
              <h3>ISO 9001:2015</h3>
              <p>Quality management system certified for export operations and processing.</p>
            </div>
            <div className="cert-card">
              <div className="cert-card-icon"><CheckIcon /></div>
              <h3>CUPSI Premium Standard</h3>
              <p>Guatemalan Quality Premium certification — recognised by speciality buyers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Process / Supply Chain ──────── */}
      <section id="process" className="process">
        <div className="container">
          <h2 className="section-heading section-heading--light">Our Process &amp; Supply Chain</h2>
          <p className="section-subtitle section-subtitle--light">
            From highland farm to your warehouse — four steps that guarantee quality, transparency, and
            on-time delivery.
          </p>
          <div className="timeline">
            <div className="timeline-step">
              <span className="step-number">01</span>
              <div className="step-content-group">
                <div className="step-text">
                  <h3 className="step-title">Sourcing</h3>
                  <p className="step-desc">
                    Direct partnerships with 200+ smallholder farmers in the Altiplano region. Selective
                    hand-picking at peak ripeness ensures only the best cherries enter our supply chain.
                  </p>
                </div>
                <div className="step-image">
                  <img
                    src="/images/pablo-merchan-montes-SCbq6uKCyMY-unsplash.jpg"
                    alt="Coffee farmer harvesting ripe cherries"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-step">
              <span className="step-number">02</span>
              <div className="step-content-group">
                <div className="step-text">
                  <h3 className="step-title">Processing</h3>
                  <p className="step-desc">
                    State-of-the-art washing stations and solar drying facilities. Fully traceable from
                    delivery lot to export batch.
                  </p>
                </div>
                <div className="step-image">
                  <img
                    src="/images/macarena-navarro-br-BVH65K78-unsplash.jpg"
                    alt="Coffee processing and drying"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-step">
              <span className="step-number">03</span>
              <div className="step-content-group">
                <div className="step-text">
                  <h3 className="step-title">Quality Control</h3>
                  <p className="step-desc">
                    Comprehensive moisture testing, screen grading, and professional cupping before any
                    lot is approved for export.
                  </p>
                </div>
                <div className="step-image">
                  <img
                    src="/images/tina-guina-obV_LM0KjxY-unsplash.jpg"
                    alt="Coffee cupping and quality evaluation"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-step">
              <span className="step-number">04</span>
              <div className="step-content-group">
                <div className="step-text">
                  <h3 className="step-title">Packaging &amp; Export</h3>
                  <p className="step-desc">
                    GrainPro or vacuum packaging, container loading supervision, and full customs-ready
                    documentation for hassle-free delivery.
                  </p>
                </div>
                <div className="step-image">
                  <img
                    src="/images/vonvix-36IX3vlzqds-unsplash.jpg"
                    alt="Coffee packaging and export preparation"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Testimonials ──────── */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-heading section-heading--light">What Our Clients Say</h2>
          <p className="section-subtitle section-subtitle--light">
            Trusted by importers and roasters across five continents.
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
              </div>
              <p className="testimonial-text">
                "Altiplano's consistency in quality and shipping reliability is unmatched. We've been importing their SHB EP green beans for three years — our roasters love the profile."
              </p>
              <div className="testimonial-author">
                <span className="testimonial-name">Marcus Weber</span>
                <span className="testimonial-role">Head Roaster, Berlin Coffee Collective</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
              </div>
              <p className="testimonial-text">
                "The traceability and documentation Altiplano provides makes our import compliance effortless. Direct trade that actually works at scale."
              </p>
              <div className="testimonial-author">
                <span className="testimonial-name">Yuki Tanaka</span>
                <span className="testimonial-role">Procurement Director, Osaka Coffee Importers</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
                <span className="star star-filled">★</span>
              </div>
              <p className="testimonial-text">
                "We switched to Altiplano for our single-origin line and our customers noticed the difference immediately. Cup scores consistently above 85."
              </p>
              <div className="testimonial-author">
                <span className="testimonial-name">Ana Lucía Herrera</span>
                <span className="testimonial-role">CEO, Café Fino Brooklyn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── Contact / Lead Form ──────── */}
      <section id="contact-form" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Start Your Coffee Import Journey</h2>
              <p>
                Ready to experience the quality of authentic Guatemalan coffee? Request our latest
                portfolio and pricing, or schedule a direct conversation with our export team.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-detail-icon"><MailIcon /></span>
                  <span>sales@altiplanocafe.com</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-icon"><PhoneIcon /></span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-icon"><PinIcon /></span>
                  <span>Guatemala City, Guatemala</span>
                </div>
              </div>
            </div>

            {formState === 'success' ? (
              <div className="contact-form">
                <h3>Thank You</h3>
                <p>Your request has been received. A member of our export team will contact you within 24&nbsp;hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Business Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Including country code"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={formState === 'submitting'}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Volume, target market, preferred varietals, certifications needed…"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      disabled={formState === 'submitting'}
                    />
                </div>
                {formState === 'error' && (
                  <div className="form-error">{submitError}</div>
                )}
                <div className="form-group form-checkbox">
                  <input
                      id="consent"
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      required
                      disabled={formState === 'submitting'}
                    />
                  <label htmlFor="consent">
                    I agree to the <a href="#" className="form-link">Privacy Policy</a> and consent to being contacted about coffee export opportunities.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={formState === 'submitting' || isFormInvalid}>
                  {formState === 'submitting' ? 'Sending…' : 'Send'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ──────── Footer ──────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Altiplano Café</h4>
              <p>Premium Guatemalan coffee exporters serving international buyers since 1985.</p>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#">Whole Bean Coffee</a></li>
                <li><a href="#">Ground Coffee</a></li>
                <li><a href="#">Custom Blends</a></li>
                <li><a href="#">Micro-Lots</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Export Process</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Quality Reports</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Shipping Guide</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Altiplano Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AltiplanoCafeLanding;
