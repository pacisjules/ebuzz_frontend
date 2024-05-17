import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Menus from "../menus";
import { GoSearch } from "react-icons/go";
import { Font_ubuntu, Font_inter, Font_oreo } from "../my_font";

function Searcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="hidden lg:flex w-10/12 m-4 rounded-md bg-center bg-cover bg-no-repeat bg-[url('/assets/imgs/hero_image_7.jpeg')]  flex-col justify-between items-center p-10 border-slate-200 mx-auto">
      <div className="flex justify-center">
        <h1 className={`text-white font-bold text-2xl text-shadow-md`}>
          The best place to buy your house, sell your car or find a job in
          Africa
        </h1>
      </div>

      <div className="bg-[#0000008b] w-full flex flex-col justify-between p-2 rounded-md mt-8">
        <div className="flex flex-row justify-between items-center p-4">
          <div>
            <p className="text-white font-bold text-[14px]">Searching in</p>
          </div>

          <div className={`flex flex-row justify-between gap-4 text-white font-bold text-[14px] items-center`}>
            <p className="text-white font-bold text-[14px] bg-red-600 pl-4 pr-4 pt-2 pb-2 rounded-full hover:bg-white hover:text-red-600 cursor-pointer duration-200 ease-in-out">
              All
            </p>
            {Menus.filter(menu => menu.menu !== 'Furniture & Garden' && menu.menu !== 'Mobile & Tablets').map((item) => (
              <p key={item.id}
                className={`${Font_inter.className} transition-all hover:bg-red-600 hover:rounded-full cursor-pointer pl-2 pr-2 pt-2 pb-2 rounded-full text-sm duration-200 ease-in-out`}
              >
                {item.menu}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between p-2 ">
          <div className={`flex flex-row ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'} p-2 w-[85%] justify-between content-center rounded-md`}>
            <input
              type="text"
              placeholder="Search for anything..."
              className={`w-[90%]  text-[16px] outline-0 ${Font_inter.className} ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}
            />
            <GoSearch className="text-[30px] text-gray-400" />
          </div>
          <div className="flex flex-row w-[15%] ml-4">
            <Button
              variant="outline"
              className="text-white hover:text-white bg-red-600 text-[16px] border-red-600 w-full h-full hover:border-red-800 hover:bg-red-800 "
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searcher;
