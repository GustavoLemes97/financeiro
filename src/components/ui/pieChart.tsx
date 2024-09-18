import { TooltipProps } from "recharts";
import {
  Pie,
  PieChart as PieChartRecharts,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { PieChartLegend } from "./pieChartLegend";
import { formatCurrency } from "@/utils/currencyUtils";

interface PieChartData {
  name: string;
  value: number;
}

export interface PieChartProps {
  data: PieChartData[];
}

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    const color = payload[0].payload.fill;

    return (
      <div className="bg-white border border-soft-grey-2 rounded px-2">
        <section className="flex items-center gap-1 w-full">
          <span
            className="rounded-full inline-block border border-soft-grey-2"
            style={{ backgroundColor: color, width: "10px", height: "10px" }}
          ></span>
          <div className="flex items-center gap-1 justify-between w-full">
            <span className="text-grey-2 whitespace-nowrap">{name}:</span>
            <span className="font-semibold">
              {formatCurrency(Number(value))}
            </span>
          </div>
        </section>
      </div>
    );
  }

  return null;
};

const getFillColor = (index: number) => {
  const colors = ["#F6BE25", "#4D4E4C", "#317FB5", "#BD4040", "#2B9B35"];
  return colors[index % colors.length];
};

const PieChart = ({ data }: PieChartProps) => {
  const dataWithFill = data.map((item, index) => ({
    ...item,
    fill: getFillColor(index),
  }));

  return (
    <section className="flex w-full justify-between items-end">
      <ResponsiveContainer className="!w-[160px] !h-[124px] lg:!w-[250px] lg:!h-[170px] aspect-video">
        <PieChartRecharts className="!right-[20px] lg:!right-[45px]">
          <Pie
            data={dataWithFill}
            dataKey="value"
            nameKey="name"
            outerRadius="100%"
            stroke="#d3cccc"
            strokeWidth={0.1}
            className="outline-none"
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChartRecharts>
      </ResponsiveContainer>
      <PieChartLegend
        data={dataWithFill.map(({ name, fill }) => ({ name, fill }))}
      />
    </section>
  );
};

export { PieChart };
