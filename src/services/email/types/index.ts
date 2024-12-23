export interface EmailConfig {
  SERVICE_ID: string;
  TEMPLATE_IDS: {
    CONTACT: string;
    BOOKING: string;
  };
  PUBLIC_KEY: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

export * from './forms';