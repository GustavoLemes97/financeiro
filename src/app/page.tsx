"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { Select } from "@/components/ui/select";
import { TablePagination } from "@/components/ui/tablePagination";

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <main className="p-10 flex flex-col gap-4">
      <TablePagination
        onPageChange={handlePageChange}
        quantityData={102}
        limitDataForPage={10}
      />
    </main>
  );
}
