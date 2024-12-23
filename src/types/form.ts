export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
}

export interface FormErrorProps {
  errors: string[];
}