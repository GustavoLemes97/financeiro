"use client";
import { mainPages, configPages } from "@/app/constants";
import { useState } from "react";
import { SideBarHeader } from "./sideBarHeader";
import { SideBarMenu } from "./sideBarMenu";

interface SideBarProps {
  activePage: string;
}
const SideBar = ({ activePage = "Dashboard" }: SideBarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <nav
      className={`transition-all duration-700 ease-in-out transform ${
        isExpanded ? "lg:w-[26rem]" : "w-full lg:w-[6.75rem]"
      } flex flex-col items-start h-screen lg:px-5 lg:pt-6 lg:bg-grey`}
    >
      <SideBarHeader
        activePage={activePage}
        isExpanded={isExpanded}
        onClick={toggleMenu}
      />
      <section
        className={`
    ${isExpanded ? "relative left-0 top-0" : "relative left-[-100%]"} 
    transition-all duration-700 ease-in-out transform bg-grey flex flex-col justify-between h-screen w-full md:max-w-[22.5rem] lg:max-w-[26rem] py-8
    lg:relative lg:left-0 lg:top-0
  `}
      >
        <SideBarMenu
          items={mainPages}
          activePage={activePage}
          isExpanded={isExpanded}
        />
        <SideBarMenu items={configPages} isExpanded={isExpanded} />
      </section>
    </nav>
  );
};

export { SideBar };
