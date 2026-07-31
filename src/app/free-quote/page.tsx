import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Free Quote',
  description: 'Get a free quote from Los Angeles Electrician. Quality electrical work at affordable prices.',
};

export default function FreeQuotePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Please Fill Out the Form Below to Get Your FREE Quote
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <LeadForm
            variant="quote"
            source="free-quote"
            buttonLabel="Get My Free Quote"
            className="space-y-6"
            buttonClassName="w-full bg-yellow-400 text-gray-900 py-4 font-bold text-lg hover:bg-yellow-500 transition-colors"
            successMessage="Thanks! Your free quote request was sent — we'll be in touch shortly."
          />

          <div className="mt-8 text-center">
            <p className="text-gray-600">Or call us directly:</p>
            <a href="tel:+18189752332" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              (818) 975-2332
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
