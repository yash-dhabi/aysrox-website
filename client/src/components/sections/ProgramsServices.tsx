import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const flagshipPrograms = [
  {
    title: "Funding Win-Rate Accelerator™",
    description: "A structured system to increase your funding success across multiple calls.",
    features: [
      "Proposal audits to identify trust gaps",
      "Mapping research to suitable calls",
      "Fundable narratives & risk strategies"
    ]
  },
  {
    title: "Publication & Research Communication Studio™",
    description: "For researchers aiming for respected journals and conferences.",
    features: [
      "Manuscript development",
      "Clarity & coherence enhancement",
      "Figures & narrative alignment"
    ]
  },
  {
    title: "Thesis & Early Research Excellence Track™",
    description: "Ethical, structured support for PhD, postdoctoral, and serious master’s research.",
    features: [
      "Thesis structure & chapter planning",
      "Clarity and readability enhancement",
      "Publication pathways"
    ]
  },
  {
    title: "Regional Research & Collaboration Gateway™",
    description: "For global teams building research and innovation in new regions.",
    features: [
      "Adapting proposals to regional requirements",
      "Local ethics & impact alignment",
      "Joint-call documentation"
    ]
  }
];

const coreServices = [
  {
    title: "Grant & Proposal Development",
    description: "Support for national, regional, and global calls in health, AI, climate, etc."
  },
  {
    title: "Technical Writing & Editing",
    description: "Reviewer-ready manuscripts, reports, and white papers."
  },
  {
    title: "Research Strategy & Consulting",
    description: "Aligning your R&D with funding trends and societal impact."
  },
  {
    title: "Capacity Building Workshops",
    description: "Training teams on grant writing, publishing, and research ethics."
  }
];

export function ProgramsServices() {
  return (
    <section id="programs-services" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Programs & Services</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Outcome-oriented programs with supporting services that people actually search for—without compromising ethics or quality.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold mb-8 text-accent text-center">Flagship Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {flagshipPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 border-white/10 text-white h-full hover:bg-white/15 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{program.title}</CardTitle>
                    <CardDescription className="text-primary-foreground/70">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm text-primary-foreground/80">
                      {program.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold mb-8 text-secondary text-center">Core Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/5 p-6 rounded-lg border border-primary-foreground/10"
              >
                <h4 className="font-bold mb-2 text-white">{service.title}</h4>
                <p className="text-sm text-primary-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
