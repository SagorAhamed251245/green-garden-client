import Link from "next/link";

const PrimaryBtn = ({ children, path, btnType }) => {
  return (
    <>
      <Link
        href={path}
        className={`${
          btnType === "primary" ? "bg-primary" : "bg-secondary"
        } px-8 py-2 rounded-full`}
      >
        {children}
      </Link>
    </>
  );
};

export default PrimaryBtn;
