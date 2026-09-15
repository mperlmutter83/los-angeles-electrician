import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(818) 975-2332';
const PHONE_HREF = 'tel:+181****2332';

export const metadata: Metadata = {
  title: 'Looking for Work',
  description:
    "Looking for electrician work in Los Angeles? Local electrical companies are hiring. Fill out the quick form and we'll connect you — or call (818) 975-2332.",
  alternates: { canonical: 'https://www.thelosangeleselectrician.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local electrical businesses that are actively hiring.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested businesses contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Residential Electrical',
  'Commercial Electrical',
  'Panel Upgrades',
  'EV Charger Installation',
  'Lighting Installation',
  'Troubleshooting & Repair',
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-yellow-400">Looking for Work?</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Electrician Work in Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-300">
            Local electrical companies are growing and looking for dependable people. Tell us about
            yourself and we&apos;ll connect you with businesses that are hiring — free, fast, and
            no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block bg-yellow-400 px-7 py-3 font-semibold text-gray-900 hover:bg-yellow-300 transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block border-2 border-yellow-400 px-7 py-3 font-semibold text-yellow-400 hover:bg-yellow-400/10 transition-colors"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-gray-50 border border-gray-200 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-gray-900">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Electrical businesses across Los Angeles hire for a range of work, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((s) => (
              <li
                key={s}
                className="border border-gray-200 bg-white px-5 py-4 text-gray-700 font-medium shadow-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="max-w-7xl mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Apply in 60 Seconds</h2>
          <p className="mt-2 text-center text-gray-600">
            Free and confidential — we&apos;ll only share your details with businesses that are hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          Own an electrical business and need reliable people?{' '}
          <a href={PHONE_HREF} className="font-bold text-yellow-600 underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </section>
    </>
  );
}
