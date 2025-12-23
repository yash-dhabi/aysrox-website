export function WhenToEngageSection() {
  return (
    <section id="when-to-engage" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">When to Engage Us</h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-muted-foreground">
          <li>The problem is unclear or still evolving</li>
          <li>Teams disagree on interpretation or next steps</li>
          <li>Data or models exist but are hard to trust or explain</li>
          <li>A proposal, paper, product, or policy decision is time-critical</li>
          <li>Human use, safety, or adoption is a key risk</li>
          <li>Funding, review, or deployment requires defensible reasoning</li>
        </ul>
        <p className="mt-6 text-muted-foreground">
          If everything already feels obvious, you may not need us. If it does not, this is exactly our space.
        </p>
      </div>
    </section>
  );
}
