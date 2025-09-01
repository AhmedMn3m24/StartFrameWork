import React from "react";
import Satar from "../Satar/Satar";
import avater from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <img src={avater} className="w-1/6 mx-auto" alt="" />
      <h2 className="font-bold text-4xl uppercase text-white">
        Start framework
      </h2>
      <Satar color="white" bg="bg-primary" />
      
      <h6 className="mt-5 text-white">Graphic Artist - Web Designer - Illustrator</h6>
    </>
  );
}
