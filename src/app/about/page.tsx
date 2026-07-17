import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Los Angeles Electrician - serving the LA area since 2014 with quality electrical services at affordable prices.',
};

export default function AboutPage() {
  const services = [
    { title: 'Electronics Installations', description: 'No project is too big or small.' },
    { title: 'Electricity Supply', description: 'Exactly the right amount of energy at the right price.' },
    { title: 'Electrical Repairs', description: 'Our team of experts are here for you.' },
  ];

  const faqs = [
    {
      question: "What types of electrical services do you offer?",
      answer: "We offer a wide range of electrical services including electrical repairs, maintenance, installations, wiring upgrades, lighting solutions, panel upgrades, and electrical safety inspections for residential, commercial, and industrial clients.",
    },
    {
      question: "How do I know if I need electrical repairs?",
      answer: "Signs that you may need electrical repairs include flickering lights, frequent circuit breaker tripping, burning smells near outlets, and outdated wiring. If you experience any of these issues, it's best to have a professional electrician inspect your electrical system.",
    },
    {
      question: "Why is regular electrical maintenance important?",
      answer: "Regular electrical maintenance is crucial for ensuring the safety and efficiency of your electrical systems. It helps identify potential issues before they become major problems, reduces the risk of electrical hazards, and extends the lifespan of your electrical components.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <Link
            href="/free-quote"
            className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Since 2014 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Serving the Los Angeles Area since 2014</h2>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals provide quality service at affordable prices.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/electric-services-38.png"
                alt="Los Angeles Electrician Team"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-yellow-600 font-medium mb-2">Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/electric-services-6.jpg"
                alt="Our mission"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-4">
                We want to provide the best quality service at a reasonable price. Our team of experts are skilled at coming up with the right solutions.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We are a team of professionals with decades of combined experience.
              </h3>
              <p className="text-gray-600 mb-4">
                At Los Angeles Electrician, we illuminate lives with comprehensive electrical solutions tailored for both residential and commercial premises. Our team of certified electricians boasts years of experience, ensuring the highest standards of safety and service.
              </p>
              <p className="text-gray-600 mb-6">
                From minor electrical repairs to major installations, we&apos;re dedicated to providing reliable, efficient, and cost-effective services that brighten your world and power your everyday life.
              </p>
              <Link
                href="/services"
                className="inline-block bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-yellow-600 font-medium mb-2">Services</p>
            <h2 className="text-3xl font-bold text-gray-900">What we do best</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src="/images/electric-services-6.jpg"
                alt="Our services"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-yellow-600">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            Great quality work at affordable price. Our team of experts can handle any project, large or small.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
          >
            Ask a question
          </Link>
        </div>
      </section>
    </div>
  );
}
