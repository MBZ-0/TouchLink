const Design = () => {
  const visualElements = [
    {
      icon: "fa-building",
      title: "Toronto Landmarks",
      description: "CN Tower and Rogers Centre silhouettes create a recognizable skyline"
    },
    {
      icon: "fa-heart",
      title: "Glowing Heart",
      description: "Central motif with concentric circles that ripple outward when activated",
      iconClass: "text-accent"
    },
    {
      icon: "fa-users",
      title: "Human Connection",
      description: "A couple holding hands under a tree symbolizes unity and connection"
    },
    {
      icon: "fa-wave-square",
      title: "Light Waves",
      description: "Flowing patterns beneath the figures represent energy and connection"
    }
  ];

  return (
    <section id="design" className="py-20 bg-background/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary opacity-5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary opacity-5 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">LED Panel Design</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">Our minimalist dot-matrix design celebrates Toronto's iconic skyline and human connection</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 reveal">
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary/30 bg-card p-2">
              <div className="w-full h-full bg-background/50 rounded flex items-center justify-center relative">
                <img
                  src="/490_sketch.png"
                  alt="LED Panel Design Sketch"
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Visual Elements</h3>
            <ul className="space-y-4">
              {visualElements.map((element, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <i className={`fas ${element.icon} ${element.iconClass || 'text-secondary'} mt-1`}></i>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{element.title}</h4>
                    <p className="text-muted-foreground text-sm">{element.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
