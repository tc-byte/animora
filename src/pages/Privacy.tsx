import { LegalPage, LegalSection } from "@/components/LegalPage";

const PrivacyPage = () => (
  <LegalPage title="Animora — Privacy Policy" lastUpdated="June 2025">
    <LegalSection number="1" title="Introduction">
      <p>Animora is committed to your privacy. We comply with the Kenya Data Protection Act 2019 and GDPR for EU users.</p>
    </LegalSection>
    <LegalSection number="2" title="Data We Collect">
      <p>Account data (email, name, hashed password). Usage data (features used, credits consumed). Project data (your creative files, stored securely). Payment data (processed by third parties — we never store card details). Technical data (IP, browser, device, referrer).</p>
    </LegalSection>
    <LegalSection number="3" title="How We Use It">
      <p>To provide and improve the Service. To process payments. To send transactional emails. To send product updates (consent required, opt-out any time). To prevent abuse. To comply with law.</p>
    </LegalSection>
    <LegalSection number="4" title="Data Sharing">
      <p>We do not sell your data. We share only with: service providers (infrastructure, AI processing, payments); legal authorities when required; buyers in an acquisition (with notice).</p>
    </LegalSection>
    <LegalSection number="5" title="Your Rights">
      <p>Access, correct, delete, export, or opt out. Email: privacy@animora.ai</p>
    </LegalSection>
    <LegalSection number="6" title="Retention">
      <p>Account data: active period + 30 days post-deletion. Payment records: 7 years. Waitlist emails: until you unsubscribe or we launch.</p>
    </LegalSection>
    <LegalSection number="7" title="Children">
      <p>Service not for under-16s. We delete any such data discovered.</p>
    </LegalSection>
    <LegalSection number="8" title="Security">
      <p>Industry-standard encryption, access controls, regular reviews.</p>
    </LegalSection>
    <LegalSection number="9" title="Contact">
      <p>privacy@animora.ai · Nairobi, Kenya</p>
    </LegalSection>
  </LegalPage>
);

export default PrivacyPage;
