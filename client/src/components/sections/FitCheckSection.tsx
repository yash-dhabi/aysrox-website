export function FitCheckSection() {
  return (
    <section id="fit-check" className="section-padding bg-muted/30">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Quick Fit Check</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl">
          <li>You are unsure how to frame the problem clearly</li>
          <li>You have evidence or data but limited confidence in the conclusion</li>
          <li>You need an independent second opinion</li>
          <li>You must decide under pressure and cannot afford guesswork</li>
        </ul>
        <p className="mt-6 text-muted-foreground">
          If you are unsure, send a short description of your situation. We will tell you honestly whether we can help.
        </p>
      </div>
    </section>
  );
}
