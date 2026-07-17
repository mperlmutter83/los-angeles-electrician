import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Los Angeles Electrician. Call (818) 975-2332. Located at 5325 Newcastle Ave. Suite 124, Encino, CA 91316.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Quote in less than 24hrs</h2>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Call</h3>
                  <a href="tel:+18189752332" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                    (818) 975-2332
                  </a>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info@thelosangeleselectrician.com" className="text-blue-600 hover:underline">
                    info@thelosangeleselectrician.com
                  </a>
                  <p className="text-gray-600">(818) 975-2332</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">5325 Newcastle Ave. Suite 124</p>
                  <p className="text-gray-600">Encino, CA 91316</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Open hours</h3>
                  <p className="text-gray-600">Mon-Sun 8AM-06PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
