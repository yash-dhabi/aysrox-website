export function ClosingSection() {
  return (
    <section id="closing" className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-emerald-50/70 via-green-50/50 to-slate-50/50">
      {/* Chat-themed Background */}
      <div className="absolute inset-0 z-0">
        {/* Chat bubbles */}
        <div className="absolute top-20 right-20 w-24 h-24 md:w-32 md:h-32 bg-green-200/30 rounded-3xl animate-bounce-slow [animation-delay:0s]" />
        <div className="absolute top-32 right-8 w-16 h-16 md:w-20 md:h-20 bg-emerald-100/40 rounded-2xl animate-pulse [animation-delay:1s]" />
        <div className="absolute bottom-24 left-24 w-20 h-20 md:w-28 md:h-28 bg-blue-200/30 rounded-full animate-float [animation-delay:0.5s]" />
        <div className="absolute bottom-32 left-12 w-12 h-12 md:w-16 md:h-16 bg-green-100/50 rounded-xl shadow-sm animate-pulse-slow [animation-delay:2s]" />
        
        {/* WhatsApp-style speech bubble */}
        <div className="absolute top-1/2 left-10 w-32 h-24 md:w-40 md:h-28 bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-2xl animate-slide-in-left skew-x-[-10deg] [animation-delay:1.5s]" />
        
        {/* Floating message icon */}
        <div className="absolute bottom-20 right-32 w-16 h-16 md:w-20 md:h-20 text-green-400 animate-spin-slow [animation-delay:0.8s]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-width max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main Heading with chat accent */}
          <div className="inline-flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/25">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-7 md:h-7">
                <path d="M20 2H4c-1.1 0-1.9.7-1.9 1.9v12.8c0 1.1.8 2.1 1.9 2.1h4.3l4.2 4.2 4.2-4.2H20c1.1 0 2-.9 2-2.1V3.9C22 2.7 21.1 2 20 2zm-9.5 13.5h-3v-3h3v3zm3-3h-3V7h3v5z"/>
              </svg>
            </div>
            {/* <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-gray-900 via-emerald-900 to-slate-900 bg-clip-text text-transparent leading-tight tracking-tight">
              Closing
            </h2> */}
          </div>
          
          {/* Subtitle with message theme */}
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16 tracking-wide">
            We care about work that people rely on, because unclear decisions create real consequences.
          </p>
          
          {/* Chat CTA */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17l-5-5 1.41-1.41L12 14.17l6.59-6.59L19 8l-7 7z"/>
              </svg>
            </div>
            <span className="text-lg md:text-xl font-semibold text-foreground/90 tracking-wide">
              Ready to start a conversation?
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes slide-in-left {
          0% { transform: translateX(-100%) skewX(-10deg); opacity: 0; }
          100% { transform: translateX(0) skewX(-10deg); opacity: 1; }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 2s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
      `}</style>
    </section>
  );
}
