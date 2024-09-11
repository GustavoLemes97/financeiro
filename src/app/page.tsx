"use client";

import { SectionTitle } from "@/components/ui/sectionTitle";
import { CircleAlertIcon } from "lucide-react";

export default function Home() {
  return (
    <SectionTitle
      title={"TESTE"}
      icon={<CircleAlertIcon className="w-6 h-6" />}
    />
  );
}
