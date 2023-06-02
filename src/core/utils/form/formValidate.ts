import { z } from 'zod';
import { zodResolver } from '@mantine/form';
import formErrors from './formErrors';

type Validate = (schema: typeof z, errors: typeof formErrors) => any;

export default function formValidate(validate: Validate) {
  return zodResolver(validate(z, formErrors));
}
