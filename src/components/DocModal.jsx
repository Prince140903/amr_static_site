import React, { useState } from 'react';

const privacyText = `Privacy Policy for AMR Engineering Works

Effective Date: October 22, 2026 | Website: amrengg.net

1. Introduction

Welcome to AMR Engineering Works ("we," "our," or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at amrengg.net, utilize our engineering and water filtration consultation services, or contact us directly.

2. Company Information

Entity Name: AMR Engineering Works
Office Address: House No: 136 At Dheku, Opp- Hi-tech Radiators Pvt. Ltd., Takai-adoshi Road, Khopoli, Khalapur 410203, Maharashtra, India
Phone: +91 9762666660
Mobile: +91 9823145390, +91 8087444983
Email: info@amrengg.net

3. Information We Collect

Personal Identification Data: Name, business/company name, email address, phone number, and physical mailing address.
Inquiry & Project Details: Technical specifications, project requirements, water treatment inquiries, and any communication you send through our contact forms or emails.
Log and Usage Data: IP address, browser type, operating system, referring URLs, device information, pages viewed, and timestamps when navigating amrengg.net.
Cookies & Tracking Technologies: Standard session cookies and analytics tools to optimize website navigation and user experience.

4. How We Use Your Information

Responding to customer inquiries, quote requests, and providing technical support.
Delivering engineering, drafting, and water filtration system solutions.
Maintaining, operating, and improving our website performance and security.
Complying with applicable legal, accounting, and regulatory obligations in India.

5. Sharing and Disclosure of Information

We do not sell, rent, or trade your personal information. We may share information only under the following circumstances:
Service Providers: Trusted vendors and contractors who assist in website hosting, IT maintenance, and communication delivery under confidentiality agreements.
Legal Requirements: When required by law, subpoena, governmental authority, or judicial proceedings.
Protection of Rights: To enforce our terms, investigate fraud, or protect the safety and property of AMR Engineering Works and our users.

6. Data Security and Retention

We implement appropriate technical, administrative, and physical security measures to safeguard your personal data. We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by applicable statutory and tax regulations.

7. Your Data Protection Rights

Depending on applicable data protection laws, you may have rights including:
Accessing, reviewing, or obtaining a copy of the personal information we hold about you.
Requesting correction of inaccurate or incomplete personal data.
Requesting deletion or restriction of processing of your personal information.

To exercise any of these rights, please contact us at info@amrengg.net.

8. Third-Party Links

Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or policies of external sites.

9. Updates to This Policy

We may update this Privacy Policy periodically to reflect changes in our legal requirements or operational practices. Any updates will be posted on this page with an updated "Effective Date."

10. Contact Us

If you have questions, feedback, or concerns regarding this Privacy Policy, please contact:
AMR Engineering Works, House No: 136 At Dheku, Opp- Hi-tech Radiators Pvt. Ltd., Takai-adoshi Road, Khopoli, Khalapur 410203, India
Email: info@amrengg.net
Phone: +91 9762666660`;

const termsText = `Terms of Use for AMR Engineering Works

Effective Date: October 22, 2026 | Website: amrengg.net

1. Agreement to Terms

These Terms of Use ("Terms") constitute a legally binding agreement between you, whether personally or on behalf of an entity ("you"), and AMR Engineering Works ("we," "us," or "our"), concerning your access to and use of the amrengg.net website as well as any related engineering inquiry channels. By accessing the site, you agree to have read, understood, and agreed to be bound by all of these Terms of Use.

2. About Our Services

AMR Engineering Works specializes in advanced water filtration technology and engineering solutions for municipal, industrial, and agricultural applications. Content provided on this website is for informational purposes and initial business inquiries. Official engineering contracts, product sales, and technical service agreements are subject to separate formal commercial agreements and engineering specifications.

3. Intellectual Property Rights

Unless otherwise indicated, the website, its source code, design, text, graphics, logos, product documentation, and multimedia content are the proprietary property of AMR Engineering Works and are protected by applicable copyright, trademark, and intellectual property laws. You may access the website solely for internal, non-commercial evaluation of our solutions and services.

4. User Representations and Acceptable Use

By using this website, you represent and warrant that:
All information you submit via inquiry forms or contact details is accurate, current, and complete.
You will not access the site through automated or non-human means (bots, scrapers, crawlers).
You will not use the website for any illegal or unauthorized purpose.
You will not attempt to bypass security measures, disrupt server integrity, or transmit malicious code or viruses.

5. Inquiries, Proposals, and Commercial Quotes

Submitting a project inquiry or contact request through amrengg.net does not constitute a binding contract. Any technical quotes, engineering assessments, or pricing estimates provided are subject to formal confirmation and written purchase orders or master service agreements.

6. Disclaimer of Warranties

The website and its materials are provided on an "as-is" and "as-available" basis. While we strive to ensure technical accuracy, AMR Engineering Works makes no express or implied warranties regarding website availability, freedom from errors, or specific performance outcomes resulting solely from informational website content.

7. Limitation of Liability

In no event shall AMR Engineering Works, its partners, engineers, or affiliates be liable for any indirect, consequential, exemplary, incidental, or special damages arising from your access to or inability to use this website.

8. Governing Law and Dispute Resolution

These Terms of Use and your use of the website are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Maharashtra, India.

9. Modifications to Terms

We reserve the right to revise or modify these Terms of Use at any time. Any changes will be indicated by an updated "Effective Date." Continued use of the website following changes constitutes acceptance of the revised Terms.

10. Contact Information

For inquiries regarding these Terms of Use, please reach out to:
AMR Engineering Works, House No: 136 At Dheku, Opp- Hi-tech Radiators Pvt. Ltd., Takai-adoshi Road, Khopoli, Khalapur 410203, Maharashtra, India
Phone: +91 9762666660
Mobile: +91 9823145390, +91 8087444983
Email: info@amrengg.net`;

export default function DocModal({ open, title, onClose }) {
  if (!open) return null;
  const text = title === 'Privacy Policy' ? privacyText : termsText;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 text-2xl leading-none">&times;</button>
        </div>
        <div className="overflow-y-auto px-6 py-4 whitespace-pre-wrap text-sm text-slate-700">
          {text}
        </div>
      </div>
    </div>
  );
}
