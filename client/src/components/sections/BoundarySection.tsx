import { useRef, useEffect, useState } from "react";
import styles from "./BoundarySection.module.css";

export function BoundarySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && bgRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;

        // Parallax effect: move background based on scroll
        if (sectionTop < windowHeight && sectionTop > -rect.height) {
          const newOffset = sectionTop * 0.5;
          bgRef.current.style.setProperty("--parallax-offset", `${newOffset}px`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="boundary"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        ref={bgRef}
        className={`absolute inset-0 z-0 ${styles.boundaryBg} ${styles.parallaxTransform}`}
      >
        {/* Low Brightness Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      {/* Content */}
      <div className="container-width max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Our Boundary</h2>

        {/* Three Bullet Points */}
        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="h-2 w-2 rounded-full bg-accent mt-3 shrink-0" />
            <p className="text-lg md:text-xl text-gray-200">We do not promise certainty</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-2 w-2 rounded-full bg-accent mt-3 shrink-0" />
            <p className="text-lg md:text-xl text-gray-200">We do not remove risk</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-2 w-2 rounded-full bg-accent mt-3 shrink-0" />
            <p className="text-lg md:text-xl text-gray-200">We do not guarantee outcomes</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-500 to-transparent my-12" />

        {/* Closing Statement */}
        <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed">
          We help you understand what you are facing and make defensible decisions despite uncertainty.
        </p>
      </div>
    </section>
  );
}
