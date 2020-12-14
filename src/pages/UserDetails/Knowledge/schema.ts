import * as yup from 'yup';

export const KnowledgeSchema = yup.object().shape({
  conhecimentos: yup.array().of(yup.object().shape({
    nome: yup.string()
      .required('Nome é obrigatório!')
      .max(30, 'Nome muito longo!'),
    porcentagem: yup.number()
      .required('Porcentagem é obrigatório')
      .min(0, 'Valor mínimo permitido é 0.')
      .max(100, 'Valor máximo permitido é 100.')
      .transform((value: any) => !value ? undefined : Number(value))
  }))
})