"use client";
import { useRouter } from "next/navigation";
import { SubmitContainer } from "@/components/submitcontainer";
import { Flask } from "@/components/Flask";
import { Button } from "@nextui-org/button";
import { ChevronLeft } from "@geist-ui/icons";
import { useLaboratoriosContexto } from "../form/laboratorioContext";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/agendar-data");
  };

  const { options, setSelected, selected } = useLaboratoriosContexto();

  return (
    <>
      <div className="flex w-full gap-2 items-center py-4">
        <Button
          className="border-neutral-4 text-[#4B4B4B] bg-[#fff]"
          onClick={() => router.back()}
          isIconOnly
          variant="bordered"
          size="sm"
        >
          <ChevronLeft />
        </Button>
        <h3 className="text-4xl font-bold text-[#1CB0F8]">Laboratórios</h3>
      </div>
      <div className="flex flex-col gap-4 text-sm font-light pb-0 sm:pb-3 text-xs">
        <p className="text-md text-justify text-[#4B4B4B]">
          Selecione entre as opções disponíveis
        </p>

        {options.map((option, index) => (
          <button
            onClick={() => setSelected(index)}
            key={option}
            data-selected={selected === index}
            className="flex gap-0 border [&[data-selected=true]]:ring ring-[#1CB0F8] p-4 rounded-lg"
          >
            <div className="relative bg-[#1CB0F8] text-[18px] text-[#fff] w-10 h-9 flex content-center justify-center items-center rounded-3xl">
              <h2 className="">{index + 1}</h2>
            </div>
            <div className="break-words flex h-full w-full content-center justify-center items-center">
              <p
                data-selected={selected === index}
                className="pl-3 w-full text-start break-words [&[data-selected=true]]:text-[#1CB0F8] [&[data-selected=true]]:font-bold"
              >
                {option}
              </p>
            </div>
          </button>
        ))}
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
