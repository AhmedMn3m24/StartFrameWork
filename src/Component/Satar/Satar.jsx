import React from "react";
import { FaStar } from "react-icons/fa";

export default function Satar({
  color = "white",
  bg = "bg-primary",
  mt = "mt-5" ,
}) {
  return (
    <div
      className="w-[200px] h-[5px] mx-auto mt-5  flex items-center justify-center relative"
      style={{ backgroundColor: color }}
    >
      <span className={`absolute left-1/2 -translate-x-1/2 p-5 ${bg}`}>
        <FaStar color={color} />
      </span>
    </div>
  );
}
