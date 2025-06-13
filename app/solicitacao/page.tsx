"use client";
import { useRouter } from "next/navigation";
import { SubmitContainer } from "@/components/submitcontainer";
import { Flask } from "@/components/Flask";
import { useLaboratoriosContexto } from "../form/laboratorioContext";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  const { options, selected, formattedTime } = useLaboratoriosContexto();

  return (
    <>
      <div className="flex flex-col gap-4 text-sm font-light pb-0 sm:pb-3 text-xs">
        <div className="flex flex-col gap-3 justify-between w-full rounded-lg">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#1CB0F8] text-left">
            Projeto <br></br>Quociente
          </h3>
          <p className="sm:text-xl text-lg text-[#4b4b4b] mb-2">
            Sua solicitação foi realizada com sucesso
          </p>
        </div>

        <div className="border px-1 py-4 rounded-md flex w-full text-start  flex-col gap-4 text-sm font-light sm:pb-3 text-xs">
          <p className="sm:text-xl text-md text-[#4b4b4b] mb-2">
            Dados da sua solicitação:
          </p>
          <p className="text-md text-[#777777]">{options[selected ?? 0]}</p>
          <p>Horário {formattedTime}</p>
        </div>
        <p className="text-md text-justify">
          Em breve retornaremos com a resposta da sua solicitação
        </p>
      </div>
      <SubmitContainer
        onClick={onClick}
        type="button"
        text="Retornar ao inicio"
      />
    </>
  );
}
