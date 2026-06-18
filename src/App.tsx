import React, { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useFormSubmit } from './hooks/useFormSubmit';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Quality } from './components/sections/Quality';
import { ExportCapabilities } from './components/sections/ExportCapabilities';
import { Certifications } from './components/sections/Certifications';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { Testimonials } from './components/sections/Testimonials';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/sections/Footer';
import './styles/main.css';

const App: React.FC = () => {
  useScrollSpy();
  const { formData, formState, submitError, handleSubmit, handleChange, isFormInvalid } = useFormSubmit();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="altiplano-landing">
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} onNavClick={closeMenu} />
      <Hero />
      <About />
      <Quality />
      <ExportCapabilities />
      <Certifications />
      <ProcessTimeline />
      <Testimonials />
      <ContactForm
        formData={formData}
        formState={formState}
        submitError={submitError}
        isFormInvalid={isFormInvalid}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Footer />
    </div>
  );
};

export default App;
