import { useState, useMemo } from "react";
import { Header } from "../components/Header";
import { MarcasTable } from "../components/MarcasTable";
import { Modal } from "../components/Modal";
import { MarcaForm } from "../components/MarcaForm";
import { StatusFilter } from "../components/StatusFilter";
import { Toast } from "../components/Toast";
import { useMarcas } from "../hooks/useLocalStorage";
import { Marca, StatusMarca } from "../types";
import { MarcaFormData } from "../utils/validation";
import Confirm from "../components/Confirm";
import { fa } from "zod/v4/locales";

export function Home() {
  const { marcas, adicionarMarca, atualizarMarca, excluirMarca } = useMarcas();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [marcaEditando, setMarcaEditando] = useState<Marca | undefined>(
    undefined
  );
  const [statusFiltro, setStatusFiltro] = useState<StatusMarca>("Todos");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const marcasFiltradas = useMemo(() => {
    if (statusFiltro === "Todos") {
      return marcas;
    }
    return marcas.filter((m) => m.status === statusFiltro);
  }, [marcas, statusFiltro]);

  const handleNovoRegistro = () => {
    setMarcaEditando(undefined);
    setIsModalOpen(true);
  };

  const handleEditar = (marca: Marca) => {
    setMarcaEditando(marca);
    setIsModalOpen(true);
  };

  const handleExcluir = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este registro?")) {
      excluirMarca(id);
      setToast({ message: "Registro excluído com sucesso!", type: "success" });
    }
  };

  const handleSubmit = (data: MarcaFormData) => {
    if (marcaEditando) {
      atualizarMarca(marcaEditando.id, data);
      setToast({
        message: "Registro atualizado com sucesso!",
        type: "success",
      });
    } else {
      adicionarMarca(data);
      setToast({ message: "Registro criado com sucesso!", type: "success" });
    }
    setIsModalOpen(false);
    setMarcaEditando(undefined);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setMarcaEditando(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNewClick={handleNovoRegistro} />

      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <StatusFilter
              selectedStatus={statusFiltro}
              onStatusChange={setStatusFiltro}
            />
          </div>

          <MarcasTable
            marcas={marcasFiltradas}
            onEdit={handleEditar}
            onDelete={handleExcluir}
          />
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title={marcaEditando ? "Editar Registro" : "Novo Registro"}
      >
        <MarcaForm
          marca={marcaEditando}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Modal>

      {isConfirmOpen && <Confirm />}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
