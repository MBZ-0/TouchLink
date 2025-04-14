import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request data
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, we would store this in a database
      // or send an email. For now, we'll just log it.
      console.log('Contact form submission:', validatedData);
      
      // Return success
      res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      // Server error
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
