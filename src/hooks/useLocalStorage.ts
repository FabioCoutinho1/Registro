import { useState } from "react";
import { Marca } from "../types";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useMarcas() {
  const [marcas, setMarcas] = useLocalStorage<Marca[]>("brandflow-marcas", []);

  const adicionarMarca = (marca: Omit<Marca, "id" | "dataEnvio">) => {
    const novaMarca: Marca = {
      ...marca,
      id: crypto.randomUUID(),
      dataEnvio: new Date().toISOString(),
    };
    setMarcas([...marcas, novaMarca]);
    return novaMarca;
  };

  const atualizarMarca = (id: string, atualizacoes: Partial<Marca>) => {
    setMarcas(marcas.map((m) => (m.id === id ? { ...m, ...atualizacoes } : m)));
  };

  const excluirMarca = (id: string) => {
    setMarcas(marcas.filter((m) => m.id !== id));
    console.log("isso e do um testesssss");
  };

  return {
    marcas,
    adicionarMarca,
    atualizarMarca,
    excluirMarca,
  };
}
