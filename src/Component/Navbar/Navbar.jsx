import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolling, setisScrolling] = useState(false);
  const handleuserscroll = () => {
    if (window.scrollY > 35) {
      setisScrolling(true);
      // console.log(window.scrollY);/
      
    } else {  
      setisScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleuserscroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolling ? "py-4" : "py-8"
        } bg-secondary text-white z-50 fixed top-0 left-0 right-0`}
      >
        <div className="container flex justify-between items-center">
          <h2 className="font-bold text-3xl uppercase">
            <Link to={"/"}>Start FrameWork</Link>
          </h2>
          <ul className="flex">
            <li>
              <NavLink to={"about"} className={"uppercase font-bold"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"portfolio"} className={"uppercase font-bold"}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"contact"} className={"uppercase font-bold"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
