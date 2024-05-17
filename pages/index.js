import React, { useState } from "react";
import Image from "next/image";
import { Font_ubuntu, Font_inter } from "@/components/my_font";
import Home_Popular from "@/components/home_popular";
import { useTheme } from "next-themes";
import { GoArrowRight } from "react-icons/go";
import Searcher from "@/components/searcher/searcher";
import Popular from "@/components/popularcategory/popular";
export default function Home() {
  const { setTheme, theme } = useTheme();
  return (
    <><Searcher />
    <Popular />
    <div className="w-full flex flex-col justify-center items-center">
      <div className="hidden lg:flex  flex-col  w-[83%]   mt-4 items-center">
        {Home_Popular.map((item) => {
          const list = item.sub;
          return (
            <div key={item.id} className="w-full">
              <h1 className="text-[26px] font-bold mb-4">
                Popular in {item.menu}
              </h1>

              <div className="w-full flex overflow-x-auto scroll-smooth p-4 " style={{
                  
                }}>
                {list.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="group duration-300 shrink-0  ease-in-out w-[250px] mr-4 rounded-md  border-[#374151] border-[1px] hover:bg-[#374151]  hover:scale-[1.05] hover:border-red-500 hover:shadow-2xl hover:cursor-pointer p-2"
                    >
                      <Image
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
                        src={item.image_link}
                        alt={item.title}
                        width={300}
                        height={300}
                        unoptimized
                        className=" rounded-md w-[100%] h-[200px] object-cover object-center"
                      />
                      <h1
                        className={`text-red-600 font-bold text-lg mt-2 group-hover:text-orange-500 ${Font_inter.className}`}
                      >
                        RWF {item.price.toLocaleString()}
                      </h1>
                      <h1
                        className={` font-bold text-lg ${Font_inter.className} text-[14px]`}
                      >
                        {" "}
                        {item.owner}
                      </h1>
                      <h1
                        className={`text-gray-400 mt ${Font_inter.className} text-[13px]`}
                      >
                        {" "}
                        {item.title}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:flex sm:flex lg:hidden  flex-col   w-[95%] mt-4 mb-12">
        {Home_Popular.map((item) => {
          const list = item.sub;
          return (
            <div key={item.id} className="w-full">
              <div className={`flex flex-row justify-between items-center  `}>
                <h1 className="text-[20px] font-bold mb-4 ml-2 ">
                  Popular in {item.menu}
                </h1>
                <GoArrowRight className="text-red-600 text-[20px] mb-4 mr-4 " />
              </div>
              <div
                className="w-full flex overflow-x-auto scroll-smooth "
                style={{
                  scrollbarWidth: "none",
                }}
              >
                {list.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="group shrink-0 duration-300 ease-in-out rounded-md mr-2   border-[1px]  hover:cursor-pointer p-2  w-[250px]"
                    >
                      <Image
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
                        src={item.image_link}
                        alt={item.title}
                        width={300}
                        height={300}
                        unoptimized
                        className=" rounded-md w-[100%] h-[200px] object-cover object-center"
                      />
                      <h1
                        className={`text-red-600 font-bold text-lg mt-2 group-hover:text-orange-500 ${Font_inter.className}`}
                      >
                        RWF {item.price.toLocaleString()}
                      </h1>
                      <h1
                        className={` font-bold text-lg ${Font_inter.className} text-[14px]`}
                      >
                        {" "}
                        {item.owner}
                      </h1>
                      <h1
                        className={`text-gray-400 mt ${Font_inter.className} text-[13px]`}
                      >
                        {" "}
                        {item.title}
                      </h1>
                    </div>
                  );
                })}
                <div
                  className={` flex flex-col justify-center p-2 rounded-md `}
                >
                  <div
                    className={`w-[50px] h-[50px] rounded-full shadow-md bg-red-600 flex justify-center items-center`}
                  >
                    <GoArrowRight className=" text-[20px]" />
                  </div>
                  <p
                    className={`text-center text-sm mt-2 ${Font_inter.className} font-bold`}
                  >
                    More
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
