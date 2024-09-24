import { entriesMock } from "@/mocks/entriesMock";
import { TableBody } from "./tableBody";
import { TableFooter } from "./tableFooter";
import { TableHead } from "./tableHead";
import { TableHeader } from "./tableHeader";
import { stringCurrencyToNumber } from "@/utils/currencyUtils";

interface EntriesTableProps {}

const titles = [
  "Data de vencimento",
  "Tipo de Conta",
  "Descrição",
  "Status",
  "Valor",
];

const EntriesTable = ({}: EntriesTableProps) => {
  const totalValue = entriesMock.reduce((acc, entry) => {
    const value = stringCurrencyToNumber(entry.value);
    return acc + value;
  }, 0);

  return (
    <section className="flex flex-col flex-start rounded-2xl lg:bg-white md:px-4 overflow-x-hidden">
      <TableHeader hasButton hasTab />
      <div className="overflow-x-auto overflow-y-scroll no-scrollbar ">
        <table className="w-full min-w-max">
          <TableHead hasActions={true} theadTitles={titles} />
          <TableBody hasActions={true} data={entriesMock} />
        </table>
      </div>
      <TableFooter hasButton hasTotalTransaction totalValue={totalValue} />
    </section>
  );
};

export { EntriesTable };
