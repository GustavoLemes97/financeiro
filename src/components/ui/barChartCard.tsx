import { BarChart, BarChartProps } from "./barChart";
import { SectionTitle } from "./sectionTitle";

interface BarChartCardProps extends BarChartProps {
  title: string;
}

const BarChartCard = ({ title, data }: BarChartCardProps) => {
  return (
    <section className="flex flex-col items-start w-full py-4 px-5 gap-4 bg-white rounded-2xl">
      <SectionTitle title={title} />
      <BarChart data={data} />
    </section>
  );
};

export { BarChartCard };
