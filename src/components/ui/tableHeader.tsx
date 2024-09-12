import { Filter, Plus, RotateCcw } from "lucide-react";
import { Button } from "./button";
import { TableTab } from "./tableTab";

interface TableHeaderProps {
  hasButton?: boolean;
  hasTab?: boolean;
}

const TableHeader = ({ hasButton = true, hasTab = true }: TableHeaderProps) => {
  return (
    <section className="flex flex-col items-start w-full py-4 lg:bg-white lg:px-4 gap-4">
      {hasTab && <TableTab />}
      <section className="flex items-center justify-end w-full gap-4 ">
        <Button className="" variant={"ghost"} font={"thin"}>
          <RotateCcw className="w-5 h-5 text-soft-grey-2" />
          <span className="font-normal text-lg hidden lg:block">Reordenar</span>
        </Button>
        <Button variant={"filter"} font={"thin"}>
          <Filter className="w-5 h-5 text-soft-grey-2" />
          <span className="font-normal text-lg hidden lg:block">Filtros</span>
        </Button>
        {hasButton && (
          <Button
            variant={"selected"}
            font={"thin"}
            className="items-center justify-center"
          >
            <Plus className="w-5 h-5" />
            Novo Lançamento
          </Button>
        )}
      </section>
    </section>
  );
};

export { TableHeader };
