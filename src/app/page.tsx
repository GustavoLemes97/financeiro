"use client";
import { TableBody } from "@/components/ui/tableBody";
import { TableHead } from "@/components/ui/tableHead";
import { entriesMock } from "@/mocks/entriesMock";

const titles = [
  "Data de vencimento",
  "Tipo de Conta",
  "Descrição",
  "Status",
  "Valor",
];

export default function Home() {
  return (
    <table className="w-full min-w-max">
      <TableHead hasActions={true} theadTitles={titles} />
      <TableBody hasActions={true} data={entriesMock} />
    </table>
  );
}
