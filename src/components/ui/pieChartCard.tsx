import { SectionTitle } from "./sectionTitle";
import { PieChart, PieChartProps } from "./pieChart";
import { formatCurrency } from "@/utils/currencyUtils";

interface PieChartCardProps extends PieChartProps {
  title: string;
}

const PieChartCard = ({ title, data }: PieChartCardProps) => {
  const totalValue = formatCurrency(
    data.reduce((accumulator, current) => {
      return accumulator + current.value;
    }, 0)
  );
  return (
    <section className="flex flex-col items-start w-full max-w-[20.5rem] md:max-w-[23.5rem] lg:max-w-[26rem] lg:h-[19.7rem] py-4 px-5 gap-4 bg-white rounded-2xl">
      <SectionTitle title={title} />
      <div>
        <p>Total</p>
        <p>{totalValue}</p>
      </div>
      <PieChart data={data} />
    </section>
  );
};

export { PieChartCard };
