'use client';

import { useRef, useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  message: '',
  contactMethod: '',
};

interface LeadFormProps {
  source: string;
  buttonLabel: string;
  variant?: 'simple' | 'quote';
  className?: string;
  buttonClassName?: string;
  successMessage?: string;
}

export default function LeadForm({
  source,
  buttonLabel,
  variant = 'simple',
  className = 'space-y-4',
  buttonClassName = 'bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors',
  successMessage = "Thanks! Your request was sent — we'll be in touch shortly.",
}: LeadFormProps) {
  const [formData, setFormData] = useState(initialForm);
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
          company_website: company,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialForm);
        setCompany('');
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* Honeypot — invisible to humans, passed through to the CRM spam gate */}
      <input
        type="text"
        name="company_website"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {variant === 'quote' ? (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
              placeholder="(555) 555-5555"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className={inputClass}
              placeholder="Your address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type of Service Needed</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={inputClass}
            >
              <option value="">Select a service</option>
              <option value="repair">Electrical Repair</option>
              <option value="installation">New Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="panel">Panel Upgrade</option>
              <option value="lighting">Lighting</option>
              <option value="wiring">Wiring</option>
              <option value="safety">Safety Inspection</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Project</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={inputClass}
              placeholder="Please describe your electrical project or issue in detail..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === 'phone'}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="mr-2"
                />
                Phone
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === 'email'}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="mr-2"
                />
                Email
              </label>
            </div>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            className={inputClass}
          />
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Your Email"
            className={inputClass}
          />
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Your Phone"
            className={inputClass}
          />
          <textarea
            placeholder="Your Message"
            rows={variant === 'simple' ? 5 : 4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass}
          />
        </>
      )}

      <button type="submit" disabled={status === 'submitting'} className={`${buttonClassName} disabled:opacity-60 disabled:cursor-not-allowed`}>
        {status === 'submitting' ? 'Sending...' : buttonLabel}
      </button>

      {status === 'success' && (
        <div role="status" className="rounded border border-green-200 bg-green-50 px-4 py-3 text-center text-green-700 font-medium">
          {successMessage}
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="rounded border border-red-200 bg-red-50 px-4 py-3 text-center text-red-700 font-medium">
          Something went wrong. Please call us at (818) 975-2332.
        </div>
      )}
    </form>
  );
}
