"use client";
import React from "react";
import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
interface MenuItem {
  icon: IconType;
  text: string;
  pathname: string;
}
const MenuItems: Array<MenuItem> = [
  {
    icon: HiHome,
    text: "Home",
    pathname: "/",
  },
];
const SideNav = () => {
  const pathname = usePathname();
  return (
    <div className="p-[1px] lg:px-2 lg:w-[160px]">
      {MenuItems.map((item) => (
        <div
          className={`flex flex-col lg:flex-row gap-1 p-2 items-center lg:gap-3 hover:bg-zinc-600 rounded-lg ${
            item.pathname === pathname && "bg-zinc-600 hover:bg-zinc-500"
          }`}
        >
          <item.icon size={30} />
          <span className="text-xs lg:text-base">{item.text}</span>
        </div>
      ))}
    </div>
  );
};
export default SideNav;
