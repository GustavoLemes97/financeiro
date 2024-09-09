"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { Select } from "@/components/ui/select";

export default function Home() {
  const [date, setDate] = React.useState<Date>();
  const handleonSelect = (tdate: Date | undefined) => {
    setDate(tdate)
    console.log("teste", tdate)
  }
  return (
    <main className="p-10 flex flex-col gap-4">
      <InputWithLabel
        labelName={"Input"}
        onChange={() => console.log("teste")}
        type={"email"}
        id={"email"}
        placeholder={"Input"}
      />

      <Select
        items={["Cartão", "Dinheiro", "Aluguel"]}
        label={"Tipos de conta"}
        placeholder={"Tipos de conta"}
        onChange={() => console.log("teste")}
      />
      <Button variant={'filter'}>teste</Button>

      <DatePicker mode="single" date={date} onSelect={handleonSelect} />
    </main>
  );
}
