import {
  CalendarDate,
  parseAbsoluteToLocal,
  parseDate,
  ZonedDateTime,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import React, { createContext, useContext, useState } from "react";

export type LaboratoriosContexto = {
  options: string[];
  selected?: number;
  date?: CalendarDate;
  setDate?: (value: CalendarDate) => void;
  time: ZonedDateTime;
  setTime: (value: ZonedDateTime | null) => void;
  setSelected: (value: number) => void;
  formattedTime: string;
};

export const initialLaboratoriosContexto: LaboratoriosContexto = {
  options: [],
  selected: undefined,
  setSelected: () => "",
  date: parseDate("2025-06-13"),
  setDate: () => "",
  time: parseAbsoluteToLocal("2025-06-13T18:45:22Z"),
  setTime: () => "",
  formattedTime: "",
};

const LaboratoriosContextoCtx = createContext(initialLaboratoriosContexto);

export const LaboratoriosContextoProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [selected, setSelected] = useState<number>();
  let [date, setDate] = React.useState(parseDate("2025-06-13"));
  const options = [
    "Laboratório de práticas pedagógicas em geometria",
    "Laboratório de Física",
    "Laboratório de informática",
    "Laboratório de práticas pedagógicas em matemática",
    "Laboratório de projetos",
  ];

  let [time, setTime] = React.useState(
    parseAbsoluteToLocal("2025-06-13T18:45:22Z")
  );

  const formatter = useDateFormatter({ timeStyle: "short" });
  const formattedTime = formatter.format(time.toDate());

  const updateTime = (value: ZonedDateTime | null) => {
    if (value !== null) {
      setTime(value);
    }
  };

  return (
    <LaboratoriosContextoCtx.Provider
      value={{
        options,
        selected,
        setSelected,
        date,
        setDate,
        time,
        setTime: updateTime,
        formattedTime,
      }}
    >
      {children}
    </LaboratoriosContextoCtx.Provider>
  );
};

export const useLaboratoriosContexto = () =>
  useContext(LaboratoriosContextoCtx);
