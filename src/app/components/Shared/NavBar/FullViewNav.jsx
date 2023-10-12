import Link from "next/link";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const FullViewNav = () => {
  const navPath = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <>
      <div className="w-full h-16 flex justify-center items-center bg-secondary text-white px-10 font-semibold  ">
        {/* logo */}
        <div className=" h-full w-[30%] flex items-center text-2xl ">
          Green<span className="text-primary">Garden</span>
        </div>
        {/* navigation */}
        <div className="  h-full w-[40%] ">
          <ul className="flex h-full justify-between items-center">
            {navPath.map((item, index) => (
              <li key={index}>
                <Link href={item?.path}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* profile and login and logout  */}
        <div className=" h-full  w-[30%] flex items-center justify-end">
          <PrimaryBtn path={""} btnType={"primary"}>
            Login
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
};

export default FullViewNav;
