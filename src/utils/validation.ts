import { z } from 'zod';

export const marcaSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome deve ter no máximo 100 caracteres'),
  categoria: z.string().min(2, 'Categoria deve ter pelo menos 2 caracteres').max(50, 'Categoria deve ter no máximo 50 caracteres'),
  descricao: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres').max(500, 'Descrição deve ter no máximo 500 caracteres'),
  status: z.enum(['Em análise', 'Aprovado', 'Negado']),
});

export type MarcaFormData = z.infer<typeof marcaSchema>;

