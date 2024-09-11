import { formatDate } from "@/utils/dateUtils";
import { SectionTitle } from "./sectionTitle";
import { HandCoins } from "lucide-react";

export interface Warning {
  name: string;
  date: Date;
}

interface AlertCardProps {
  title: string;
  warnings: Warning[];
}

const AlertCard = ({ title, warnings }: AlertCardProps) => {
  const limitedWarnings = warnings.slice(0, 4);

  return (
    <section className="flex flex-col items-start w-[19.652rem] py-4 px-5 gap-4 bg-white rounded-2xl">
      <SectionTitle
        title={title}
        icon={<HandCoins className="w-6 h-6 text-grey" />}
      />
      <ul className="flex flex-col items-start gap-4">
        {limitedWarnings.map(({ name, date }) => (
          <li key={name} className="flex flex-col items-start">
            <p>{name}</p>
            <small>{formatDate(date)}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { AlertCard };
