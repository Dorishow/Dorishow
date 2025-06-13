import { useState } from "react";

export type Laboratorios = {
  options: string[];
};

export const initialLaboratorios: Laboratorios = {
  options: [
    "Laboratório de práticas pedagógicas em geometria",
    "Laboratório de Física",
    "Laboratório de informática",
    "Laboratório de práticas pedagógicas em matemática",
    "Laboratório de projetos",
  ],
};

export const useLaboratorios = () => {
  const [laboratorios, setLaboratorios] = useState(initialLaboratorios);
  const updateLaboratorios = (value: Partial<Laboratorios>) => {
    setLaboratorios((current) => ({ ...current, ...value }));
  };

  return { laboratorios, updateLaboratorios };
};
