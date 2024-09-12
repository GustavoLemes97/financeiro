import { CircleArrowUp, CircleArrowDown, CircleMinus } from "lucide-react"; // Importando ícone para queda também

interface ProfitTextProps {
  oldMonthTotal: number;
  currentMonthTotal: number;
}

const ProfitText = ({ oldMonthTotal, currentMonthTotal }: ProfitTextProps) => {
  const hasProfit = currentMonthTotal > oldMonthTotal;
  const isEqual = currentMonthTotal === oldMonthTotal;
  const percentageChange =
    ((currentMonthTotal - oldMonthTotal) / oldMonthTotal) * 100;

  return (
    <>
      {isEqual ? (
        <section className="flex items-center gap-2">
          <CircleMinus className="text-grey w-5 h-5" />
          <small className="text-grey">
            Não houve aumentos / quedas neste período.
          </small>
        </section>
      ) : (
        <section className="flex items-center gap-2">
          {hasProfit ? (
            <>
              <CircleArrowUp className="text-green w-5 h-5" />
              <small className="text-green">
                Aumento de {percentageChange.toFixed(2)}%
              </small>
            </>
          ) : (
            <>
              <CircleArrowDown className="text-red w-5 h-5" />
              <small className="text-red">
                Queda de {Math.abs(percentageChange).toFixed(2)}%
              </small>
            </>
          )}
        </section>
      )}
    </>
  );
};

export { ProfitText };
