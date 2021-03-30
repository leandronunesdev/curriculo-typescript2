export interface Contatos {
  id: number,
  tipo: string,
  contato: string
}

export interface ContatosDados {
  dados: Contatos
}

export interface Educacao {
  id: number,
  instituicao: string,
  curso: string,
  periodo: string
}

export interface EducacaoDados {
  dados: Educacao
}

export interface Experiencia {
  id: number,
  cargo: string,
  periodo: string,
  empresa: string,
  local: string,
  conteudo: string
}

export interface Perfil {
  nome: string,
  ocupacao: string,
  resumo: string,
  perfilProfissional: string,
  avatar: string,
  contatos: Contatos[],
  educacao: Educacao[],
  experiencia: Experiencia[]
}

export interface Dados {
  dados: Perfil
}