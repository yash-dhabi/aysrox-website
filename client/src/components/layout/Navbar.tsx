import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Who We Work With", href: "#who-we-work-with" },
  { name: "Programs & Services", href: "#programs-services" },
  { name: "Process", href: "#process" },
  { name: "Results", href: "#results" },
  { name: "About", href: "#about" },
  { name: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-border/40 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container-width flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-serif font-bold tracking-tight text-primary flex items-center gap-2"
          onClick={(e) => scrollToSection(e, "#hero")}
        >
          <img src="/logo.png" alt="AysRox Solutions" className="h-12 w-12" />
          AysRox <span className="text-accent">Solutions</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
            onClick={(e) => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Strategy Call
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full mt-4"
                onClick={() => {
                  setIsOpen(false);
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Strategy Call
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
