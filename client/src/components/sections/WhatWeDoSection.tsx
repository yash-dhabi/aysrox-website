export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-padding bg-white">
      <div className="container-width">
        <div className="mb-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg">
            Aysrox Solutions provides independent research, evaluation, and second-opinion support at the intersection of people, systems, and decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/20 p-6 rounded-xl border">
            <h3 className="font-bold mb-2">We help clients:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Make the actual problem explicit</li>
              <li>Separate facts, assumptions, and interpretations</li>
              <li>Clarify what is known, unknown, and uncertain</li>
              <li>Structure choices so tradeoffs are visible and defensible</li>
              <li>Document limits so decisions can be explained and reviewed later</li>
            </ul>
          </div>

          <div className="bg-muted/20 p-6 rounded-xl border">
            <h3 className="font-bold mb-2">Focus on real decisions:</h3>
            <p className="text-muted-foreground">
              We support decisions in research, development, funding, deployment, and policy. Documentation is produced only when it directly supports a decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
