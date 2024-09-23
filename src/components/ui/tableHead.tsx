import { ArrowDownUp } from "lucide-react";

interface TableHeadProps {
  theadData: string[];
}

const TableHead = ({ theadData }: TableHeadProps) => {
  return (
    <thead>
      <tr className="flex w-full justify-between">
        {theadData.map((title) => (
          <th
            key={title}
            className="flex gap-2 items-center justify-center px-4 py-3 text-grey-2"
          >
            {title}
            {title !== "" ? <ArrowDownUp className="w-5 h-5" /> : ""}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export { TableHead };
