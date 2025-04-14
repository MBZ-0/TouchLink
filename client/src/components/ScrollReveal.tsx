import { useEffect, useRef } from 'react';

const ScrollReveal = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealElementsOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    // Initialize all elements to be invisible
    revealElements.forEach(element => {
      element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-800');
    });
    
    window.addEventListener('scroll', revealElementsOnScroll);
    // Initial check in case elements are already in view on page load
    revealElementsOnScroll();
    
    initialized.current = true;
    
    return () => {
      window.removeEventListener('scroll', revealElementsOnScroll);
    };
  }, []);
  
  return null;
};

export default ScrollReveal;
