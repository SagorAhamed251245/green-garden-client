import navPath from "@/data/nav/navData";
import FullViewNav from "./FullViewNav";
import TabViewNav from "./TabViewNav";

const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <FullViewNav navPath={navPath} />
      </nav>
      <nav className="lg:hidden">
        <TabViewNav navPath={navPath} />
      </nav>
    </>
  );
};

export default Navbar;
