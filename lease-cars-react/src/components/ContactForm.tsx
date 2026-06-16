import { useState } from 'react';
import type { ContactFormErrors, ContactFormValues } from '../types';

const initialValues: ContactFormValues = { name: '', email: '', message: '' };

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message';
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  if (submitted) {
    return (
      <div className="form-success" role="status">
        Thanks! Your message has been sent — we'll get back to you shortly.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__field">
        <input
          className={`form___input ${errors.name ? 'form___input--error' : ''}`}
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <span className="form__error">{errors.name}</span>}
      </div>
      <div className="form__field">
        <input
          className={`form___input ${errors.email ? 'form___input--error' : ''}`}
          type="email"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange('email')}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="form__error">{errors.email}</span>}
      </div>
      <div className="form__field form__field--full">
        <textarea
          className={`form__textarea ${errors.message ? 'form__textarea--error' : ''}`}
          placeholder="Your text"
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="form__error">{errors.message}</span>}
      </div>
      <button className="form-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
