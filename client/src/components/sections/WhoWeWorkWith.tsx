import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "Industry Research and Development Teams",
    description:
      "Teams developing, evaluating, or deploying systems where human use, safety, reliability, or adoption determines success.",
    points: [
      "Build, pilot, deploy, pause, or revise decisions",
      "Pre-commitment evaluations and decision readiness",
      "Operational readiness and adoption risk checks",
    ],
  },
  {
    title: "Technology and Deep Research Startups",
    description:
      "Founders and technical leaders working with advanced technologies who need independent evaluation before claims, capital, pilots, or scaling.",
    points: [
      "Audit-style reviews of models, evidence, and claims",
      "Pilot evaluation and deployment guidance",
      "Defensible narratives for investors and partners",
    ],
  },
  {
    title: "Academic Faculty and Research Leaders",
    description:
      "Principal investigators and group leaders responsible for high-stakes projects and competitive funding.",
    points: [
      "Clarity, rigor, and reviewer alignment",
      "Study design, methods, and evidence-to-claim checks",
      "Decision memos without altering scientific intent",
    ],
  },
  {
    title: "Early-Career Researchers",
    description:
      "Doctoral, postdoctoral, and master’s researchers structuring thesis work, publications, and career-critical decisions.",
    points: [
      "Ethical structure and chapter planning",
      "Clarity and readability refinement",
      "Publication pathways from completed work",
    ],
  },
  {
    title: "Public-Interest, Policy, and Non-Profit Organizations",
    description:
      "Organizations communicating evidence, impact, and tradeoffs to funders, regulators, and the public.",
    points: [
      "Evidence clarity and defensible reasoning",
      "Accountability and transparency over persuasion",
      "Impact framing and reviewer expectations",
    ],
  },
  {
    title: "Leadership Teams Seeking an Independent Second Opinion",
    description:
      "Decision-makers with internal analyses who need an unbiased external perspective before committing resources or making claims.",
    points: [
      "Pre-commitment evaluations and decision memos",
      "Build, pilot, deploy, or pause recommendations",
      "Documented limits and defensibility",
    ],
  },
];

export function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Decision contexts where clarity matters more than speed or optimism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                <span className="text-accent mr-2">{index + 1}.</span>
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
