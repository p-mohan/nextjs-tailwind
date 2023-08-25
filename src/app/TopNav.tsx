"use client";
import React, { useState } from "react";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
type TopNavProps = {};

const TopNav: React.FC<TopNavProps> = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between p-4">
      <div className="flex items-center gap-5">
        <HiOutlineMenu size={26} />{" "}
        <div className="flex items-center gap-1">
          <PiYoutubeLogoDuotone size={35} className="text-red-700" />
          <span className="text-xl font-semibold">NextTube</span>
        </div>
      </div>
      <div className="min-w-[300px] lg:w-[600px] hidden md:flex">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 bg-zinc-900 border-[1px] border-zinc-700 placeholder:text-zinc-400 
           rounded-bl-full rounded-tl-full
           focus:outline-none focus:border-sky-500 "
        />
        <div className="bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full">
          <BiSearch size={20} />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="hover:bg-zinc-700 cursor-pointer py-2 rounded-full p-4 flex items-center">
          <BsBell size={20} />
        </div>
      </div>
    </div>
  );
};
export default TopNav;
