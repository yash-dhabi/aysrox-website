import { motion } from "framer-motion";
import { Building2, Cpu, FlaskConical, Globe2, GraduationCap, Users2 } from "lucide-react";

const trustedCategories = [
  {
    icon: Building2,
    title: "Academic & Clinical Institutions",
    description: "Universities, institutes, and medical research centers that need rigorous, reviewer-ready documentation and communication."
  },
  {
    icon: Cpu,
    title: "Deep-Tech & AI Startups",
    description: "Early and growth-stage ventures using AI, biotech, climate tech, robotics, and other advanced technologies."
  },
  {
    icon: FlaskConical,
    title: "Corporate R&D Labs",
    description: "Internal teams turning research into deployable products, pilots, and scalable solutions across domains."
  },
  {
    icon: Globe2,
    title: "NGOs, Think Tanks & Policy",
    description: "Organizations communicating evidence, impact, and policy insights to funders, regulators, and the public."
  },
  {
    icon: Users2,
    title: "Research Consortia",
    description: "Multi-partner, multi-region collaborations aligning science, technology, ethics, and societal impact."
  },
  {
    icon: GraduationCap,
    title: "Early-Career Researchers",
    description: "PhD, postdoctoral, and master’s researchers building strong academic or industry careers with robust outputs."
  }
];

export function TrustSection() {
  return (
    <section id="trust" className="section-padding bg-white relative">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Teams Advancing R&D</h2>
          <p className="text-muted-foreground text-lg">
            We work with organizations and individuals who are serious about research, innovation, and real-world outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustedCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium text-primary/80">
            Our work is globally oriented with region-specific knowledge, including Indian and Global South funding ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
}
