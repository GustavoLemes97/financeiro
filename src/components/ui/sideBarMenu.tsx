import { Link } from "./link";
import { MenuItem } from "@/app/constants";

interface SideBarMenuProps {
  items: MenuItem[];
  activePage?: string;
  isExpanded: boolean;
}
const SideBarMenu = ({
  items,
  activePage = "Dashboard",
  isExpanded,
}: SideBarMenuProps) => {
  return (
    <section className="flex flex-col mx-4 lg:mx-0">
      {items.map(({ name, href, icon }) => (
        <Link
          className="h-12"
          target="_self"
          key={name}
          href={href}
          variant={activePage === name ? "selected" : "default"}
        >
          {icon}
          <div className={`${!isExpanded && "lg:hidden"}`}>{name}</div>
        </Link>
      ))}
    </section>
  );
};

export { SideBarMenu };
