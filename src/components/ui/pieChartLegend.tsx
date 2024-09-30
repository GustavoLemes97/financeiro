interface ChartLegendData {
  name: string;
  fill: string;
}

interface PieChartLegendProps {
  data: ChartLegendData[];
}

const PieChartLegend = ({ data }: PieChartLegendProps) => {
  const colorVariants: { [key: string]: string } = {
    "#F6BE25": "bg-[#F6BE25]",
    "#4D4E4C": "bg-[#4D4E4C]",
    "#317FB5": "bg-[#317FB5]",
    "#BD4040": "bg-[#BD4040]",
    "#2B9B35": "bg-[#2B9B35]",
  };

  return (
    <section className="flex flex-col lg:gap-2">
      {data.map(({ name, fill }) => (
        <section
          className="flex flex-row items-center gap-2 relative group"
          key={name}
        >
          <span
            className={`${colorVariants[fill]} inline-block w-[0.9375rem] h-[0.625rem]`}
          ></span>
          <small className="w-[10ch] block overflow-hidden overflow-ellipsis whitespace-nowrap">
            {name}
          </small>
          <span className="absolute invisible whitespace-nowrap left-1/2 bottom-full transform -translate-x-1/2 mt-1 bg-white border border-soft-grey-2 text-grey text-xs rounded py-1 px-2 group-hover:visible transition-opacity duration-300">
            {name}
          </span>
        </section>
      ))}
    </section>
  );
};

export { PieChartLegend };
