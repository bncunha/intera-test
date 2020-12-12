export interface Conhecimento {
  nome: string;
  porcentagem: number;
}

export interface Experiencia {
  nome: string;
  empresa: string;
  dataInicio: Date;
  dataFim: Date;
  detalhes: string;
}

export interface Usuario {
  nome: string;
  ocupacao: string;
  sobre: string;
  email: string,
  sites: string[];
  conhecimentos: Conhecimento[],
  experiencias: Experiencia[]
}

const Api = {
  init: () => {
    if (!Api.get()) {
      Api.save([]);
    }
  },

  save: (usuarios: Usuario[]) => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  },

  get: (): Usuario[] => {
    return JSON.parse(localStorage.getItem('usuarios') || 'null');
  }

};

export default Api;