const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <a href="#hero" className="text-2xl font-heading font-bold text-light mb-4 md:mb-0">
              Touch<span className="text-secondary">Link</span>
            </a>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#about" className="text-light-dark hover:text-secondary transition-colors">About</a>
              <a href="#how-it-works" className="text-light-dark hover:text-secondary transition-colors">How It Works</a>
              <a href="#design" className="text-light-dark hover:text-secondary transition-colors">Design</a>
              <a href="#timeline" className="text-light-dark hover:text-secondary transition-colors">Timeline</a>
              <a href="#team" className="text-light-dark hover:text-secondary transition-colors">Team</a>
              <a href="#contact" className="text-light-dark hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-dark-medium pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-light-darker text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} TouchLink | University of Toronto CSC490 Capstone Project
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-light-dark hover:text-secondary transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-light-dark hover:text-secondary transition-colors text-sm">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
