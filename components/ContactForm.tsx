'use client';

import { FormEvent, useState } from 'react';

type StatusState = {
  message: string;
  error: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusState>({ message: '', error: false });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setStatus({ message: '', error: false });

    const payload = {
      fullName: String(formData.get('fullName') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      message: String(formData.get('message') || '')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong while submitting your request.');
      }

      setStatus({ message: data.message || 'Thanks! We will contact you shortly.', error: false });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected error occurred.';
      setStatus({ message, error: true });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-card">
      <h3>Or we can contact you</h3>
      <form onSubmit={onSubmit}>
        <label>
          Full Name
          <input name="fullName" type="text" required minLength={2} maxLength={120} />
        </label>
        <label>
          Email
          <input name="email" type="email" required maxLength={120} />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required maxLength={40} />
        </label>
        <label>
          Message
          <textarea name="message" rows={3} maxLength={600} placeholder="Tell us what you need" />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Request a Call'}
        </button>
        <p className="status" style={{ color: status.error ? '#fecaca' : '#86efac' }}>
          {status.message}
        </p>
      </form>
    </div>
  );
}
