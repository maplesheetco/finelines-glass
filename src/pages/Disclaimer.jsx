import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data.js';

// Disclaimer (/disclaimer). Covers the articles and guides, prices and
// estimates, project photos and product information on the site. The owner
// should review this text; it is not legal advice.
export const DISCLAIMER_LAST_UPDATED = 'November 24, 2026';

export default function Disclaimer() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Disclaimer</h1>
          <p>About the information, photos and guidance on this website.</p>
        </div>
      </section>

      <section className="block">
        <div className="container legal-page">
          <p className="legal-updated">Last updated: {DISCLAIMER_LAST_UPDATED}</p>

          <p>
            The information on finelinesglass.ca is provided by {COMPANY.name} for general
            information only. By using this website, you agree to the terms below.
          </p>

          <h2>General guidance, not professional advice</h2>
          <p>
            Our articles, guides, FAQs and service pages share what we've learned from our own work.
            They are general guidance only and are not engineering, architectural, legal or building
            code advice. Every space is different, and requirements under the BC Building Code, the
            Vancouver Building By-law, local bylaws and strata rules vary by project and change over
            time.
          </p>
          <p>
            Before you make decisions about structural work, guards and railings, permits or safety,
            check with a qualified professional or your local building authority. When we take on a
            job, we confirm the requirements that apply to that project.
          </p>

          <h2>Prices, estimates and quotes</h2>
          <p>
            Nothing on this website is a quote or an offer. Any price ranges, timelines or examples are
            general and may not reflect your project. An accurate quote needs a site visit and
            measurements, and only a written quote from us sets out the scope, price and terms of your
            job. Sending a form doesn't create a contract.
          </p>

          <h2>Project photos</h2>
          <p>
            Photos on this site show past work by our team and are there as examples. The glass,
            hardware, finishes and colours available for your project may differ, depending on
            suppliers, site conditions and code requirements, and colours can look different on screen
            than in person.
          </p>

          <h2>Products, hardware and brands</h2>
          <p>
            Our Hardware &amp; Finishes page and product descriptions are informational only. Products,
            finishes and specifications change, and we source through several suppliers, so we'll
            confirm what's available when we prepare your quote. Brand and product names belong to
            their owners and are used only to describe products.
          </p>

          <h2>Warranties</h2>
          <p>
            Any warranty on our work or products is the one stated in your written quote or contract.
            Nothing on this website adds to or changes those terms.
          </p>

          <h2>Accuracy and changes</h2>
          <p>
            We work to keep the website accurate and up to date, but we can't guarantee that every
            detail is complete or current. We may change the content, services or business hours shown
            here at any time without notice.
          </p>

          <h2>Links to other websites</h2>
          <p>
            Links to other websites are for convenience. We don't control those sites and aren't
            responsible for their content.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent the law allows, {COMPANY.name} is not liable for any loss or damage arising
            from the use of, or reliance on, the information on this website. This doesn't limit our
            responsibilities under a written contract with you.
          </p>

          <h2>Governing law</h2>
          <p>This website and this disclaimer are governed by the laws of British Columbia and the laws of Canada that apply there.</p>

          <h2>Questions</h2>
          <p>
            Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call{' '}
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>. See also our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
