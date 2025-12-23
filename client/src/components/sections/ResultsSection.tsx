import { Button } from "@/components/ui/button";

export function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-muted/30">
      <div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Results That Matter
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              $50M+
            </div>
            <p className="text-muted-foreground font-medium">
              In Research Funding Facilitated
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              500+
            </div>
            <p className="text-muted-foreground font-medium">
              High-Impact Publications
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <div className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-2">
              30+
            </div>
            <p className="text-muted-foreground font-medium">
              Global Markets Entered
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-linear-to-r from-primary via-primary to-accent text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to elevate your R&D outcomes?
          </h3>
          <p className="mb-8 text-primary-foreground/80">
            Join the researchers and innovators who trust AysRox to articulate
            their vision.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-bold cursor-pointer"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
