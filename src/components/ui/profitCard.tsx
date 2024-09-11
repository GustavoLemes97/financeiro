import { CircleArrowUp, CircleArrowDown, CircleMinus } from "lucide-react"; // Importando ícone para queda também
import { ProfitText } from "./profitText";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const profitCardVariants = cva(
  "flex flex-col items-start gap-4 w-[17rem] h-40 rounded-2xl px-5 py-4 lg:w-[21rem] lg:h-[14.3125rem] lg:py-6 bg-cover bg-no-repeat",
  {
    variants: {
      yellow: {
        cardOne: "bg-yellow-card-1",
        cardTwo: "bg-yellow-card-2",
      },
      grey: {
        cardOne: "bg-grey-card-1",
        cardTwo: "bg-grey-card-2",
      },
    },
  }
);

interface ProfitCardProps extends VariantProps<typeof profitCardVariants> {
  textColor?: string;
}

const ProfitCard = ({ yellow, grey, textColor }: ProfitCardProps) => {
  return (
    <section className={cn(profitCardVariants({ yellow, grey }))}>
      <p className={`text-${textColor}`}>Title</p>
      <div className="flex flex-col flex-start gap-2">
        <h2 className={`text-${textColor}`}>R$ Value</h2>
        <ProfitText oldMonthTotal={10} currentMonthTotal={13} />
      </div>
    </section>
  );
};

export { ProfitCard };
