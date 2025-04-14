const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-lighter">
        {/* This would be replaced with a real background image if provided */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-dark opacity-70"></div>
      </div>
      
      {/* Light particles effect container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" id="particles-container"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-light mb-4 tracking-tight">
            Touch<span className="text-secondary">Link</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-light-dark mb-8">Where Human Touch Powers Light</p>
          <p className="text-light-darker max-w-2xl mx-auto mb-12 leading-relaxed">
            An interactive public installation that brings people together through the power of touch. When two people connect, they create a stunning display of light and color.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#about" className="px-8 py-3 bg-primary hover:bg-primary-light transition-all duration-300 rounded-md text-light font-accent font-medium shadow-glow">Learn More</a>
            <a href="#how-it-works" className="px-8 py-3 bg-dark-medium border border-secondary hover:bg-dark-light transition-all duration-300 rounded-md text-secondary font-accent font-medium">How It Works</a>
          </div>
        </div>
      </div>
      
      {/* Stylized wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#1e1e1e" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,170.7C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
