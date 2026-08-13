import { ContactSubmission, SystemLog } from './types';

const LOG_KEY = 'samson_portfolio_logs';
const CONTACT_KEY = 'samson_portfolio_contacts';

export class BackendService {
  // --- Logger ---
  static log(message: string, level: SystemLog['level'] = 'INFO') {
    if (typeof window === 'undefined') return;
    const logs: SystemLog[] = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    const newLog: SystemLog = {
      id: Math.random().toString(36).substring(2, 9),
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
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
  }

  // --- Contact / Lead Processing ---
  async processContactSubmission(name: string, email: string, message: string): Promise<ContactSubmission> {
    BackendService.log(`Processing consulting inquiry from: ${email}`, 'SYSTEM');
    
    const submission: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: Date.now(),
      name,
      email,
      message,
      analysis: {
        category: 'Consulting & Advisory Inquiry',
        urgency: 'High',
        sentiment: 'Professional',
        summary: 'Direct client communication routed to Samson Chege Mbugua.'
      }
    };

    const contacts: ContactSubmission[] = JSON.parse(localStorage.getItem(CONTACT_KEY) || '[]');
    contacts.unshift(submission);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
    
    BackendService.log(`Advisory request securely logged in local persistence engine.`, 'SYSTEM');
    return submission;
  }

  static getSubmissions(): ContactSubmission[] {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem(CONTACT_KEY) || '[]');
  }
}

export const api = new BackendService();
