import { Button } from "@nextui-org/button";
import { ComponentProps } from "react";
type Props = {
  onClick?: () => void;
  text?: string;
} & ComponentProps<typeof Button>;

export const SubmitContainer = ({ onClick, text, ...rest }: Props) => {
  return (
    <div className="fixed bg-[#fff] sm:relative z-40 bottom-0 left-0 w-full flex content-center justify-center gap-3 pb-6 pt-2 px-8 sm:px-0">
      <Button
        onClick={onClick}
        className="w-full max-w-md h-[44px] rounded bg-[#1CB0F8] disabled:bg-[#A9E3FF] disabled:cursor-not-allowed text-[#fff]"
        {...rest}
      >
        {text}
      </Button>
    </div>
  );
};
