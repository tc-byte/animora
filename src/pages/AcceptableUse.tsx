import { LegalPage, LegalSection } from "@/components/LegalPage";

const AcceptableUsePage = () => (
  <LegalPage title="Acceptable Use Policy" lastUpdated="April 2026">
    <LegalSection title="Prohibited Activities">
      <p>The following are strictly prohibited when using Animora:</p>
      <ul className="space-y-2.5 mt-3">
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Infringing intellectual property rights</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Generating illegal or harmful content</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Creating NSFW content</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>AI jailbreaking or prompt injection attacks</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Credit system circumvention</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Reverse engineering Animora software</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Account sharing or reselling access</li>
        <li className="flex items-start gap-2.5"><span className="text-primary/40 mt-1 text-[8px]">●</span>Harassment of other users</li>
      </ul>
    </LegalSection>
    <LegalSection title="Enforcement">
      <p>Violations result in immediate suspension. Report abuse: abuse@animora.ai</p>
    </LegalSection>
  </LegalPage>
);

export default AcceptableUsePage;
