import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { marcaSchema, MarcaFormData } from "../utils/validation";
import { Marca } from "../types";

interface MarcaFormProps {
  marca?: Marca;
  onSubmit: (data: MarcaFormData) => void;
  onCancel: () => void;
}

export function MarcaForm({ marca, onSubmit, onCancel }: MarcaFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MarcaFormData>({
    resolver: zodResolver(marcaSchema),
    defaultValues: marca
      ? {
          nome: marca.nome,
          categoria: marca.categoria,
          descricao: marca.descricao,
          status: marca.status,
        }
      : {
          status: "Em análise",
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nome da Marca *
        </label>
        <input
          id="nome"
          type="text"
          {...register("nome")}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors ${
            errors.nome ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Digite o nome da marca"
        />
        {errors.nome && (
          <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="categoria"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Categoria *
        </label>
        <input
          id="categoria"
          type="text"
          {...register("categoria")}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors ${
            errors.categoria ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Digite a categoria"
        />
        {errors.categoria && (
          <p className="mt-1 text-sm text-red-600">
            {errors.categoria.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Descrição *
        </label>
        <textarea
          id="descricao"
          {...register("descricao")}
          rows={4}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none ${
            errors.descricao ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Digite a descrição da marca"
        />
        {errors.descricao && (
          <p className="mt-1 text-sm text-red-600">
            {errors.descricao.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Status *
        </label>
        <select
          id="status"
          {...register("status")}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2
             focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors ${
               errors.status ? "border-red-500" : "border-gray-300"
             }`}
        >
          <option value="Em análise">Em análise</option>
          <option value="Aprovado">Aprovado</option>
          <option value="Negado">Negado</option>
        </select>
        {errors.status && (
          <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
        )}
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg
           hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg
           hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Salvando..." : marca ? "Atualizar" : "Criar"}
        </button>
      </div>
    </form>
  );
}
