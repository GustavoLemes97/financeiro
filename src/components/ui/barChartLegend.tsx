const BarChartLegend = () => {
  const data = [
    {
      name: "Recebimentos",
      color: "bg-yellow",
    },
    {
      name: "Pagamentos",
      color: "bg-grey",
    },
  ];
  return (
    <section className="flex gap-4 pt-2">
      {data.map(({ name, color }) => (
        <section
          key="name"
          className="flex flex-row items-center gap-2 relative group"
        >
          <span
            className={`${color} inline-block w-[0.9375rem] h-[0.625rem]`}
          ></span>
          <small className="block overflow-hidden whitespace-nowrap">
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

export { BarChartLegend };
