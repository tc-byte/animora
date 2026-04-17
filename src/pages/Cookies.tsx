import { LegalPage, LegalSection } from "@/components/LegalPage";

const CookiesPage = () => (
  <LegalPage title="Animora — Cookie Policy" lastUpdated="June 2025">
    <LegalSection title="Essential (always active)">
      <p><strong>session_id</strong> — Login state, session duration.<br /><strong>csrf_token</strong> — Security, session duration.</p>
    </LegalSection>
    <LegalSection title="Functional (improve experience)">
      <p><strong>theme_pref</strong> — Dark/light preference, 1 year.<br /><strong>lang_pref</strong> — Language preference, 1 year.</p>
    </LegalSection>
    <LegalSection title="Analytics (consent only)">
      <p><strong>_ga / _gid</strong> — Google Analytics, 2 years / 24 hours.</p>
    </LegalSection>
    <LegalSection title="Managing Cookies">
      <p>Manage via browser settings or our consent banner. To opt out of analytics: analytics.google.com. Contact: privacy@animora.ai</p>
    </LegalSection>
  </LegalPage>
);

export default CookiesPage;
