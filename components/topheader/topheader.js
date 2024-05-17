import React, { useState } from "react";
import Theme from "../theme/theme";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { CiHome, CiSearch, CiViewList, CiUser } from "react-icons/ci";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
function Topheader() {
  const { setTheme, theme } = useTheme();
  const [all_countries, setAllCountries] = useState([
    {
      id: 1,
      name: "Rwanda",
      flagsrc: `/assets/imgs/flags/rw.png`,
    },

    {
      id: 2,
      name: "USA",
      flagsrc: `/assets/imgs/flags/us.png`,
    },

    {
      id: 3,
      name: "Canada",
      flagsrc: `/assets/imgs/flags/ca.png`,
    },

    {
      id: 4,
      name: "Sweden",
      flagsrc: `/assets/imgs/flags/se.png`,
    },

    {
      id: 5,
      name: "China",
      flagsrc: `/assets/imgs/flags/cn.png`,
    },

    {
      id: 6,
      name: "Dubai",
      flagsrc: `/assets/imgs/flags/ae.png`,
    },

    // Other African
    {
      id: 7,
      name: "Burundi",
      flagsrc: `/assets/imgs/flags/bi.png`,
    },
    {
      id: 8,
      name: "Uganda",
      flagsrc: `/assets/imgs/flags/ug.png`,
    },
    {
      id: 9,
      name: "Kenya",
      flagsrc: `/assets/imgs/flags/ke.png`,
    },
    {
      id: 10,
      name: "Tanzania",
      flagsrc: `/assets/imgs/flags/tz.png`,
    },
    {
      id: 11,
      name: "RDC",
      flagsrc: `/assets/imgs/flags/cd.png`,
    },
    {
      id: 12,
      name: "South sudan",
      flagsrc: `/assets/imgs/flags/ss.png`,
    },

    {
      id: 13,
      name: "Tchad",
      flagsrc: `/assets/imgs/flags/td.png`,
    },
  ]);

  const [selectedCountry, setSelectedCountry] = useState(1);

  const [mobile_Icons, setAllMobileIcons] = useState([
    {
      id: 1,
      name: "Home",
      icon: <CiHome size={30} className="text-red-300" />,
    },

    {
      id: 2,
      name: "Search",
      icon: <CiSearch size={30} className="text-red-300" />,
    },

    {
      id: 3,
      name: "Post an ad",
      icon: <IoMdAddCircle size={35} className="text-red-600" />,
    },

    {
      id: 4,
      name: "Chats",
      icon: <BsChatText size={28} className="text-red-300" />,
    },

    {
      id: 5,
      name: "Profile",
      icon: <CiUser size={30} className="text-red-300" />,
    },
  ]);

  const [all_Icons, setAllTopIcons] = useState([
    {
      id: 1,
      name: "Notification",
      icon: <IoNotificationsOutline className="text-red-300" />,
    },

    {
      id: 2,
      name: "My Searches",
      icon: <AiOutlineFileSearch className="text-red-300" />,
    },

    {
      id: 3,
      name: "Favorites",
      icon: <AiOutlineHeart className="text-red-300" />,
    },

    {
      id: 4,
      name: "Chats",
      icon: <BsChatText className="text-red-300" />,
    },

    {
      id: 5,
      name: "My ads",
      icon: <CiViewList className="text-red-300" />,
    },
  ]);

  return (
    <div
      className={`w-full lg:border-b ${
        theme === "dark" ? "border-gray-700" : "border-gray-200"
      }`}
    >
      {/* Computer Menu */}
      <div className="hidden lg:flex w-full h-16 flex flex-row justify-between content-center p-4 border-slate-200 mx-auto">
        <div className="flex flex-row justify-between gap-6">
          <div>
            <Image
              src="/assets/imgs/expelogo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center">
                  <Button variant="outline" className="text-gray-700 text-sm">
                    <Image
                      src={
                        all_countries.filter(
                          ({ id }) => id === selectedCountry
                        )[0].flagsrc
                      }
                      alt="flag"
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    {
                      all_countries.filter(
                        ({ id }) => id === selectedCountry
                      )[0].name
                    }
                    <ChevronDownIcon className="h-4 w-4 text-red-600 font-bold ml-2" />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                  All {all_countries.length} countries
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {all_countries.map(({ id, name, flagsrc }) => (
                    <>
                      <DropdownMenuItem
                        key={id}
                        onClick={() => setSelectedCountry(id)}
                        className="flex justify-between content-center cursor-pointer"
                      >
                        <div className="flex flex-row justify-start">
                          <Image
                            src={flagsrc}
                            alt={name}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span
                            className="ml-2"
                            style={{
                              fontWeight:
                                selectedCountry == id ? "bold" : "normal",
                            }}
                          >
                            {name}
                          </span>
                        </div>
                        <span>
                          {selectedCountry == id ? (
                            <CheckIcon className="h-4 w-4 text-red-600 font-bold" />
                          ) : null}
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  ))}
                  <DropdownMenuItem>
                    <span className="ml-2  font-bold">
                      Get all {all_countries.length} countries
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-6">
          <div className="flex items-center gap-4 content-center flex-row mr-10">
            {all_Icons.map(({ id, name, icon }) => (
              <div
                key={id}
                className="flex items-center gap content-center flex-col"
              >
                {icon}
                <span
                  className={`text-${
                    theme === "dark" ? "white" : "gray-500"
                  } text-xs font-medium mt-2`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="text-gray-700 text-sm">
            Log in or sign up
          </Button>
          <Button
            variant="outline"
            className="text-white text-sm bg-red-700 border-red-700 hover:border-black"
          >
            Place Your Ads
          </Button>

          <div>
            <Theme />
          </div>
        </div>
      </div>

      {/* Tablet menu */}
      <div
        className={`sm:hidden md:flex w-full  h-16 p-4 
          flex-col justify-between content-center  border-b ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        } mx-auto lg:hidden `}
      >
        <div className="flex flex-row justify-center content-center gap-6">
          <Image
            src="/assets/imgs/expelogo.png"
            alt="logo"
            width={120}
            height={100}
          />
          <Theme />
        </div>

        <div
          className={`${
            theme === "dark" ? "bg-black bg-opacity-70 backdrop-blur-lg" : "bg-white bg-opacity-70 backdrop-blur-lg"
          } fixed bottom-0 left-0 right-0 flex flex-row justify-between content-center gap-4 pt-4 pb-4 pl-4 pr-4  border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {mobile_Icons.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex items-center justify-between  gap-2 content-center flex-col cursor-pointer"
            > <Link href={`/pages/Post?myid=${id}`} className="flex items-center justify-between  gap-2 content-center flex-col cursor-pointer">
              {icon}
              <span
                className={`text-${
                  theme === "dark" ? "white" : "gray-500"
                } text-xs font-medium`}
              >
                {name}
              </span></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topheader;
