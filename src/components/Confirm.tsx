interface ConfirmProps {
  onCancel: any;
  idForDelete: string;
  onConfirm: (id: string) => void;
}

const Confirm = ({ onCancel, idForDelete, onConfirm }: ConfirmProps) => {
  return (
    <div
      className="bg-white  flex flex-col justify-between p-3
        rounded-lg gap-6"
    >
      <p>
        Isso apagara esse registro permanetmente, apos cofirmar nao sera
        possivel recuperalo
      </p>
      <div className="flex gap-6 justify-end border-t pt-6">
        <button
          className="p-2 bg-gray-200 border border-gray-400 rounded-lg
           hover:bg-gray-300 duration-200"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className="bg-red-600 text-white p-2 rounded-lg
           hover:bg-red-700 duration-200"
          onClick={() => onConfirm(idForDelete)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Confirm;
