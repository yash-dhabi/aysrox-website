import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "R&D-Driven Companies & Deep-Tech Startups",
    description: "For teams building AI, biotech, climate, healthtech, mobility, robotics, and other frontier technologies.",
    points: [
      "Competitive grants and innovation challenge proposals",
      "Technical and regulatory narratives for partners",
      "Pilot and evaluation plan design"
    ]
  },
  {
    title: "Faculty, PIs & Research Groups",
    description: "For academic and clinical leaders responsible for labs, centers, and high-stakes projects.",
    points: [
      "Competitive grant and project proposal development",
      "High-quality manuscripts and research communication",
      "Impact, risk, ethics, and reviewer-aligned framing"
    ]
  },
  {
    title: "PhD, Postdoctoral & Master’s Researchers",
    description: "For emerging researchers who want more than just “getting it done.”",
    points: [
      "Ethical thesis and dissertation structure and refinement",
      "Manuscripts derived from completed research",
      "Fellowship and next-step research documentation"
    ]
  },
  {
    title: "NGOs, Policy Teams & CSR Organizations",
    description: "For organizations that must communicate credible, evidence-based impact.",
    points: [
      "Policy briefs and white papers",
      "Impact evaluations and donor-facing reports",
      "Alignment with SDGs and societal impact priorities"
    ]
  },
  {
    title: "Global Teams Entering New Regions",
    description: "For international teams engaging with India or other regional contexts.",
    points: [
      "Localization of proposals and research plans",
      "Context-specific ethics and impact framing",
      "Joint-call and collaborative documentation support"
    ]
  }
];

export function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            AysRox supports serious R&D teams across disciplines, sectors, and regions.
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
