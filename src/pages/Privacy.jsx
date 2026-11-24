import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data.js';

// Privacy Policy (/privacy-policy). Written for a BC business under BC's
// Personal Information Protection Act (PIPA). Keep it in step with what the
// site actually does: if a new tool is added (chat widget, ads pixel, booking
// app, paid Formspree uploads), add it under "Services we use" and bump
// LAST_UPDATED. The owner should review this text; it is not legal advice.
export const PRIVACY_LAST_UPDATED = 'November 24, 2026';

const mail = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How {COMPANY.shortName} collects, uses and protects your personal information.</p>
        </div>
      </section>

      <section className="block">
        <div className="container legal-page">
          <p className="legal-updated">Last updated: {PRIVACY_LAST_UPDATED}</p>

          <p>
            {COMPANY.name} ("{COMPANY.shortName}", "we", "us") is a glass installation company based
            in Vancouver, British Columbia. This policy explains what personal information we collect
            through finelinesglass.ca and when you contact us, how we use it, and the choices you
            have. We handle personal information in line with British Columbia's{' '}
            <em>Personal Information Protection Act</em> (PIPA).
          </p>

          <h2>Information you give us</h2>
          <p>When you use our Request an Estimate or Contact forms, email us or call us, we collect what you choose to share, such as:</p>
          <ul>
            <li>your name, email address and phone number, and how you prefer to be contacted;</li>
            <li>details about your project: the service you need, your timeline, property type, the area you're in, and any notes or measurements;</li>
            <li>photos or drawings you email to us, and anything else you include in a message.</li>
          </ul>
          <p>
            We collect only what we need to answer your enquiry, prepare an estimate and carry out the
            work. Please don't send sensitive information (such as payment card numbers) through the
            website forms.
          </p>

          <h2>Information collected automatically</h2>
          <p>
            We use Google Analytics to understand how people find and use the website, so we can
            improve it. It uses cookies and similar technology to collect information such as the
            pages you visit, how long you stay, the website or search that brought you here, your
            device and browser type, and your approximate location (city level, based on your IP
            address). It also counts a few actions, such as tapping our phone number or email address
            and sending a form. It does not receive what you type into our forms.
          </p>
          <p>
            We don't use this information to identify you personally, and we don't use advertising or
            remarketing features. You can block or delete cookies in your browser settings, or install
            Google's{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Analytics opt-out browser add-on
            </a>
            . The website works normally either way.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>to reply to your questions and prepare estimates and quotes;</li>
            <li>to schedule site visits, measurements and installations, and to follow up on a job;</li>
            <li>to keep business, accounting and warranty records;</li>
            <li>to understand how the website is used and make it better.</li>
          </ul>
          <p>
            We don't sell, rent or trade your personal information, and we don't add you to a mailing
            list without asking. When you send us a form or contact us, you consent to us using your
            information for these purposes. You can withdraw that consent at any time by emailing us,
            though we may then be unable to provide an estimate or service.
          </p>

          <h2>Services we use</h2>
          <p>We rely on a few trusted service providers to run the website and our business. They handle information only to provide their service to us:</p>
          <ul>
            <li><strong>Formspree</strong> receives website form submissions and emails them to us.</li>
            <li><strong>Google</strong> provides Google Analytics, our email (Gmail), the map on our Contact page and the website's fonts. Loading the map or fonts sends your IP address to Google.</li>
            <li><strong>Vercel</strong> hosts the website and, like any web host, keeps short-term technical logs (such as IP addresses) for security and reliability.</li>
            <li>We may also share project details with suppliers or partner trades when needed to complete your job.</li>
          </ul>
          <p>
            Some of these providers store or process information outside Canada, including in the
            United States, where it may be subject to the laws of that country.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep personal information only as long as we need it for the purposes above, including
            for warranty, accounting and tax records that the law requires us to keep. After that, we
            delete it or destroy it securely.
          </p>

          <h2>How we protect it</h2>
          <p>
            We take reasonable steps to protect your information, including password-protected accounts
            and limiting access to the people who need it to do the work. No method of sending or
            storing information online is completely secure, so we can't guarantee absolute security.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to see the personal information we hold about you, ask how it has been used, ask
            us to correct it, or withdraw your consent. Email us at {mail} and we'll respond within the
            time PIPA allows (generally 30 business days). If you're not satisfied with our answer, you
            can contact the{' '}
            <a href="https://www.oipc.bc.ca/" target="_blank" rel="noopener noreferrer">
              Office of the Information and Privacy Commissioner for British Columbia
            </a>
            .
          </p>

          <h2>Children</h2>
          <p>Our website and services are meant for adults. We don't knowingly collect personal information from children.</p>

          <h2>Links to other websites</h2>
          <p>
            Our site links to other websites, such as Instagram and Google Maps. Their own privacy
            policies apply when you visit them.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top shows when it last
            changed.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy or your personal information? Contact us at {mail}, call{' '}
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>, or write to {COMPANY.name},{' '}
            {COMPANY.address}.
          </p>
          <p>
            See also our <Link to="/disclaimer">Disclaimer</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
