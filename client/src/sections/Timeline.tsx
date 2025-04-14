const Timeline = () => {
  const timelineItems = [
    {
      title: "Project Proposal",
      description: "Initial concept development and feasibility analysis. Team formation and project planning with faculty supervision.",
      date: "September 2023",
      icon: "fa-file-alt",
      iconText: "Proposal Documentation",
      right: true
    },
    {
      title: "Prototype Development",
      description: "Building the initial hardware setup, programming the microcontrollers, and designing the LED display pattern.",
      date: "November 2023",
      icon: "fa-microchip",
      iconText: "Prototype Development",
      right: false
    },
    {
      title: "User Testing",
      description: "Conducting tests with volunteers to refine the interaction experience and improve the visual display.",
      date: "February 2024",
      icon: "fa-users-cog",
      iconText: "User Testing Session",
      right: true
    },
    {
      title: "Final Demo",
      description: "Public installation at Love Park, Toronto, showcasing the completed project to the community.",
      date: "April 2024",
      icon: "fa-star",
      iconText: "Final Demo Presentation",
      right: false
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-light mb-3">Project Timeline</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-light-dark max-w-xl mx-auto">Our journey from concept to completion</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline connector line */}
          <div className="hidden md:block timeline-line"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="relative mb-16 md:mb-24 reveal">
              <div className="hidden md:block timeline-dot" style={{ top: '24px' }}></div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {item.right ? (
                  <>
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-heading font-bold text-light mb-2">{item.title}</h3>
                      <p className="text-light-darker">{item.description}</p>
                      <p className="text-secondary mt-2 text-sm">{item.date}</p>
                    </div>
                    
                    <div className="md:w-1/2 order-1 md:order-2">
                      <div className="bg-dark-lighter rounded-lg overflow-hidden shadow-md aspect-w-16 aspect-h-9">
                        <div className="w-full h-full bg-dark-lighter flex items-center justify-center">
                          <div className="text-center text-light-darker">
                            <i className={`fas ${item.icon} text-3xl mb-2 text-primary/40`}></i>
                            <p className="text-sm font-heading">{item.iconText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 order-2">
                      <div className="bg-dark-lighter rounded-lg overflow-hidden shadow-md aspect-w-16 aspect-h-9">
                        <div className="w-full h-full bg-dark-lighter flex items-center justify-center">
                          <div className="text-center text-light-darker">
                            <i className={`fas ${item.icon} text-3xl mb-2 text-primary/40`}></i>
                            <p className="text-sm font-heading">{item.iconText}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:text-left order-1">
                      <h3 className="text-xl font-heading font-bold text-light mb-2">{item.title}</h3>
                      <p className="text-light-darker">{item.description}</p>
                      <p className="text-secondary mt-2 text-sm">{item.date}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
