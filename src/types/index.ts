export interface Marca {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  dataEnvio: string;
  status: "Em análise" | "Aprovado" | "Negado";
}

export type StatusMarca = "Em análise" | "Aprovado" | "Negado" | "Todos";

