import { useState } from "react";

interface UsePaginationProps {
  totalPages: number;
  initialPage?: number;
}

const usePagination = ({ totalPages, initialPage = 1 }: UsePaginationProps) => {
  const [activePage, setActivePage] = useState(initialPage);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  const nextPage = () => {
    if (activePage < totalPages) {
      setActivePage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (activePage > 1) {
      setActivePage((prevPage) => prevPage - 1);
    }
  };

  const getPaginationItems = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        totalPages <= 5 ||
        i === 1 ||
        i === totalPages ||
        (i >= activePage - 1 && i <= activePage + 1)
      ) {
        pages.push(i);
      } else if (i === activePage - 2 || i === activePage + 2) {
        pages.push("ellipsis");
      }
    }

    return pages;
  };

  return {
    activePage,
    changePage,
    nextPage,
    previousPage,
    getPaginationItems,
  };
};

export { usePagination };
