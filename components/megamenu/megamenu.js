import React, { useState, useEffect, useRef } from "react";
import Theme from "../theme/theme";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import styles from "../../styles/megamenu/App.module.css";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Menus from "../menus";
import { GoSearch } from "react-icons/go";
import { Font_inter } from "../my_font";
function Megamenu() {
  const myRef = useRef(null);
  const { setTheme, theme } = useTheme();
  const [Hovered, setHovered] = useState("");
  const [Subs, setSubs] = useState([]);
  const [Itemlist, setItemlist] = useState([]);

  const filter_sub = (menu_name) => {
    setSubs(Menus.filter((menu) => menu.menu === menu_name)[0].sub);
  };

  const filter_item_list = (sub_name) => {
    setItemlist(Subs.filter((menu) => menu.name === sub_name)[0].item_list);
  };

  return (
    <div className="w-full">
      <div className={styles.mega_menu_container}>
        <div className={styles.mega_menu}>
          {Menus.map((category) => (
            <div
              className={styles.menu_category}
              key={category.id}
              onMouseOver={() => {
                filter_sub(category.menu);
                setHovered(category.menu);
              }}
            >
              <div className={styles.sub_menu}>
                <p style={{
                  color: theme === 'dark' ? 'white' : 'black',
                }}>{category.menu}</p>
                {category.sub.map((item) => (
                  <div style={{
                    backgroundColor: theme === 'dark' ? 'white' : 'black',
                  }} key={item.id}>
                    <div className={styles.sub_menu_item}  style={{
                    backgroundColor: theme === 'dark' ? 'white' : 'black',
                  }}>
                      <div key={item.id} className={styles.left}>
                        {Subs.map((item) => (
                          <p
                            key={item.id}
                            onMouseOver={() => {
                              filter_item_list(item.name);
                            }}
                          >
                            {item.name}
                          </p>
                        ))}
                      </div>

                      <div key={item.id} className={styles.right}>
                        <div className={styles.title}>
                          <p>{item.name}</p>
                          <Link href={"#"} className={styles.link}>
                            <span>View All</span>
                            <GoArrowRight className={styles.icon} />
                          </Link>
                        </div>
                        {Itemlist.map((item) => (
                          <Link href={item.path} key={item.id}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`sm:hidden md:flex lg:hidden w-full flex flex-col justify-between p-2 items-center`}>
        <div className={`w-[98%] `}>
          <div
            className={`group w-full border-gray-200 border rounded-full p-4 flex flex-row justify-between`}
          >
            <input
              type="text"
              placeholder="Search for anything..."
              className={`w-full text-sm outline-none group-focus:border-gray-800 group-focus:border-2 ${Font_inter.className}`}
            />
            <GoSearch className={`text-[30px] text-gray-400 `} />
          </div>
        </div>

        <div
          className={`w-full grid grid-cols-3 justify-between gap-2 p-2  mt-2`}
        >
          {Menus.map((item) => {
            return <div 
            className={`border border-gray-300 rounded-sm  w-[100%] flex flex-col items-center justify-center p-2 `}
            key={item.id}>
              <p>{item.icon}</p>
              <p className={`text-[12px] font-bold ${Font_inter.className} text-center`}>{item.menu}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Megamenu;
