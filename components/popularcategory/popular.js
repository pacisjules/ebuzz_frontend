import React, {useState} from "react";
import Menus from "../menus";
import { Font_ubuntu, Font_inter, Font_oreo } from "../my_font";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

function Popular() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="hidden lg:flex  flex-col  w-10/12 ">
      <div>
        <h1 className={`text-[26px] font-bold mb-4`}>Popular Categories</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Menus.map((item) => {
          const subs = item.sub;
          return (
            <div key={item.id}>
              <div className="flex items-center gap-2 mt-2">
                <h1 className="font-bold text-red-700">{item.icon}</h1>
                <h1 className={`font-bold `}>{item.menu}</h1>
              </div>
              <div>
                {subs.map((sub) => {
                  return (
                    <div key={sub.id}>
                      <Link
                        href={"#"}
                        className={`${Font_inter.className} text-sm  hover:text-blue-700 cursor-pointer `}
                      >
                        {sub.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <h1
                  className={`${Font_inter.className} text-red-600 text-sm cursor-pointer font-semibold`}
                >
                  All in {item.menu}
                </h1>
                <GoArrowRight className="text-red-600 font" />
              </div>
            </div>
          );
        })}
      </div>
      
      
      <div
        className={`bg-green-100 rounded-lg p mt-4 flex flex-row items-center justify-between cursor-pointer`}
      >
        <div
          className={`bg-green-100 rounded-lg  flex flex-row items-center gap-2`}
        >
          <Image
            src={"/assets/imgs/verified-badge-new-blue.svg"}
            alt="flag"
            width={80}
            height={80}
            className="mr-2"
          />
          <h2 className="font-bold text-gray-500">Got a verified badge yet?</h2>
          <h3 className="text-gray-500 text-sm">Get more visibility</h3>
          <div className="w-[1px] h-[20px] bg-gray-500" />
          <h3 className="text-gray-500 text-sm">Enhance your credibity</h3>
        </div>
        <div>
          <Button
            variant="outline"
            className="mr-8 bg-white text-gray-500 border-gray-400 w-[150px]"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
    
    <div className={` lg:hidden md:flex sm:flex bg-green-100 w-[95%] rounded-lg p mt-4 flex flex-row items-center justify-between cursor-pointer`}>
        <div
          className={`bg-green-100 rounded-lg  flex flex-row items-center gap-2 flex-wrap p-4`}
        >
          <Image
            src={"/assets/imgs/verified-badge-new-blue.svg"}
            alt="flag"
            width={80}
            height={80}
            className="mr-2"
          />
          <h2 className="font-bold text-gray-500">Got a verified badge yet?</h2>
          <h3 className="text-gray-500 text-sm">Get more visibility</h3>
          <div className="w-[1px] h-[20px] bg-gray-500" />
          <h3 className="text-gray-500 text-sm">Enhance your credibity</h3>
        </div>
        <div className="p-4">
        <GoArrowRight className="text-gray-800 text-[42px]" />
        </div>
      </div>


    </div>
    
  );
}

export default Popular;
