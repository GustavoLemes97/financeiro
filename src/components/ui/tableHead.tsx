import { ArrowDownUp } from "lucide-react";

interface TableHeadProps {
  theadTitles: string[];
  hasActions?: boolean;
}

const TableHead = ({ theadTitles, hasActions }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {theadTitles.map((title) => (
          <th key={title} className="bg-white px-4 py-3 text-grey-2">
            <div className="inline-flex items-center justify-center gap-2">
              {title}
              <ArrowDownUp className="w-5 h-5" />
            </div>
          </th>
        ))}
        {hasActions && <th className="bg-white  px-4 py-3" />}
      </tr>
    </thead>
  );
};

export { TableHead };
