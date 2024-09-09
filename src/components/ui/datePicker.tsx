"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = CalendarProps & {
  date: Date | undefined;
};

const DatePicker = ({ date, ...props }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"filter"}
          className={cn(
            "w-auto max-w-[300px] justify-start text-left font-normal px-4 py-2",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-5 w-5 text-soft-grey-2 self-center" />
          {date ? (
            format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
          ) : (
            <span className="text-base lg:text-xl font-normal">
              Selecionar Data
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar initialFocus {...props} />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
