import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { LucideLayoutDashboard as Dashboard, Filter, Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={()=> console.log("teste")}>Botão</Button>
      <Button font={"thin"}>Botão</Button>
      <Button variant={"selected"}>Botão selecionado</Button>
      <Button><Dashboard width={20} />Botão com ícone</Button>
      <Button><Dashboard width={20} />Botão com ícone</Button>
      <Button variant={"selected"}><Dashboard width={20} />Botão selecionado com ícone</Button>
      <Button variant={"filter"}><Filter width={20} color="#D3CCCC" />Botão selecionado com ícone</Button>
      <Button variant={"grey"}><Filter width={20} color="#D3CCCC" />Botão selecionado com ícone</Button>
      <Button variant={"selected"}><Dashboard width={20} /></Button>
      <Button variant={"small"}><Plus width={20} /></Button>
      <Link href={"/teste"}>Link</Link>
      <Link href={"/teste"}><Dashboard width={20} />Link com ícone</Link>
    </main>
  );
}
