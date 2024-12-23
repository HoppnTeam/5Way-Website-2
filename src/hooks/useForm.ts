import { useState, useCallback } from 'react';
import type { FormStatus } from '../types/form';

interface UseFormProps<T> {
  initialData: T;
  onSubmit: (data: T) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  validate?: (data: T) => boolean;
}

export function useForm<T>({
  initialData,
  onSubmit,
  onSuccess,
  onError,
  validate
}: UseFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setStatus('idle');
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate && !validate(formData)) {
      return;
    }

    setStatus('sending');

    try {
      await onSubmit(formData);
      setStatus('success');
      resetForm();
      onSuccess?.();
    } catch (error) {
      setStatus('error');
      onError?.(error);
    }
  };

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  }, []);

  return {
    formData,
    status,
    handleSubmit,
    handleChange,
    resetForm
  };
}