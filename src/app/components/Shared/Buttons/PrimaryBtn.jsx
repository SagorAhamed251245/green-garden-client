import Link from "next/link";

const PrimaryBtn = ({ children, path, btnType }) => {
  return (
    <>
      <Link
        href={path ? path : "/"}
        className={`${
          btnType === "secondary" ? "bg-secondary" : "bg-primary"
        } px-5 py-2 rounded-full text-white text-sm md:text-base`}
      >
        {children}
      </Link>
    </>
  );
};

export default PrimaryBtn;
