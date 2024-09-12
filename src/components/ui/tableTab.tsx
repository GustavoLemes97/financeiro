import { usePathname } from "next/navigation";
import { Link } from "./link";

const TableTab = () => {
  const pathname = usePathname();

  return (
    <section className="flex items-center justify-between w-full md:justify-normal md:border-b md:border-b-soft-grey">
      <Link
        className="md:rounded-t-lg md:rounded-b-none md:py-2 md:px-4"
        variant={pathname !== "/pagamentos" ? "selected" : "unselected"}
        href={"/recebimentos"}
        target="_self"
      >
        Recebimentos
      </Link>
      <Link
        className="text-grey md:rounded-t-lg md:rounded-b-none md:py-2 md:px-4"
        variant={pathname === "/pagamentos" ? "selected" : "unselected"}
        href={"/pagamentos"}
        target="_self"
      >
        Pagamentos
      </Link>
    </section>
  );
};

export { TableTab };
