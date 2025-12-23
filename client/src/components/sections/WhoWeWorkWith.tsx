import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "Industry R&D Teams",
    description:
      "Engineering and research teams developing, evaluating, or scaling technologies where performance, safety, and real-world effectiveness determine commercial success.",
    points: [
      "Evidence-based go/no-go decisions for deployments",
      "Risk assessment before scaling or capital commitment",
      "Technical claims validation and defensibility",
    ],
  },
  {
    title: "Deep Tech & AI Startups",
    description:
      "Founders building novel AI systems, biotech solutions, or deep-tech products who need credible third-party evaluation before investor pitches, partnerships, or product launches.",
    points: [
      "Model and claims audit for investor confidence",
      "Benchmark validation and comparative positioning",
      "Risk-aware narratives that maintain credibility",
    ],
  },
  {
    title: "Academic Faculty and Research Leaders",
    description:
      "Principal investigators and research group leads managing high-stakes projects competing for funding, publication, and institutional recognition.",
    points: [
      "Study design rigor and reviewer alignment",
      "Evidence integrity and methods documentation",
      "Decision memos and ethics clarity",
    ],
  },
  {
    title: "NGOs & Think Tanks",
    description:
      "Organizations designing policy recommendations, social impact programs, and evidence-based interventions where stakeholder trust and defensible reasoning are essential.",
    points: [
      "Evidence synthesis and policy clarity",
      "Impact claims validation and accountability",
      "Stakeholder communication and trust-building",
    ],
  },
  {
    title: "Early-Career Researchers",
    description:
      "PhD candidates, postdocs, and early-stage researchers shaping dissertation work, publications, and career-defining projects with limited feedback infrastructure.",
    points: [
      "Research structure and ethical coherence",
      "Writing clarity and reader comprehension",
      "Publication strategy and venue alignment",
    ],
  },
  {
    title: "R&D Labs",
    description:
      "Corporate, government, and institutional research laboratories managing complex technical projects where independent evaluation prevents costly technical or strategic errors.",
    points: [
      "Technical feasibility and methodology review",
      "Project timeline and resource risk assessment",
      "Milestone validation and decision gates",
    ],
  },
];

export function WhoWeWorkWith() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % audiences.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoAdvance]);

  return (
    <section id="who-we-work-with" className="section-padding bg-white">
      <div className="container-width">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Decision contexts where clarity matters more than speed or optimism.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left - Zigzag Timeline */}
          <div className="lg:col-span-2">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent to-primary" />

                <div className="space-y-12 md:space-y-16">
                  {audiences.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const isActive = activeIndex === index;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                      >
                        {/* Content Box */}
                        <motion.div
                          onClick={() => {
                            setActiveIndex(index);
                            setAutoAdvance(false);
                          }}
                          className={`w-5/12 cursor-pointer transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-60 hover:opacity-80"
                          }`}
                          initial={{ x: isLeft ? -20 : 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div
                            className={`p-4 md:p-5 rounded-lg border-2 transition-all duration-300 ${
                              isActive
                                ? "bg-primary text-white border-primary shadow-lg scale-105"
                                : "bg-white text-foreground border-primary/20 hover:border-primary/40"
                            }`}
                          >
                            <p className={`text-xs md:text-sm font-bold ${isActive ? "text-white" : "text-primary"}`}>
                              {item.title}
                            </p>
                          </div>
                        </motion.div>

                        {/* Center Circle Indicator */}
                        <motion.div
                          className="absolute left-1/2 top-3 -translate-x-1/2 z-20"
                          animate={{
                            scale: isActive ? 1.3 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={`flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full border-4 font-bold text-sm md:text-base transition-all duration-300 ${
                              isActive
                                ? "bg-primary border-primary text-white shadow-lg"
                                : "bg-white border-primary text-primary hover:border-accent"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Progress Dots - Mobile/Tablet */}
            <div className="flex gap-2 justify-center mt-8 lg:hidden">
              {audiences.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoAdvance(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary w-6" : "bg-primary/20 w-2 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right - Description Panel */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:sticky lg:top-24 bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8 rounded-xl border border-primary/20"
          >
            <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
              {audiences[activeIndex].title}
            </h3>
            <p className="text-muted-foreground mb-5 leading-relaxed text-xs md:text-sm">
              {audiences[activeIndex].description}
            </p>
            <ul className="space-y-2 md:space-y-3">
              {audiences[activeIndex].points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-xs"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Progress Dots - Desktop */}
            <div className="hidden lg:flex gap-2 justify-center mt-6">
              {audiences.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoAdvance(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary w-6" : "bg-primary/20 w-2 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
