import { tableDataColor } from "@/constants";
import { TableActionTd } from "./tableActionTd";

interface TableBodyProps<T> {
  data: T[];
  hasActions?: boolean;
}

const renderTableCells = <T extends object>(item: T) => {
  return Object.values(item).map((value, index) => (
    <td
      key={index}
      className={`${
        tableDataColor[value] ?? "text-grey"
      } text-center px-4 pb-1 pt-5 font-semibold text-base border-b border-b-soft-grey-2 min-w-[100vw] md:min-w-[50vw] lg:min-w-full`}
    >
      {value}
    </td>
  ));
};

const TableBody = <T extends object>({
  data,
  hasActions = true,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {renderTableCells(item)}
          {hasActions && <TableActionTd />}
        </tr>
      ))}
    </tbody>
  );
};

export { TableBody };
