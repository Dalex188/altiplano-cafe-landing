import React from 'react';
import type { FormData } from '../../types';
import { FormField } from '../ui/FormField';
import { ContactDetail } from '../ui/ContactDetail';
import { MailIcon, PhoneIcon, PinIcon } from '../icons';

interface ContactFormProps {
  formData: FormData;
  formState: 'idle' | 'submitting' | 'success' | 'error';
  submitError: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isFormInvalid: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData, formState, submitError, handleChange, handleSubmit, isFormInvalid,
}) => (
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
            <ContactDetail icon={<MailIcon />} text="sales@altiplanocafe.com" />
            <ContactDetail icon={<PhoneIcon />} text="+1 (555) 123-4567" />
            <ContactDetail icon={<PinIcon />} text="Guatemala City, Guatemala" />
          </div>
        </div>

        {formState === 'success' ? (
          <div className="contact-form">
            <h3>Thank You</h3>
            <p>Your request has been received. A member of our export team will contact you within 24&nbsp;hours.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <FormField
              label="Full Name *"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={formState === 'submitting'}
            />
            <FormField
              label="Company Name *"
              name="company"
              type="text"
              placeholder="Your company"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={formState === 'submitting'}
            />
            <FormField
              label="Business Email *"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={formState === 'submitting'}
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Including country code"
              value={formData.phone}
              onChange={handleChange}
              disabled={formState === 'submitting'}
            />
            <FormField
              label="Your Requirements"
              name="message"
              type="textarea"
              placeholder="Volume, target market, preferred varietals, certifications needed…"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              disabled={formState === 'submitting'}
            />
            {formState === 'error' && (
              <div className="form-error">{submitError}</div>
            )}
            <div className="form-group form-checkbox">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                disabled={formState === 'submitting'}
              />
              <label htmlFor="consent">
                I agree to the <a href="#" className="form-link">Privacy Policy</a> and consent to being contacted about coffee export opportunities.
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={formState === 'submitting' || isFormInvalid}
            >
              {formState === 'submitting' ? 'Sending…' : 'Send'}
            </button>
          </form>
        )}
      </div>
    </div>
  </section>
);
