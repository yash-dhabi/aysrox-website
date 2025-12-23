import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function CoreSection() {
  return (
    <>
      {/* Programs Section - Core Capabilities */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container-width relative z-10">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-12 text-secondary text-center">
              Core Capabilities
            </h3>
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
                  <p className="text-sm text-primary-foreground/70">
                    {service.description}
                  </p>
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
                  <p className="text-sm text-primary-foreground/70">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
