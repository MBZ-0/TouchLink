import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full bg-dark-lighter bg-opacity-80 backdrop-blur-md z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`} id="navbar">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <span className="text-secondary font-heading font-bold text-lg md:text-xl">Touch<span className="text-accent">Link</span></span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium">About</a>
          <a href="#how-it-works" className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium">How It Works</a>
          <a href="#design" className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium">Design</a>
          <a href="#timeline" className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium">Timeline</a>
          <a href="#team" className="text-light hover:text-secondary transition-colors duration-300 text-sm font-medium">Team</a>
          <a href="#contact" className="px-4 py-2 bg-primary hover:bg-primary-light rounded-md text-light font-accent text-sm transition-all duration-300 shadow-glow">Contact Us</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-light flex items-center" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-dark-light ${isMenuOpen ? 'h-auto' : 'h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#about" className="text-light hover:text-secondary transition-colors duration-300 py-2 text-center" onClick={closeMenu}>About</a>
          <a href="#how-it-works" className="text-light hover:text-secondary transition-colors duration-300 py-2 text-center" onClick={closeMenu}>How It Works</a>
          <a href="#design" className="text-light hover:text-secondary transition-colors duration-300 py-2 text-center" onClick={closeMenu}>Design</a>
          <a href="#timeline" className="text-light hover:text-secondary transition-colors duration-300 py-2 text-center" onClick={closeMenu}>Timeline</a>
          <a href="#team" className="text-light hover:text-secondary transition-colors duration-300 py-2 text-center" onClick={closeMenu}>Team</a>
          <a href="#contact" className="px-4 py-2 bg-primary hover:bg-primary-light rounded-md text-light font-accent text-center my-2 transition-all duration-300" onClick={closeMenu}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
