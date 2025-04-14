const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-lighter relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-light mb-3">About TouchLink</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-light-dark">Connecting humans through touch and technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="People connecting through touch" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="reveal">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-light mb-4">A Human Connection Experience</h3>
              <p className="text-light-darker mb-4 leading-relaxed">
                TouchLink is an interactive public installation that celebrates human connection through the power of touch. 
                Using capacitive sensing technology, two individuals can interact with the installation simultaneously.
              </p>
              <p className="text-light-darker mb-6 leading-relaxed">
                When two people each touch a globe and hold hands with each other, they complete an electrical circuit. This 
                connection triggers a stunning LED animation that illuminates a large display panel, creating a visual representation 
                of their shared connection.
              </p>
              <div className="flex items-center space-x-2 text-accent">
                <i className="fas fa-map-marker-alt"></i>
                <p className="font-medium">Love Park, Toronto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
