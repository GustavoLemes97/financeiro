import { Plus } from "lucide-react";
import { Button } from "./button";
import { TablePagination } from "./tablePagination";

interface TableFooterProps {
  hasButton?: boolean;
  hasTotalTransaction?: boolean;
}

const TableFooter = ({
  hasButton = true,
  hasTotalTransaction = true,
}: TableFooterProps) => {
  return (
    <section className="bg-white flex flex-col items-center px-6 py-4 w-full gap-4">
      {hasButton && (
        <Button
          variant={"selected"}
          font={"thin"}
          className="w-full max-w-[20rem] items-center justify-center lg:hidden"
        >
          <Plus className="w-5 h-5" />
          Novo Lançamento
        </Button>
      )}
      {hasTotalTransaction && (
        <section className="flex items-center justify-center w-auto gap-2 lg:self-end">
          <small>Valor de todas transações:</small>
          <h5>R$ VALOR</h5>
        </section>
      )}
      <TablePagination
        quantityData={100}
        limitDataForPage={10}
        onPageChange={() => console.log(" ")}
      />
    </section>
  );
};

export { TableFooter };
