import React, { useEffect, useState } from "react";
import styles from "@/styles/lyt/App.module.css";
import { useSelector, useDispatch } from "react-redux";
import Topheader from "@/components/topheader/topheader";
import Megamenu from "@/components/megamenu/megamenu";
import Searcher from "../searcher/searcher";
import Popular from "../popularcategory/popular";
import Footer from "../footer/footer";
import { Font_ubuntu, Font_inter, Font_oreo } from "../my_font";
const Layout = ({ children }) => {
  return (
    <div
      className={`${Font_ubuntu.className}  w-full flex flex-col justify-center items-center`}
    >
      <Topheader />
      <Megamenu />
      <Searcher />
      <Popular />
      {children}
      <br/><br/>
      <Footer />
    </div>
  );
};

export default Layout;
