import formValidate from '@/core/utils/form/formValidate';

export const loginFormValidate = formValidate((schema, errors) =>
  schema.object({
    email: schema.string().email(errors.isValidEmail).nonempty(errors.required),
    password: schema.string().nonempty(errors.required),
  })
);
