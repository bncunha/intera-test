import * as yup from 'yup';

export const AboutSchema = yup.object().shape({
  nome: yup.string().required(),
  ocupacao: yup.string().required(),
  email: yup.string()
    .required('E-mail é obrigatório!')
    .email('E-mail inválido!')
    .max(100, 'E-mail muito longo!')
    .nullable(),
  sites: yup.array().of(
    yup.string()
    .required('Site é obrigatório!')
    .min(3, 'Site está muito curto!')
    .max(50, 'Site muito longo!')
  )
})