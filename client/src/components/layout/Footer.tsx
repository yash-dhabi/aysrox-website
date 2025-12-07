export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tight mb-4">
              AysRox <span className="text-accent">Solutions</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Global R&D outcomes studio helping researchers and innovators turn complex ideas into funded projects and real-world impact.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          &copy; {new Date().getFullYear()} AysRox Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
