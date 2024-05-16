import React from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

const layout = ({ children }) => {
  return (
    <div className="sm:w-64 fixed sm:block">
      <Sidenav />
      <div className="ml-64">
        
        {children}
        <Header />
      </div>
    </div>
  );
};

export default layout;
