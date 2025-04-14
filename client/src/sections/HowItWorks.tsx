const HowItWorks = () => {
  const steps = [
    {
      icon: "fa-globe",
      title: "Touch the Globes",
      description: "Each participant touches one of the interactive globes positioned on opposite sides of the installation.",
      number: 1
    },
    {
      icon: "fa-hand-holding",
      title: "Hold Hands",
      description: "The participants hold hands with each other, completing the circuit between the two interaction points.",
      number: 2
    },
    {
      icon: "fa-lightbulb",
      title: "Watch the Show",
      description: "The LED display illuminates with a beautiful animation, visualizing the connection between the participants.",
      number: 3
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-light mb-3">How It Works</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-light-dark max-w-xl mx-auto">Three simple steps to experience the magic of TouchLink</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-dark-lighter rounded-lg p-6 text-center shadow-glow relative overflow-hidden reveal">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary opacity-10 rounded-bl-full"></div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${step.icon} text-secondary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-heading font-bold text-light mb-2">{step.title}</h3>
              <p className="text-light-darker">{step.description}</p>
              <div className="mt-5 text-5xl font-heading font-bold text-primary/20">{step.number}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto reveal">
          <div className="bg-dark-light rounded-xl p-6 md:p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-info-circle text-secondary text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-light mb-2">Technical Details</h4>
                <p className="text-light-darker">
                  TouchLink uses capacitive sensing technology to detect human contact. The installation measures the 
                  electrical conductivity through the participants' bodies. When the circuit is complete, microcontrollers 
                  process the signal and trigger the LED animation sequence on the display panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
