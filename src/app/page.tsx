import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  const testimonials = [
    {
      quote: "Wow, I couldn't believe what I got for the price that was paid!",
      author: "Linh Nguyen",
    },
    {
      quote: "Very friendly and great service. I would recommend them to all my friends and family",
      author: "Savannah Todd",
    },
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
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Electrical Installations & Repairs
              </h1>
              <Link
                href="/free-quote"
                className="inline-block bg-gray-900 text-white border-2 border-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get a free quote
              </Link>
            </div>
            <div className="relative">
              {/* Yellow diagonal accent */}
              <div className="absolute -top-10 -right-10 w-64 h-96 bg-yellow-400 transform rotate-12 -z-10"></div>
              <Image
                src="/images/electric-services-22.jpg"
                alt="Electrician at work"
                width={500}
                height={400}
                className="relative z-10 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <Image
                src="/images/electric-services-21.jpg"
                alt="Electrical repairs"
                width={200}
                height={250}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Repairs & Maintainance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When it comes to electrical repairs and maintenance, ensuring the safety and functionality of your electrical systems is paramount. From fixing faulty wiring to replacing outdated components, expert electrical repairs and proactive maintenance can safeguard against potential hazards and prevent costly downtime. Trust in our professional services to keep your electrical systems running smoothly, providing peace of mind for your home or business.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Image
                src="/images/electric-services-22.jpg"
                alt="Electrical installations"
                width={200}
                height={250}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Any Size Installations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When it comes to electrical installation, no project is too big or too small. Whether you&apos;re upgrading the electrical systems in a residential home, constructing a commercial building, or embarking on an industrial facility expansion, our expert electricians are equipped to handle installations of all sizes. From wiring and lighting to advanced automation and energy-efficient solutions, our team is committed to delivering top-notch electrical installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/electric-services-6.jpg"
                alt="Residential and business electrical services"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                We service residential & business locations
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Large scale projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Small quick fixes & installations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Full service infrastructure</span>
                </div>
              </div>
              <Link
                href="/services"
                className="inline-block mt-8 bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
            &quot;{testimonials[0].quote}&quot;
          </p>
          <p className="text-blue-600">– {testimonials[0].author}</p>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/electric-services-26.jpg"
            alt="Electrician working"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/90 to-yellow-400"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex justify-end">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 mb-2">30+ Years of experience</p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                Licensed &<br />Trusted by<br />thousands
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="border-b border-gray-200 pb-4">
                    <summary className="font-medium text-gray-900 cursor-pointer hover:text-yellow-600">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Fill out the form below to contact us</h3>
              <LeadForm
                  source="home-page"
                  buttonLabel="Send Message"
                  successMessage="Thanks! Your message was sent — we'll be in touch shortly."
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
