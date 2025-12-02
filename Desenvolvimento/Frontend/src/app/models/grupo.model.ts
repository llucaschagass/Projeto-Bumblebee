export interface Modelo {
  id: number;
  descricao: string;
  marca: string;
}

export interface Grupo {
  id: number;
  descricao: string;
  valorDiaria: number;
  totalFrota: number;
  disponiveis: number;
  modelos?: Modelo[]; 
}