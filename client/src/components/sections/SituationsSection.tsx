import { motion } from "framer-motion";

const situations = [
    "The problem is not fully defined",
    "Information is incomplete, inconsistent, or hard to interpret",
    "There is partial understanding of the problem, the solution, or both",
    "Time is limited and decisions must be made under pressure",
    "Data exists, but its meaning or quality is unclear",
];

export function SituationsSection() {
  return (
    <section id="situations" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Situations Where Uncertainty Exists
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            These are the conditions where our work is most useful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {situations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl border border-border/50 shadow-sm"
            >
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 md:h-20 md:w-20">
                  <button
                    type="button"
                    aria-label={`Situation ${index + 1}`}
                    className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-primary ring-2 ring-primary/20 bg-white text-primary font-bold text-xl md:text-2xl shadow-sm"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                </div>
                <h3 className="text-foreground font-serif">{item}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
