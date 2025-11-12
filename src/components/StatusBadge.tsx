import { Marca } from "../types";

interface StatusBadgeProps {
  status: Marca["status"];
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusConfig = {
    "Em análise": {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      border: "border-yellow-300",
    },
    Aprovado: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-300",
    },
    Negado: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-300",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text} ${config.border} border`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
