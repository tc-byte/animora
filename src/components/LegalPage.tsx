import { Link } from "react-router-dom";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalPage = ({ title, lastUpdated, children }: LegalPageProps) => (
  <div className="min-h-screen bg-background pt-24">
    <div className="max-w-3xl mx-auto py-24 px-6">
      <Link to="/" className="text-sm text-primary hover:underline mb-8 inline-block">← Back to home</Link>
      <h1 className="text-4xl font-light text-foreground mb-4">{title}</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: {lastUpdated}</p>
      <div className="space-y-8">{children}</div>
    </div>
  </div>
);

export const LegalSection = ({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-sm uppercase tracking-[0.15em] text-primary mt-12 mb-4">
      {number && <span>{number}. </span>}{title}
    </h2>
    <div className="text-muted-foreground leading-relaxed text-sm space-y-3">{children}</div>
  </div>
);
