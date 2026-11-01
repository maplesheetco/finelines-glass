// ---------------------------------------------------------------------------
// FORM DELIVERY
// The estimate and contact forms post to Formspree (formspree.io), which
// emails each submission to the account's address (finelinesglass@gmail.com).
// Set COMPANY.formspreeId to the code at the end of the form's endpoint,
// formspree.io/f/<id>. While it's empty, or if Formspree can't be reached,
// the forms fall back to opening the visitor's email app pre-filled.
// ---------------------------------------------------------------------------
import { COMPANY } from './data.js';

// fields: { label: value } in the order they should appear in the email.
// file: optional File, only sent when COMPANY.formspreeUploads is true
// (file uploads need a paid Formspree plan).
export async function sendToFormspree({ subject, replyTo, fields, file }) {
  if (!COMPANY.formspreeId) return false;
  const data = new FormData();
  data.append('_subject', subject);
  // Formspree uses the lowercase `email` field as the reply-to address.
  if (replyTo) data.append('email', replyTo);
  Object.entries(fields).forEach(([label, value]) => {
    if (value && label !== 'Email') data.append(label, value);
  });
  if (file && COMPANY.formspreeUploads) data.append('attachment', file);
  try {
    const res = await fetch(`https://formspree.io/f/${COMPANY.formspreeId}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function openMailto({ subject, fields }) {
  const body = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
