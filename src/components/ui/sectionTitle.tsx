import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  titleColor?: string;
  icon?: ReactNode;
}

const SectionTitle = ({ title, titleColor, icon }: SectionTitleProps) => {
  return (
    <section className="flex items-center justify-between w-full pb-1 lg:pb-2 border-b border-b-soft-grey-2">
      <h3 className={`text-${titleColor}`}>{title}</h3>
      {icon}
    </section>
  );
};

export { SectionTitle };
