import { useEffect, useRef } from 'react';

interface ParticleProps {
  containerSelector: string;
  count?: number;
}

const ParticleEffect = ({ containerSelector, count = 50 }: ParticleProps) => {
  const initialized = useRef(false);
  
  useEffect(() => {
    if (initialized.current) return;
    
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    // Clear existing particles if any
    const existingParticles = container.querySelectorAll('.particle');
    existingParticles.forEach(particle => particle.remove());
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('absolute', 'rounded-full', 'bg-secondary', 'opacity-20', 'particle');
      
      // Random size between 4px and 10px
      const size = 4 + Math.random() * 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * 10;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      container.appendChild(particle);
    }
    
    initialized.current = true;
    
    // Cleanup
    return () => {
      const particles = document.querySelectorAll(`${containerSelector} .particle`);
      particles.forEach(particle => particle.remove());
    };
  }, [containerSelector, count]);
  
  return null;
};

export default ParticleEffect;
