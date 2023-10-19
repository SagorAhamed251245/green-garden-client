import Link from "next/link";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const FullViewNav = ({ navPath }) => {
  return (
    <>
      <div className="w-full  h-16 flex justify-center items-center bg-secondary text-white px-10 font-semibold  ">
        {/* logo */}
        <div className=" h-full w-[30%] flex items-center lg:text-2xl md:text-xl ">
          Green<span className="text-primary">Garden</span>
        </div>
        {/* navigation */}
        <div className="  h-full w-[40%] md:text-sm lg:text-base">
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
          <PrimaryBtn path={""}>Login</PrimaryBtn>
        </div>
      </div>
    </>
  );
};

export default FullViewNav;
