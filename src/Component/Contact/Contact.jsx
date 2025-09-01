import React from "react";
import Satar from "../Satar/Satar";

export default function Contact() {
  return (
    <>
      <h2 className="font-bold text-4xl mt-10 uppercase text-gray-600 mb-15">
        Contact SECTION
      </h2>
      <Satar color="black" bg="bg-white" mt="4" />

      <form className="w-2/3 mx-auto">
        {/* Username */}
        <div className="mb-5">
          <label
            htmlFor="userName"
            className="block text-gray-700 mt-2  text-left"
          >
            Username
          </label>
          <input
            type="text"
            className="border-b border-gray-300 rounded  w-full"
          />
        </div>

        {/* Age */}
        <div className="mb-5">
          <label htmlFor="Age" className="block text-gray-700 mt-2  text-left">
            userAge
          </label>
          <input
            type="text"
            className="border-b border-gray-300 rounded  w-full"
          />
        </div>
        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 mt-2  text-left"
          >
            userEmail
          </label>
          <input
            type="text"
            className="border-b border-gray-300 rounded  w-full"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="userPassword"
            className="block text-gray-700 mt-2  text-left"
          >
            UserPassword
          </label>
          <input
            type="text"
            id="userName"
            className="border-b border-gray-300 rounded  w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded shadow hover:bg-teal-600 transition block"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
