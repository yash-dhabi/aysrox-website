import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_scientific_network_background.png";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Scientific Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Global R&D Outcomes Studio
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance text-primary">
            Your Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              R&D Outcomes Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            We help researchers, innovators, companies, and mission-driven organizations turn complex ideas into funded projects, high-impact publications, and scalable real-world solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 text-base shadow-lg shadow-primary/20">
              Book Your Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 text-primary">
              Explore Programs & Services
            </Button>
          </div>

          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
            “Every idea carries a quiet potential. Our work is to give it language, structure, and direction—so it can walk with confidence into the world and become the impact it was meant to be.”
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">What We Focus On</h3>
            <ul className="space-y-4">
              {[
                "Funding-ready proposals & research plans",
                "High-impact manuscripts & ethical thesis support",
                "Responsible AI & research communication",
                "Global & region-specific R&D ecosystems"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="font-medium text-primary/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
