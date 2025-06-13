"use client";
import { useRouter } from "next/navigation";
import { SubmitContainer } from "@/components/submitcontainer";
import Image from "next/image";
import { Flask } from "@/components/Flask";
import { Button } from "@nextui-org/button";
import { ChevronLeft } from "@geist-ui/icons";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/agendar-laboratorio");
  };

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
      </div>
      <div className="flex flex-col gap-4 text-sm font-light pb-0 sm:pb-3 text-xs">
        <div className="flex flex-col gap-3 justify-between w-full rounded-lg">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#1CB0F8] text-left">
            Nossos <br></br>
            <div className="flex content-center items-center gap-2">
              Laboratórios <Flask />
            </div>
          </h3>
          <p className="sm:text-xl text-lg text-[#4b4b4b] mb-2">
            Compartilhamento consciente de materiais pedagógicos
          </p>
        </div>

        <p className="text-md text-justify">
          Nosso objetivo é oferecer um espaço moderno, acessível e colaborativo
          para que escolas da rede pública e privada possam utilizar recursos
          tecnológicos e matemáticos avançados, complementando a formação dos
          alunos.
        </p>

        <Image
          className="rounded-lg"
          src="/laboratorio_materiais3.jpg"
          width={500}
          height={500}
          alt="grupo.png"
        />
        <p className="text-md text-justify">
          Sala de Matemática (Laboratório de Matemática). Materiais
          manipulativos (blocos lógicos, sólidos geométricos, ábacos, régua de
          fracionamento). Jogos matemáticos. Painéis temáticos (frações,
          geometria, lógica). Projetor e lousa digital. Espaço para atividades
          em grupo.
        </p>
        <Image
          src="/laboratorio_materiais.jpg"
          width={500}
          height={500}
          alt="grupo.png"
        />
        <p className="text-md text-justify">
          Sala de Computação 20 a 30 computadores com internet e softwares
          educativos. Ambiente climatizado e adaptado. Projetor interativo.
          Impressora 3D. Recursos de acessibilidade (como leitores de tela,
          fones com microfone, etc).
        </p>
        <Image
          className="rounded-lg"
          src="/laboratorio_informatica.jpeg"
          width={500}
          height={500}
          alt="grupo.png"
        />
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
