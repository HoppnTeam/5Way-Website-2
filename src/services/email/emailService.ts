import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './config';
import { createContactTemplate, createBookingTemplate } from './utils/templates';
import type { ContactFormData, BookingFormData, EmailResponse } from './types';

class EmailService {
  private static isInitialized = false;

  private static initialize() {
    if (!this.isInitialized) {
      emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
      this.isInitialized = true;
    }
  }

  private static async sendEmail(
    templateId: string,
    templateParams: Record<string, unknown>
  ): Promise<EmailResponse> {
    this.initialize();

    try {
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        templateId,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      return {
        status: response.status,
        text: response.text
      };
    } catch (error: any) {
      console.error('Email service error:', error);
      throw {
        status: error.status || 500,
        text: error.text || 'Failed to send email'
      };
    }
  }

  public static async sendContactEmail(data: ContactFormData): Promise<EmailResponse> {
    const templateParams = createContactTemplate(data);
    return this.sendEmail(EMAIL_CONFIG.TEMPLATE_IDS.CONTACT, templateParams);
  }

  public static async sendBookingEmail(data: BookingFormData): Promise<EmailResponse> {
    const templateParams = createBookingTemplate(data);
    return this.sendEmail(EMAIL_CONFIG.TEMPLATE_IDS.BOOKING, templateParams);
  }
}

export default EmailService;