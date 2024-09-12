import { useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/paginationShad";
import { usePagination } from "@/hooks/usePagination";

interface TablePaginationProps {
  quantityData: number;
  limitDataForPage: number;
  initialPage?: number;
  onPageChange: (page: number) => void;
}

const TablePagination = ({
  quantityData,
  limitDataForPage,
  initialPage = 1,
  onPageChange,
}: TablePaginationProps) => {
  const totalPages = Math.ceil(quantityData / limitDataForPage);

  const { activePage, changePage, nextPage, previousPage, getPaginationItems } =
    usePagination({
      totalPages,
      initialPage,
    });

  const startIndex = (activePage - 1) * limitDataForPage + 1;
  const endIndex = Math.min(activePage * limitDataForPage, quantityData);

  useEffect(() => {
    onPageChange(activePage);
  }, [activePage, onPageChange]);

  const renderPaginationItems = () => {
    return getPaginationItems().map((item, index) =>
      item === "ellipsis" ? (
        <PaginationItem key={index}>
          <PaginationEllipsis />
        </PaginationItem>
      ) : (
        <PaginationItem key={index}>
          <PaginationLink
            href="#"
            isActive={item === activePage}
            onClick={() => changePage(item as number)}
          >
            {item}
          </PaginationLink>
        </PaginationItem>
      )
    );
  };

  return (
    <section
      className={`${
        totalPages > 0
          ? "flex w-full items-center justify-center lg:justify-between"
          : "hidden"
      }`}
    >
      <span className="hidden lg:block">
        Mostrando {startIndex} - {endIndex} de {quantityData} resultados
      </span>
      <section className="flex items-center gap-4">
        <span className="hidden lg:block">
          Página {activePage} de {totalPages}
        </span>
        <Pagination>
          <PaginationContent>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={previousPage}
                className={
                  activePage === 1
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={nextPage}
                className={
                  activePage === totalPages
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </section>
  );
};

export { TablePagination };
