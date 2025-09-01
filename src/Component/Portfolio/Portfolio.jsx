import React, { useState } from "react";
import Satar from "../Satar/Satar";
import { FaPlus } from "react-icons/fa";
const images = Object.values(
  import.meta.glob("../../assets/images/*", {
    eager: true,
    import: "default",
  })
);
export default function Portfolio() {
  const [OpenModel, setOpenModel] = useState(false);
  const [ImageUrl, setImageUrl] = useState("");
  const handleClick = (e) => {
    setImageUrl(("hello", e.target.getAttribute("src")));
    setOpenModel(true);
  };
  return (
    <>
      <div className="p-10">
        <h2 className="text-center text-4xl font-bold uppercase text-gray-800 mt-20 mb-10">
          Portfolio Component
        </h2>
        <Satar color="black" bg="bg-white" mb="mb-2" />
        <div className="center">
          {images.map((img, index) => (
            <div
              className="sm:w-full md:w-1/2 lg:w-1/3 mt-5  relative cursor-pointer group rounded-lg shadow-lg overflow-hidden flex items-center justify-center"
              key={index}
            >
              <span className="bg-green-400/70  pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 duration-200 flex items-center justify-center ">
                <FaPlus size={50} color="white" />
              </span>
              <img
                onClick={(e) => handleClick(e)}
                className="p-2"
                src={img}
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      {OpenModel && (
        <div className="fixed z-10 inset-0 center"  onClick={() => setOpenModel(false)}>
         
          <div className="bg-sky-950 opacity-75 absolute z-20 w-full h-full"></div>
          <img className="w-1/2 z-40" src={ImageUrl} alt="" />
        </div>
      )}
    </>
  );
}
