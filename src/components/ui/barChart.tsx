import { formatCurrency } from "@/utils/currencyUtils";
import {
  ResponsiveContainer,
  BarChart as BarChartRecharts,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { BarChartLegend } from "./barChartLegend";

interface BarChartData {
  name: string;
  receiving: number;
  payments: number;
}

export interface BarChartProps {
  data: BarChartData[];
}

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { name, receiving, payments } = payload[0].payload;

    return (
      <section className="flex flex-col gap-1 w-full bg-white border border-soft-grey-2 rounded px-2">
        <h5>{name}</h5>
        <div className="flex items-center gap-1 justify-between w-full">
          <span className="text-grey-2 text-xs">Recebimentos:</span>
          <span className="font-semibold text-xs">
            {formatCurrency(Number(receiving))}
          </span>
        </div>
        <div className="flex items-center gap-1 justify-between w-full">
          <span className="text-grey-2 text-xs">Pagamentos:</span>
          <span className="font-semibold text-xs">
            {formatCurrency(Number(payments))}
          </span>
        </div>
      </section>
    );
  }

  return null;
};

const BarChart = ({ data }: BarChartProps) => {
  const grey = "#4D4E4C";
  const yellow = "#F6BE25";
  return (
    <section className="flex flex-col items-center justify-center">
      <ResponsiveContainer className="!w-[98vw] !h-[10.875rem] md:!h-[14.75rem]">
        <BarChartRecharts
          className="!right-[30px]"
          data={data}
          barGap="100%"
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: -10,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: grey, fontSize: 12 }}
            tickFormatter={(value) => value.slice(0, 3)}
            type="category"
          />
          <YAxis
            tick={{ fill: grey, fontSize: 12 }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="receiving" barSize={30} fill={yellow} />
          <Bar dataKey="payments" barSize={30} fill={grey} />
        </BarChartRecharts>
      </ResponsiveContainer>
      <BarChartLegend />
    </section>
  );
};

export { BarChart };
