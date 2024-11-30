export interface IPessoa {
  id_pessoa?: number;
  nome: string;
  email: string;
  dataNascimento: string;  
  telefone?: string;
  formacoes: IFormacao[];
  experiencias: IExperiencia[];
}

export interface IFormacao {
  id_formacao?: number;
  nome: string;
  descricao?: string;
  dataInicio: string;  
  dataFinalizacao?: string;
  pessoa_id: number;  
}

export interface IExperiencia {
  id_experiencia?: number;
  nomeEmpresa: string;
  cargo: string;
  descricaoAtividades?: string;
  dataInicio: string;  
  dataFinalizacao?: string;
  pessoa_id: number;  
}

