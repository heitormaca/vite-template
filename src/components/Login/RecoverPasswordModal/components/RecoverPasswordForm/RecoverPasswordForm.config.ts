import formValidate from '@/core/utils/form/formValidate';

export const recoverPasswordFormValidate = formValidate((schema, errors) =>
  schema.object({
    email: schema.string().email(errors.isValidEmail).min(1, errors.required),
  })
);
