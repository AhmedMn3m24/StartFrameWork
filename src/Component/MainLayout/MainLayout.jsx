import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
export default function MainLayout() {
  const { pathname } = useLocation();
  console.log(location);

  return (
    <>
      <Navbar />
      <div
        className={`min-h-dvh flex ${
          pathname === "/" || pathname === "/about" ? "bg-primary" : "bg-white"
        }`}
      >
        <div className="container text-center ">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
}
