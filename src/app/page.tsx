"use client";
import * as React from "react";
import { DatePicker } from "@/components/ui/datePicker";

export default function Home() {
  const [date, setDate] = React.useState<Date>();
  const handleonSelect = (tdate: Date | undefined) => {
    setDate(tdate);
    console.log("teste", tdate);
  };
  return (
    <DatePicker
      mode="single"
      date={date}
      onSelect={handleonSelect}
      selected={date}
    />
  );
}
