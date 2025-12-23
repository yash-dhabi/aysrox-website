import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const flagshipPrograms = [
  {
    title: "Funding Readiness and Strategy Program",
    description:
      "For teams navigating competitive calls and innovation challenges: trust-gap audits, call alignment, positioning, and risk, ethics, and impact framing.",
    features: [
      "Trust-gap audits & call alignment",
      "Positioning and defensible narratives",
      "Risk, ethics, and impact framing",
    ],
  },
  {
    title: "Evidence Communication and Scientific Writing Studio",
    description:
      "For teams communicating evidence to journals, reviewers, leadership, partners, regulators, or funders: document restructuring, argument clarity, and figures, claims, and evidence alignment.",
    features: [
      "Document restructuring and clarity",
      "Figures, claims, and evidence alignment",
      "Reviewer-oriented communication",
    ],
  },
  {
    title: "Thesis and Early Research Excellence Track",
    description:
      "For researchers building durable foundations: ethical structure and chapter planning, clarity and readability refinement, and publication pathways from completed work.",
    features: [
      "Ethical structure and chapter planning",
      "Clarity and readability refinement",
      "Publication pathways",
    ],
  },
  {
    title: "Regional Research and Collaboration Gateway",
    description:
      "For global teams entering new research or funding regions: regional adaptation of proposals, local ethics and impact alignment, and joint-call and consortium documentation.",
    features: [
      "Regional adaptation of proposals",
      "Local ethics & impact alignment",
      "Joint-call & consortium documentation",
    ],
  },
];

const coreCapabilities = [
  {
    title: "Independent Second-Opinion Reviews",
    description:
      "Pre-commitment evaluations, decision memos for leadership or boards, audit-style reviews of evidence, models, or claims, and build, pilot, deploy, or pause recommendations with documented limits.",
  },
  {
    title: "Human-Centered Systems Analysis",
    description:
      "Workflow, task, and role mapping; identification of human risk and failure points; adoption and operational readiness evaluation; human–AI interaction analysis.",
  },
  {
    title: "Human Factors, Ergonomics, and Usability",
    description:
      "Interface and procedure evaluation; workload and attention analysis; comfort, exposure, fatigue, and performance considerations; inclusive and accessibility-aware design inputs.",
  },
  {
    title: "Responsible and Interpretable Machine Learning",
    description:
      "Data readiness and quality assessment; baseline-first modeling and evaluation; interpretability for non-specialist stakeholders; robustness and subgroup checks; uncertainty communication for decision-makers.",
  },
  {
    title: "Research and Evidence Communication Support",
    description:
      "Contribution clarity; study design and methods review; analysis planning and interpretation; evidence-to-claim alignment for papers, reports, and decision memos; thesis and dissertation structuring.",
  },
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
            Outcome-oriented programs with supporting services that people actually search for.
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
          <h3 className="text-2xl font-serif font-bold mb-8 text-secondary text-center">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((service, index) => (
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
