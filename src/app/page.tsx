"use client";

import { ChartCard } from "@/components/ui/PieChartCard";

export default function Home() {
  const data = [
    { name: "Cartão de Credito", value: 500 },
    { name: "Aluguel", value: 400 },
    { name: "Água e esgoto", value: 300 },
    { name: "Tecnologia", value: 200 },
    { name: "Sócios", value: 100.5 },
  ];

  return <ChartCard data={data} title={"Valores a receber"} />;
}
