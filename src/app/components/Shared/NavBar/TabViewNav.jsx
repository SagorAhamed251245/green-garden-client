"use client";
import Link from "next/link";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const TabViewNav = ({ navPath }) => {
  const [isOpen, setOpen] = useState(false);
  console.log("🚀 ~ file: tabViewNav.jsx:8 ~ TabViewNav ~ isOpen:", isOpen);

  return (
    <div className="w-full  h-16 flex justify-between items-center bg-secondary text-white px-10 font-semibold  ">
      {/* logo */}
      <div className=" h-full w-[30%] flex items-center lg:text-2xl md:text-xl ">
        Green<span className="text-primary">Garden</span>
      </div>
      {/* navigation */}
      <div className="  h-full md:text-sm lg:text-base">
        <div className="relative">
          <button
            onClick={() => {
              setOpen(false), console.log("open");
            }}
            className={!isOpen ? "hidden" : ""}
          >
            <BurgerMenu />
          </button>
          <button
            onClick={() => {
              setOpen(true), console.log("close");
            }}
            className={isOpen ? "hidden" : ""}
          >
            close
          </button>

          <ul
            className={
              !isOpen
                ? "h-auto w-[300px] absolute top-30 z-0 right-5 bg-red-300  px-5 "
                : "hidden"
            }
          >
            {navPath.map((item, index) => (
              <li key={index}>
                <Link href={item?.path}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabViewNav;
