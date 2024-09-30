import { PencilLine, Trash2 } from "lucide-react";
import { Button } from "./button";

interface TableActionTdProps {}

const TableActionTd = ({}: TableActionTdProps) => {
  return (
    <td className="px-4 pb-1 pt-5 border-b border-b-soft-grey-2">
      <div className="flex items-center justify-center gap-4">
        <Button variant={"ghost"}>
          <PencilLine className="text-blue" />
        </Button>
        <Button variant={"ghost"}>
          <Trash2 className="text-red" />
        </Button>
      </div>
    </td>
  );
};

export { TableActionTd };
