export default {
  required: 'Campo obrigatório',
  isValidEmail: 'E-mail inválido',
  min: ({ min }: { min: number }) => `Mínimo de ${min}`,
  max: ({ max }: { max: number }) => `Máximo de ${max}`,
};
