import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Got an Electrical Project or Problem?
          </h2>
          <Link
            href="/free-quote"
            className="bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100 transition-colors border border-gray-900"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Los Angeles Electric Services</h3>
            </div>
            <div>
              <p className="font-bold text-gray-900">(310) 945-2538</p>
              <a href="mailto:info@thelosangeleselectrician.com" className="text-blue-600 hover:underline">
                info@thelosangeleselectrician.com
              </a>
            </div>
            <div className="space-y-1">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900">About our team</Link>
              <Link href="/free-quote" className="block text-gray-600 hover:text-gray-900">Get a Free Quote</Link>
              <Link href="/services" className="block text-gray-600 hover:text-gray-900">Electrical Services</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900">Send us a Message</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="font-semibold">Los Angeles Electrician</p>
              <p className="text-sm text-gray-400">5325 Newcastle Ave. Suite 124</p>
              <p className="text-sm text-gray-400">Encino, CA 91316</p>
              <p className="text-sm text-gray-400">(818) 975-2332</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="bg-red-600 p-2 rounded hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
