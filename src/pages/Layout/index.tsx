import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow m-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
