import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'checkbox';
  value: string | boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, placeholder, required, disabled, rows, onChange }) => {
  const id = name;

  if (type === 'textarea') {
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
          rows={rows}
          required={required}
          disabled={disabled}
        />
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className="form-group form-checkbox">
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={value as boolean}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value as string}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};
