import React from "react";
import Satar from "../Satar/Satar"
export default function About() {
  
  return (
    <>
      <h2 className="font-bold text-4xl uppercase text-white">
        ABOUT COMPONENT
      </h2>
<Satar color="white" bg="bg-primary" />
      <div className="container flex justify-around mt-5 text-white">
        <p className="first flex-1/2">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="secend flex-1/2">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </>
  );
}
