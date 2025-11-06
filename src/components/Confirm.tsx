const Confirm = () => {
  return (
    <div
      className="fixed inset-0 z-50 h-screen w-full flex items-center
     justify-center bg-black/60 backdrop-blur-sm"
    >
      <div
        className="bg-white border border-gray-200 max-w-96 flex flex-col justify-between p-3
        rounded-lg gap-6"
      >
        <h1 className="font-semibold">Excluir Registro ?</h1>
        <p>
          Isso apagara esse registro permanetmente, apos cofirmar nao sera
          possivel recuperalo
        </p>
        <div className="flex gap-6 justify-end">
          <button
            className="p-2 bg-gray-200 border border-gray-400 rounded-lg
           hover:bg-gray-300 duration-200"
          >
            Cancelar
          </button>

          <button
            className="bg-red-600 text-white p-2 rounded-lg
           hover:bg-red-700 duration-200"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
