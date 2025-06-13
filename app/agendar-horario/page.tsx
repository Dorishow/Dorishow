"use client";
import { useRouter } from "next/navigation";
import { SubmitContainer } from "@/components/submitcontainer";
import { Flask } from "@/components/Flask";
import { Button } from "@nextui-org/button";
import { ChevronLeft } from "@geist-ui/icons";
import { useLaboratoriosContexto } from "../form/laboratorioContext";
import { TimeInput } from "@heroui/date-input";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/solicitacao");
  };

  const { options, selected, date, time, setTime, formattedTime } = useLaboratoriosContexto();

  return (
    <>
      <div className="flex w-full gap-2 items-center pt-4">
        <Button
          className="border-neutral-4 text-[#4B4B4B] bg-[#fff]"
          onClick={() => router.back()}
          isIconOnly
          variant="bordered"
          size="sm"
        >
          <ChevronLeft />
        </Button>
        <h3 className="text-2xl font-bold text-[#1CB0F8]">Agendar horário</h3>
      </div>
      <div className="flex w-full text-start  flex-col gap-4 text-sm font-light pb-0 sm:pb-3 text-xs">
        <p className="text-md text-[#777777]">{options[selected ?? 0]}</p>
      </div>
      <div className="w-full">
        <TimeInput value={time} onChange={setTime} label="Selecione o horário" />
      </div>
      <div>
         <p className="text-md text-[#777777] p-10 text-center">Dia selecionado: <br></br> {date?.toString()}</p>
         <p className="text-md text-[#777777] p-10 text-center">Horário selecionado: <br></br> {formattedTime}</p>
      </div>
      <SubmitContainer
        onClick={onClick}
        endContent={<Flask />}
        type="button"
        text="Agendar laboratório"
      />
    </>
  );
}
