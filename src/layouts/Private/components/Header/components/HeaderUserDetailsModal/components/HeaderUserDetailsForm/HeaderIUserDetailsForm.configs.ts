import { ZodSchema, z } from 'zod';
import { HeaderUserDetailsFormValues } from './HeaderUserDetailsForm.types';

export const userFormSchema: ZodSchema<HeaderUserDetailsFormValues> = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  email: z.string().min(1, 'Campo obrigatório'),
});
