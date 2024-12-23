import { useState } from 'react';
import EmailService from '../services/email/emailService';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface UseEmailFormProps<T> {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  initialData: T;
  sendEmail: (data: T) => Promise<any>;
}

export function useEmailForm<T>({
  onSuccess,
  onError,
  initialData,
  sendEmail
}: UseEmailFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData(initialData);
      onSuccess?.();
    } catch (error) {
      setStatus('error');
      onError?.(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return {
    formData,
    status,
    handleSubmit,
    handleChange
  };
}