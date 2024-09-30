"use client";
import { EntriesTable } from "@/components/ui/entriesTable";
import useEntriesStore from "@/zustand/useEntriesStore";
import { useEffect } from "react";

export default function Home() {
  const { entries, fetchEntriesFromAPI } = useEntriesStore();

  useEffect(() => {
    fetchEntriesFromAPI();
  }, [fetchEntriesFromAPI]);

  return (
    <main className="bg-soft-grey p-4">
      <EntriesTable data={entries} />
    </main>
  );
}
