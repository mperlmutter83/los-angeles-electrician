import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Electrical services in Los Angeles - repairs, maintenance, installations, safety checks, surround sound, security cameras, and more.',
};

export default function ServicesPage() {
  const mainServices = [
    {
      title: 'Repairs & Maintainance',
      description: 'When it comes to electrical repairs and maintenance, ensuring the safety and functionality of your electrical systems is paramount.',
      image: '/images/electric-services-25.jpg',
    },
    {
      title: 'Electrical Installation',
      description: 'When it comes to electrical installation, no project is too big or too small.',
      image: '/images/electric-services-26.jpg',
    },
    {
      title: 'Safety check',
      description: 'With a focus on safety, compliance, and efficiency, we ensure that your electrical systems are installed with precision and care, setting the foundation for reliable power distribution regardless of the scale of the project.',
      image: '/images/electric-services-29.jpg',
    },
  ];

  const additionalServices = [
    { title: 'Electronics Installations', icon: '🔌' },
    { title: 'Electricity Supply', icon: '⚡' },
    { title: 'Surround Sound', icon: '🔊' },
    { title: 'Security Camera', icon: '📹' },
    { title: 'Saving Electricity', icon: '💡' },
    { title: 'Backup Power Setup', icon: '🔋' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our services</h1>
          <Link
            href="/free-quote"
            className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="text-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure what you need? Get in touch.</h2>
          <p className="mb-6">
            Great quality work at affordable price. Our team of experts can handle any project, large or small.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-medium text-gray-900 text-sm">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
