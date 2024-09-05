import { AlignRight, Menu } from "lucide-react";
import { LogoText, Logo } from "@/components/svg";
import { Link } from "./link";
import { Button } from "./button";

interface SideBarHeaderProps {
  activePage: string;
  isExpanded: boolean;
  onClick: React.MouseEventHandler;
}
const SideBarHeader = ({
  activePage = "Dashboard",
  isExpanded,
  onClick,
}: SideBarHeaderProps) => {
  return (
    <section className="bg-grey flex items-center justify-between w-full px-4">
      <section className="flex items-center justify-between w-full lg:flex-row-reverse">
        <div className="flex items-center gap-4 h-16">
          <Button className="p-0" onClick={onClick}>
            {isExpanded ? (
              <AlignRight className="w-10 h-10" />
            ) : (
              <Menu className="w-10 h-10" />
            )}
          </Button>
          <h1 className={`${isExpanded ? "hidden" : "text-white"} lg:hidden`}>
            {activePage}
          </h1>
        </div>
        <Link
          className={`${!isExpanded && "lg:hidden"} p-0`}
          target="_self"
          href={"/dashboard"}
        >
          <LogoText
            className={`${
              !isExpanded && "opacity-0 translate-x-2/3"
            } transition-all duration-700 ease-in-out transform w-20 h-10 lg:w-40 lg:h-16`}
          />
          <Logo className="w-10 h-10 lg:w-16 lg:h-16" />
        </Link>
      </section>
    </section>
  );
};

export { SideBarHeader };
