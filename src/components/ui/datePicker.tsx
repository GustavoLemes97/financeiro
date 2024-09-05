"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importando o locale ptBR
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"filter"}
          className={cn(
            "w-[286px] justify-start text-left font-normal px-4 py-2",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-5 w-5 text-soft-grey-2" />
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
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
