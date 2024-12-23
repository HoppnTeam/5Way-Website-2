import { useState, useCallback } from 'react';

interface ValidationHookResult {
  errors: string[];
  validateForm: (data: any) => boolean;
  clearErrors: () => void;
}

export function useFormValidation(
  validator: (data: any) => string[]
): ValidationHookResult {
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = useCallback((data: any): boolean => {
    const validationErrors = validator(data);
    setErrors(validationErrors);
    return validationErrors.length === 0;
  }, [validator]);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  return {
    errors,
    validateForm,
    clearErrors
  };
}