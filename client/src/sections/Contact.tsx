import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill out all required fields.",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
      });
      console.error("Error sending contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-light mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-light-dark max-w-xl mx-auto">Have questions about TouchLink? Get in touch with our team.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <div className="bg-dark-lighter rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-heading font-bold text-light mb-4">Get In Touch</h3>
              <p className="text-light-darker mb-6">
                We'd love to hear from you! Whether you have questions about the project, want to collaborate, 
                or are interested in bringing TouchLink to another location, our team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-light">Location</h4>
                    <p className="text-light-darker">University of Toronto, Department of Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-light">Email</h4>
                    <p className="text-light-darker">touchlink@cs.toronto.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-secondary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-light">Demo Hours</h4>
                    <p className="text-light-darker">April 15-20, 2024 | 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-secondary hover:bg-primary/30 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-secondary hover:bg-primary/30 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-secondary hover:bg-primary/30 transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-secondary hover:bg-primary/30 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <form className="bg-dark-lighter rounded-xl p-6 md:p-8" onSubmit={handleSubmit}>
              <h3 className="text-xl font-heading font-bold text-light mb-4">Send Us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-light font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark-light text-light border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-light font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-dark-light text-light border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-light font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-dark-light text-light border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-light font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-dark-light text-light border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-light transition-all duration-300 text-light font-accent font-medium py-3 rounded-md shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
