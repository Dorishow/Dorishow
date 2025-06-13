"use client";
import { useRouter } from "next/navigation";
import { SubmitContainer } from "@/components/submitcontainer";
import { Flask } from "@/components/Flask";
import { Button } from "@nextui-org/button";
import { ChevronLeft } from "@geist-ui/icons";
import { useLaboratoriosContexto } from "../form/laboratorioContext";
import { Calendar, DateValue } from "@heroui/calendar";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/agendar-horario");
  };

  const { options, selected, date, setDate } = useLaboratoriosContexto();

  let now = today(getLocalTimeZone());

  let disabledRanges = [
    [now.add({ days: 3 }), now.add({ days: 5 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  let { locale } = useLocale();

  let isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

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
        <h3 className="text-3xl font-bold text-[#1CB0F8]">Agendar data</h3>
      </div>
      <div className="flex w-full text-start  flex-col gap-4 text-sm font-light pb-0 sm:pb-3 ">
        <p className="text-xs text-[#777777]">
          Selecione entre os dias disponíveis para agendar o laboratório
        </p>
        <p className="text-[#4b4b4b]">{options[selected ?? 0]}</p>
      </div>
      <div className="w-full">
        <Calendar
          isDateUnavailable={isDateUnavailable}
          className="w-full"
          value={date}
          onChange={setDate}
          showMonthAndYearPickers
          color="primary"
          aria-label="Date (No Selection)"
        />
        <p className="text-xs text-[#777777]">
          Obs: Algumas datas podem estar indisponíveis por já estarem agendadas
        </p>
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
