import { useState, useCallback } from 'react';
import type { FormData } from '../types';

export type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface UseFormSubmitReturn {
  formData: FormData;
  formState: FormState;
  submitError: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isFormInvalid: boolean;
}

const FORMSPREE_ENDPOINT = (import.meta as Record<string, any>).env?.VITE_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/mqeojool';

export function useFormSubmit(): UseFormSubmitReturn {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [formState, setFormState] = useState<FormState>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
      const response = await fetch(FORMSPREE_ENDPOINT, {
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
  }, [formData, formState]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : (target as HTMLInputElement | HTMLTextAreaElement).value;
    setFormData(prev => ({ ...prev, [target.name]: value }));
  }, []);

  const isFormInvalid = !formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.consent;

  return { formData, formState, submitError, handleChange, handleSubmit, isFormInvalid };
}
