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
    <>
      {/* Programs Section - Flagship Programs */}
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
            <h3 className="text-2xl font-serif font-bold mb-12 text-accent text-center">Flagship Programs</h3>
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
        </div>
      </section>

      {/* When to Engage Us Section - Separate Background */}
      <section id="when-to-engage" className="section-padding bg-muted/40 text-foreground relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-primary text-center">When to Engage Us</h3>
            <p className="text-lg text-foreground/90 mb-8 font-medium">
              People typically contact us when:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-0.5">•</span>
                <span className="text-foreground/80 text-base">the problem is unclear or still evolving</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-0.5">•</span>
                <span className="text-foreground/80 text-base">teams disagree on interpretation or next steps</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-0.5">•</span>
                <span className="text-foreground/80 text-base">data or models exist but are hard to trust or explain</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-0.5">•</span>
                <span className="text-foreground/80 text-base">a proposal, paper, product, or policy decision is time-critical</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-0.5">•</span>
                <span className="text-foreground/80 text-base">human use, safety, or adoption is a key risk</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-0.5">•</span>
                <span className="text-foreground/80 text-base">funding, review, or deployment requires defensible reasoning</span>
              </li>
            </ul>
            <p className="text-foreground/70 italic text-base text-center">
              If everything already feels obvious, you may not need us. If it does not, this is exactly our space.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section - Core Capabilities */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container-width relative z-10">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-12 text-secondary text-center">Core Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {coreCapabilities.slice(0, 3).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/5 p-6 rounded-lg border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                >
                  <h4 className="font-bold mb-2 text-white">{service.title}</h4>
                  <p className="text-sm text-primary-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              {coreCapabilities.slice(3).map((service, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-foreground/5 p-6 rounded-lg border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors w-full md:w-1/2 lg:w-1/3"
                >
                  <h4 className="font-bold mb-2 text-white">{service.title}</h4>
                  <p className="text-sm text-primary-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
