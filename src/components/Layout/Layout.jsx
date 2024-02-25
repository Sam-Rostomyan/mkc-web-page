import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = ({ headerRef, visibleSection, menus }) => {
   return (
      <>
         <Navbar
            headerRef={headerRef}
            visibleSection={visibleSection}
            menus={menus}
         />

         <main>
            <Outlet />
         </main>
      </>
   )
};

export default Layout;
