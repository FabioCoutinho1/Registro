import { StatusMarca } from '../types';

interface StatusFilterProps {
  selectedStatus: StatusMarca;
  onStatusChange: (status: StatusMarca) => void;
}

export function StatusFilter({ selectedStatus, onStatusChange }: StatusFilterProps) {
  const statuses: StatusMarca[] = ['Todos', 'Em análise', 'Aprovado', 'Negado'];

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-gray-700">Filtrar por status:</label>
      <div className="flex gap-2 flex-wrap">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedStatus === status
                ? 'bg-primary-600 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

