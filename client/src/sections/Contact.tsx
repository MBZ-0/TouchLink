const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background/80 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">Have questions about TouchLink? Get in touch with our team.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <div className="bg-card rounded-xl p-6 md:p-8 h-full shadow-md">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                We'd love to hear from you! Whether you have questions about the project or want to collaborate!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Bahen Centre for Information Technology located at 40 St George Street, Toronto, Ontario, in Room BA3200</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">mohamed.sbeinati@mail.utoronto.ca</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Demo Hours</h4>
                    <p className="text-muted-foreground">April 25, 2025 | 3:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
