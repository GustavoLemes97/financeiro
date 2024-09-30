import {
  LucideLayoutDashboard as Dashboard,
  ArrowDownUp,
  ChartNoAxesCombined,
  FileSpreadsheet,
  HandCoins,
  RefreshCcw,
  SquareChartGantt,
  Settings,
} from "lucide-react";

export interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const mainPages: MenuItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Dashboard width={20} />,
  },
  {
    name: "Lançamentos",
    href: "/lancamentos",
    icon: <RefreshCcw width={20} />,
  },
  {
    name: "Controle de Pagamento",
    href: "/controle-de-pagamento",
    icon: <HandCoins width={20} />,
  },
  {
    name: "Demonstração de Resultados",
    href: "/demonstracoes-de-resultados",
    icon: <FileSpreadsheet width={20} />,
  },
  {
    name: "Fluxo de Caixa",
    href: "/fluxo-de-caixa",
    icon: <ArrowDownUp width={20} />,
  },
  {
    name: "Análise de Resultados",
    href: "/analise-de-resultados",
    icon: <ChartNoAxesCombined width={20} />,
  },
];

export const configPages: MenuItem[] = [
  {
    name: "Plano de Contas",
    href: "/plano-de-contas",
    icon: <SquareChartGantt width={20} />,
  },
  {
    name: "Configurações de Usuário",
    href: "/configurações-de-usuario",
    icon: <Settings width={20} />,
  },
];
