import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery and Alignment",
    description:
      "We understand goals, constraints, and where uncertainty truly sits.",
  },
  {
    number: "02",
    title: "Problem Framing and Structuring",
    description:
      "We make the actual problem explicit and separate facts from assumptions.",
  },
  {
    number: "03",
    title: "Evaluation and Development",
    description:
      "We apply defensible methods suited to the context and audience.",
  },
  {
    number: "04",
    title: "Review and Decision Readiness",
    description:
      "We ensure outputs are clear, limited, and explainable.",
  },
  {
    number: "05",
    title: "Post-Decision Support",
    description:
      "We support revisions, responses, and next steps as needed.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg">
            A collaborative, structured approach to ensure excellence.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border/50 -z-10" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white pt-8 md:pt-0"
              >
                <div className="h-10 w-10 md:h-24 md:w-24 bg-white border-2 border-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-xl md:text-2xl font-bold text-primary shadow-sm z-10 relative">
                  {step.number}
                </div>
                <div className="text-center px-2">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
