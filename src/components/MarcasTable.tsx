import { Edit, Trash2 } from "lucide-react";
import { Marca } from "../types";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/formatDate";

interface MarcasTableProps {
  marcas: Marca[];
  onEdit: (marca: Marca) => void;
  onDelete: (id: string) => void;
  homeOnCancel: () => void;
  onOpemModal: () => void;
  isOpemConfirmModal: boolean;
}

const MarcasTable = ({ marcas, onEdit, onDelete }: MarcasTableProps) => {
  if (marcas.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <p className="text-gray-500 text-lg">Nenhum registro encontrado.</p>
        <p className="text-gray-400 text-sm mt-2">
          Clique em "Novo Registro" para adicionar uma marca.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Categoria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Descrição
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Data de Envio
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {marcas.map((marca) => (
              <tr key={marca.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {marca.nome}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{marca.categoria}</div>
                </td>
                <td className="px-6 py-4">
                  <div
                    className="text-sm text-gray-600 max-w-xs truncate"
                    title={marca.descricao}
                  >
                    {marca.descricao}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={marca.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    {formatDate(marca.dataEnvio)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEdit(marca)}
                      className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      title="Editar"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(marca.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarcasTable;
