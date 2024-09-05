"use client";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-4">
      <InputWithLabel
        labelName={"Input"}
        onChange={() => console.log("teste")}
        type={"email"}
        id={"email"}
        placeholder={"Input"}
      />

      <hr />

      <Select
        items={["Cartão", "Dinheiro", "Aluguel"]}
        label={"Tipos de conta"}
        placeholder={"Tipos de conta"}
        onChange={() => console.log("teste")}
      />
    </main>
  );
}
