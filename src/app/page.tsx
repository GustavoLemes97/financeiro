"use client";
import { Input } from "@/components/ui/input";
import { InputWithLabel } from "@/components/ui/inputWithLabel";

export default function Home() {
  return (
    <main className="p-0">
      <InputWithLabel
        labelName={"Input"}
        onChange={() => console.log("teste")}
        type={"email"}
        id={"email"}
        placeholder={"Input"}
      />
      <Input
        onChange={() => console.log("teste")}
        type={"password"}
        id={"password"}
        placeholder={"Password"}
      />
    </main>
  );
}
