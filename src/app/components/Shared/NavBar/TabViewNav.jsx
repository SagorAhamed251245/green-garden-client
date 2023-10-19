"use client";
import Link from "next/link";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import CloseMenu from "./CloseMenu";

const TabViewNav = ({ navPath }) => {
  const [isOpen, setOpen] = useState(true);

  console.log("🚀 ~ file: tabViewNav.jsx:8 ~ TabViewNav ~ isOpen:", isOpen);

  return (
    <div className="w-full  h-16 flex justify-between items-center bg-secondary text-white px-10 font-semibold  ">
      {/* logo */}
      <div className=" h-full w-[30%] flex items-center lg:text-2xl md:text-xl ">
        Green<span className="text-primary">Garden</span>
      </div>
      {/* navigation */}
      <div className="  h-full md:text-sm lg:text-base flex justify-center items-center">
        <div className="relative ">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className={!isOpen ? "hidden " : ""}
          >
            <BurgerMenu />
          </button>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className={isOpen ? "hidden" : ""}
          >
            <CloseMenu />
          </button>

          <ul
            className={
              !isOpen
                ? "h-auto w-[200px] absolute top-30 z-30 -right-9 bg-primary py-2 px-5 flex flex-col  gap-5 rounded-lg justify-center items-center transition-all duration-1000 ease-in-out  slow-Motion"
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
