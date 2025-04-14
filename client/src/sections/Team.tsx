const Team = () => {
  const teamMembers = [
    {
      name: "Mohamed Sbeinati",
      role: "Developer",
      description: "Hardware, built website, full project collaboration.",
      image: "/src/Mohamed.jpeg"
    },
    {
      name: "Matteo Guzzi",
      role: "Developer",
      description: "Documentation, feedback, design, full project collaboration.",
      image: "/src/Matteo.jpg"
    },
    {
      name: "Paul Dietz",
      role: "Supervisor & Technical Guidance",
      description: "Distinguished Engineer in Residence, University of Toronto. Provided technical guidance and project oversight.",
      image: "/src/Paul.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background/80 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Our Team</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">The creative minds behind TouchLink</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card relative rounded-xl overflow-hidden shadow-glow reveal">
              <div className="aspect-w-1 aspect-h-1 bg-primary/10">
                <img 
                  src={member.image} 
                  alt={`${member.name}'s photo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-5 text-center">
                <h3 className="font-heading font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-secondary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><i className="fab fa-github"></i></a>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
