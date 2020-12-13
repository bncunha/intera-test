import * as yup from 'yup';

export const ExperienceSchema = yup.object().shape({
  experiencias: yup.array().of(yup.object({
    ocupacao: yup.string()
      .required('Ocupação é obrigatório')
      .max(30, 'Quantidade máxima de 30 caracteres'),
    empresa: yup.string()
      .required('Empresa é obrigatório')
      .max(50, 'Quantidade máxima de 50 caracteres'),
    dataInicio: yup.date(),
    dataFim: yup.date()
      .test('dataFimAntesDataInicio', 'Data fim deve ser superior a data de início!', function(value) {
        const dataInicio = this.parent.dataInicio;
        if (dataInicio && value) {
          return dataInicio.getTime() < value;
        } 
        return true;
      }),
    detalhes: yup.string().nullable()
  }))
})