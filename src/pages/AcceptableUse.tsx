import { LegalPage, LegalSection } from "@/components/LegalPage";

const AcceptableUsePage = () => (
  <LegalPage title="Animora — Acceptable Use Policy" lastUpdated="June 2025">
    <LegalSection title="Prohibited Activities">
      <p>The following are strictly prohibited when using Animora:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Infringing intellectual property rights</li>
        <li>Generating illegal or harmful content</li>
        <li>Creating NSFW content</li>
        <li>AI jailbreaking or prompt injection attacks</li>
        <li>Credit system circumvention</li>
        <li>Reverse engineering Animora software</li>
        <li>Account sharing or reselling access</li>
        <li>Harassment of other users</li>
      </ul>
    </LegalSection>
    <LegalSection title="Enforcement">
      <p>Violations result in immediate suspension. Report abuse: abuse@animora.ai</p>
    </LegalSection>
  </LegalPage>
);

export default AcceptableUsePage;
