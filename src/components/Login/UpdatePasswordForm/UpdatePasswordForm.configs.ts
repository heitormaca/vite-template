import { ZodSchema, z } from 'zod';
import { UpdatePasswordFormValues } from './UpdatePassword.types';

export const updatePasswordFormSchema: ZodSchema<UpdatePasswordFormValues> =
  z.object({
    newPassword: z.string().min(1, 'Campo obrigatório'),
    confirmPassword: z.string().min(1, 'Campo obrigatório'),
  });
