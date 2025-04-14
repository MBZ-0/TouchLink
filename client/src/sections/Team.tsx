const Team = () => {
  const teamMembers = [
    {
      name: "Placeholder Student",
      role: "Developer & Hardware Integration",
      description: "Responsible for programming the microcontrollers and integrating the hardware components."
    },
    {
      name: "Placeholder Student",
      role: "User Testing & Documentation",
      description: "Leads the user testing process and maintains project documentation and research."
    },
    {
      name: "Placeholder Professor",
      role: "Supervisor & Technical Guidance",
      description: "Provides project oversight, technical guidance, and academic supervision."
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark-lighter relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-light mb-3">Our Team</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-light-dark max-w-xl mx-auto">The creative minds behind TouchLink</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-dark relative rounded-xl overflow-hidden shadow-glow reveal">
              <div className="aspect-w-1 aspect-h-1 bg-primary/10">
                <div className="w-full h-full flex items-center justify-center text-primary/30">
                  <i className="fas fa-user-circle text-6xl"></i>
                </div>
              </div>
              
              <div className="p-5 text-center">
                <h3 className="font-heading font-bold text-light text-lg">{member.name}</h3>
                <p className="text-secondary text-sm mb-3">{member.role}</p>
                <p className="text-light-darker text-sm">{member.description}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="text-light-dark hover:text-secondary transition-colors"><i className="fab fa-github"></i></a>
                  <a href="#" className="text-light-dark hover:text-secondary transition-colors"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-light-dark hover:text-secondary transition-colors"><i className="fas fa-envelope"></i></a>
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
