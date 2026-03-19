import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, company, service, message, website } = body

  // Honeypot: bots fill this field, humans don't
  if (website) {
    return NextResponse.json({ success: true })
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formGuid = process.env.HUBSPOT_FORM_GUID

  if (!portalId || !formGuid) {
    console.error('HubSpot env vars not set: HUBSPOT_PORTAL_ID, HUBSPOT_FORM_GUID')
    return NextResponse.json({ error: 'Form not configured.' }, { status: 500 })
  }

  const payload = {
    fields: [
      { objectTypeId: '0-1', name: 'firstname', value: firstName || '' },
      { objectTypeId: '0-1', name: 'lastname', value: lastName || '' },
      { objectTypeId: '0-1', name: 'email', value: email },
      { objectTypeId: '0-1', name: 'company', value: company },
      { objectTypeId: '0-1', name: 'service_interest', value: service || '' },
      { objectTypeId: '0-1', name: 'message', value: message || '' },
    ],
    context: {
      pageUri: 'https://corealmedia.com/contact',
      pageName: 'Contact',
    },
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}?region=eu1`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) {
      const error = await res.text()
      console.error('HubSpot submission error:', error)
      return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('HubSpot fetch error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
