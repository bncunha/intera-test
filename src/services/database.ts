import { getInitialData } from "../utils/getInitialData";

export interface Conhecimento {
  nome: string;
  porcentagem: number;
}

export interface Experiencia {
  ocupacao: string;
  empresa: string;
  dataInicio: Date;
  dataFim?: Date;
  detalhes: string;
}

export interface Usuario {
  nome: string;
  imagem: any;
  ocupacao: string;
  sobre: string;
  email: string,
  sites: string[];
  conhecimentos: Conhecimento[],
  experiencias: Experiencia[]
}

export const Database = {
  init: () => {
    if (!Database.get()) {
      Database.save(getInitialData());
    }
  },

  save: (usuarios: Usuario[]) => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  },

  get: (): Usuario[] => {
    return JSON.parse(localStorage.getItem('usuarios') || 'null');
  }

};