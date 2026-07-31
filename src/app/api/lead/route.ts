import { NextRequest, NextResponse } from 'next/server';

// Forwards leads to the Yes Crew CRM form endpoint for Los Angeles Electrician.
// The provider is resolved there from the opaque form_key — never spoofable.
const CRM_FORM_URL =
  'https://yescrew-dashboard.vercel.app/api/forms/aeee469efdbc42f2bf12114f8fcb2432/submit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      service,
      message,
      contactMethod,
      source,
      submission_id,
      elapsed_ms,
      company_website,
    } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      repair: 'Electrical Repair',
      installation: 'New Installation',
      maintenance: 'Maintenance',
      panel: 'Panel Upgrade',
      lighting: 'Lighting',
      wiring: 'Wiring',
      safety: 'Safety Inspection',
      other: 'Other',
    };

    const parts = [
      source ? `Source: ${source}` : null,
      service ? `Service: ${serviceLabels[service] ?? service}` : null,
      address ? `Address: ${address}` : null,
      contactMethod ? `Preferred contact: ${contactMethod}` : null,
      message ? `Details: ${message}` : null,
    ].filter(Boolean);

    const crmResponse = await fetch(CRM_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        service_needed: parts.join(' | ') || null,
        submission_id,
        elapsed_ms,
        company_website, // honeypot passthrough
      }),
    });

    if (!crmResponse.ok) {
      console.error('CRM form submit failed:', crmResponse.status);
      return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
  }
}
