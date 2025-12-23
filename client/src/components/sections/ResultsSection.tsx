import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-muted/30">
      <div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Results That Matter
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <Counter end={2} duration={2.5} prefix="$" suffix="M+" />
            <p className="text-muted-foreground font-medium">
              In Research Funding Facilitated
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <Counter end={200} duration={2} suffix="+" />
            <p className="text-muted-foreground font-medium">
              High-Impact Publications
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <Counter end={30} duration={2} suffix="+" />
            <p className="text-muted-foreground font-medium">
              Global Markets Entered
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-linear-to-r from-primary via-primary to-accent text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to elevate your R&D outcomes?
          </h3>
          <p className="mb-8 text-primary-foreground/80">
            Join the researchers and innovators who trust AysRox to articulate
            their vision.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-bold cursor-pointer"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
