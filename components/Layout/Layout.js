import React, { useEffect, useState } from "react";
import styles from "@/styles/lyt/App.module.css";
import { useSelector, useDispatch } from "react-redux";
import Topheader from "@/components/topheader/topheader";
import Megamenu from "@/components/megamenu/megamenu";

const Layout = ({ children }) => {
  return (
    
      <div>
       <Topheader />
       <Megamenu/>
       {children}
      </div>
    
  );
};

export default Layout;
