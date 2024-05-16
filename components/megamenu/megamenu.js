import React, { useState, useEffect, useRef } from "react";
import Theme from "../theme/theme";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import styles from "../../styles/megamenu/App.module.css";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Menus from "../menus";
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
              <p>{category.menu}</p>
              {category.sub.map((item) => (
                <div key={item.id}>
                    
                  <div className={styles.sub_menu_item}>
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
                        <Link href={'#'} className={styles.link}><span>View All</span> 
                        <GoArrowRight className={styles.icon} /></Link>
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
  );
}
export default Megamenu;
