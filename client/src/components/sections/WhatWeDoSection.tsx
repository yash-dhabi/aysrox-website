export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-width relative z-10">
        <div className="mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">What We Provide</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-primary-foreground leading-relaxed">
              Aysrox Solutions provides independent research and evaluation
              support where people, systems, and decisions meet. We focus on
              clear reasoning, defensible methods, and readable outputs that can
              be used immediately.
            </p>

            <p className="text-lg text-primary-foreground leading-relaxed">
              Our work is informed by peer-reviewed research, applied R&D
              experience, and standards used in scientific publishing and
              safety-critical systems. Our work supports real decisions in
              research, development, and operational contexts. Common
              deliverables include scoped reviews, decision memos, study or
              analysis plans, and structured recommendations.
            </p>
            
            <div className="bg-primary-foreground/10 p-6 rounded-xl border border-primary-foreground/20 max-w-2xl">
              <h3 className="font-bold text-secondary mb-4">Common deliverables include:</h3>
              <ul className="list-disc list-inside space-y-2 text-primary-foreground">
                <li>Scoped reviews</li>
                <li>Decision memos</li>
                <li>Study or analysis plans</li>
                <li>Structured recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
