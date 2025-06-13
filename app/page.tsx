"use client";
import { useRouter } from "next/navigation";
import { SubmitContainer } from "@/components/submitcontainer";
import Image from "next/image";
import { Flask } from "@/components/Flask";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/laboratorios");
  };

  return (
    <>
      <div className="flex flex-col gap-4 text-sm font-light pb-0 sm:pb-3 text-xs">
        <div className="flex flex-col gap-3 justify-between w-full rounded-lg">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#1CB0F8] text-left">
            Projeto <br></br>
            <div className="flex items-center">
              Quociente
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="0.5em"
                height="0.5em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12h18m-6.5-6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                  color="currentColor"
                />
              </svg>
            </div>
          </h3>
          <p className="sm:text-xl text-lg text-[#4b4b4b] mb-2">
            Compartilhamento consciente de materiais pedagógicos
          </p>
        </div>

        <p className="text-md text-justify">
          A falta de recursos didáticos no ensino de matemática está relacionada
          a uma série de entraves estruturais, políticos e pedagógicos.
        </p>
        <p className="text-md text-justify">
          Para resolver esse problema, é necessário um esforço articulado entre
          políticas públicas eficazes, formação docente de qualidade, gestão
          escolar eficiente e maior equidade na distribuição de recursos.
        </p>
        <Image src="/grupo.png" width={500} height={500} alt="grupo.png" />
        <p className="text-md text-justify">
          O Projeto Quociente surge como um centro de estudo para prover o
          compartilhamento consciente de materiais pedagógicos para o ensino das
          ciências exatas, com salas específicas (como uma sala de computação e
          uma sala com recursos matemáticos) é uma iniciativa para apoiar o
          ensino nas escolas
        </p>
      </div>
      <SubmitContainer
        onClick={onClick}
        endContent={<Flask />}
        type="button"
        text="Nossos laboratórios"
      />
    </>
  );
}
