import { Metadata } from 'next';

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
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="(555) 555-5555"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of Service Needed</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Please describe your electrical project or issue in detail..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="contact" value="phone" className="mr-2" />
                  Phone
                </label>
                <label className="flex items-center">
                  <input type="radio" name="contact" value="email" className="mr-2" />
                  Email
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-4 font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              Get My Free Quote
            </button>
          </form>

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
