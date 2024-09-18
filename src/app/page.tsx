"use client";
import { BarChartCard } from "@/components/ui/barChartCard";

const data = [
  { name: "Janeiro", receiving: 4000, payments: 2400 },
  { name: "Fevereiro", receiving: 3000, payments: 1398 },
  { name: "Março", receiving: 2000, payments: 500 },
  { name: "Abril", receiving: 2780, payments: 3908 },
  { name: "Maio", receiving: 1890, payments: 4800 },
  { name: "Junho", receiving: 2390, payments: 3800 },
  { name: "Julho", receiving: 3490, payments: 4300 },
  { name: "Agosto", receiving: 3100, payments: 3000 },
  { name: "Setembro", receiving: 2500, payments: 3200 },
  { name: "Outubro", receiving: 2700, payments: 3500 },
  { name: "Novembro", receiving: 2200, payments: 3400 },
  { name: "Dezembro", receiving: 3000, payments: 3600 },
];

export default function Home() {
  return <BarChartCard title={"Movimentações Financeiras"} data={data} />;
}
