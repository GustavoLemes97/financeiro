"use client";
import { BarChartCard } from "@/components/ui/barChartCard";
import { TableHead } from "@/components/ui/tableHead";

const data = [
  "Data de vencimento",
  "Tipo de Conta",
  "Descrição",
  "Status",
  "Valor",
  "",
];

export default function Home() {
  return (
    <table className="w-full">
      <TableHead theadData={data} />
    </table>
  );
}
