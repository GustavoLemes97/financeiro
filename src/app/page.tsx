"use client";

import { AlertCard } from "@/components/ui/alertCard";

export default function Home() {
  const warningsData = [
    { name: "Aluguel", date: new Date(2024, 8, 10) },
    { name: "Cartão", date: new Date(2024, 8, 15) },
    { name: "Tratamento de esgoto", date: new Date(2024, 8, 20) },
    { name: "Churrasco", date: new Date(2024, 8, 25) },
    { name: "Manutenção programada", date: new Date(2024, 8, 30) },
  ];
  return (
    <>
      <AlertCard title={"Pagamentos a vencer"} warnings={warningsData} />
    </>
  );
}
