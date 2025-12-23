export function FitCheckSection() {
  return (
    <section id="fit-check" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-width relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Quick Fit Check</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-foreground max-w-3xl">
          <li>You are unsure how to frame the problem clearly</li>
          <li>You have evidence or data but limited confidence in the conclusion</li>
          <li>You need an independent second opinion</li>
          <li>You must decide under pressure and cannot afford guesswork</li>
        </ul>
        <p className="mt-6 text-primary-foreground">
          If you are unsure, send a short description of your situation. We will tell you honestly whether we can help.
        </p>
      </div>
    </section>
  );
}
