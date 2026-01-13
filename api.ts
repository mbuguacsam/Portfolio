
import { GoogleGenAI } from "@google/genai";
import { ContactSubmission, SystemLog, BlogPost } from './types';

const LOG_KEY = 'samson_portfolio_logs';
const CONTACT_KEY = 'samson_portfolio_contacts';

export class BackendService {
  /**
   * Always instantiates the GoogleGenAI client right before use to ensure the most 
   * up-to-date API key is used as per the latest guidelines.
   */
  private createAIInstance() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  // --- Logger ---
  static log(message: string, level: SystemLog['level'] = 'INFO') {
    const logs: SystemLog[] = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    const newLog: SystemLog = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      level,
      message,
    };
    logs.unshift(newLog);
    localStorage.setItem(LOG_KEY, JSON.stringify(logs.slice(0, 50)));
    
    // Dispatch custom event for UI updates
    window.dispatchEvent(new CustomEvent('system_log', { detail: newLog }));
  }

  static getLogs(): SystemLog[] {
    return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
  }

  // --- Contact / Lead Processing ---
  async processContactSubmission(name: string, email: string, message: string): Promise<ContactSubmission> {
    BackendService.log(`Initializing lead processing for: ${email}`, 'SYSTEM');
    
    const submission: ContactSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      name,
      email,
      message,
    };

    try {
      BackendService.log(`Invoking Gemini 3 Flash for sentiment & urgency analysis...`);
      
      const ai = this.createAIInstance();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze this contact form submission for a Cybersecurity Advisor portfolio. 
        Categorize it (e.g., Strategic Advisory, Partnership, Job, Spam), assess urgency (Low, Medium, High), 
        provide a 1-sentence summary, and identify sentiment. 
        Return ONLY a JSON object with keys: category, urgency, sentiment, summary.
        
        Message: "${message}"`,
        config: { responseMimeType: "application/json" }
      });

      const analysis = JSON.parse(response.text || '{}');
      submission.analysis = analysis;
      
      BackendService.log(`Analysis complete: ${analysis.category} | Urgency: ${analysis.urgency}`, 'INFO');
    } catch (error) {
      BackendService.log(`AI Analysis failed: ${error}`, 'WARN');
      submission.analysis = {
        category: 'General Inquiry',
        urgency: 'Medium',
        sentiment: 'Neutral',
        summary: 'Manual review required (AI analysis failed).'
      };
    }

    const contacts: ContactSubmission[] = JSON.parse(localStorage.getItem(CONTACT_KEY) || '[]');
    contacts.unshift(submission);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
    
    BackendService.log(`Lead stored successfully in Persistence Layer.`, 'SYSTEM');
    return submission;
  }

  static getSubmissions(): ContactSubmission[] {
    return JSON.parse(localStorage.getItem(CONTACT_KEY) || '[]');
  }

  // --- Blog & Content ---
  async generateBlogDraft(topic: string): Promise<string> {
    BackendService.log(`Requesting AI draft for topic: ${topic}`, 'INFO');
    const ai = this.createAIInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Write a high-authority 300-word blog post excerpt for Samson Mbugua, a Cyber Defense pro. 
      Topic: ${topic}. Focus on technical depth and strategic advisory. Use Markdown.`,
    });
    BackendService.log(`Draft generation successful.`, 'SYSTEM');
    return response.text || "Draft failed.";
  }
}

export const api = new BackendService();
