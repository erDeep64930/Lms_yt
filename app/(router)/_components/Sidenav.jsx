import Image from "next/image";
import React from "react";
import { FaBookReader, FaHandsHelping, FaUserGraduate } from "react-icons/fa";

const menu = [
  { id: 1, name: "All Courses", icon: <FaBookReader /> },
  { id: 2, name: "Membership", icon: <FaHandsHelping /> },
  { id: 3, name: "Be Instructor", icon: <FaUserGraduate /> },
];

const Sidenav = () => {
  return (
    <div className="bg-sky-200 p-5 shadow-lg h-screen">
      <Image
        src="/logo1.png"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full mb-5 ml-8"
      />
      <hr className="mt-4 "/>
      <div className="mt-6">
        {menu.map(({ id, name, icon }) => {
          return (
            <div
              className="flex gap-2 p-4 items-center mt-1 cursor-pointer rounded-md hover:bg-sky-400 transition-all duration-400 hover:text-white group"
              key={id}
            >
              <span className="group-hover:animate-bounce">{icon}</span>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav;
