"use client";

import { ProfitCard } from "@/components/ui/profitCard";


export default function Home() {
  return <>
  <ProfitCard yellow={"cardOne"} />
  <ProfitCard yellow={"cardTwo"} />
  <ProfitCard grey={"cardOne"} textColor="white" />
  <ProfitCard grey={"cardTwo"} textColor="white" /></>;
}
