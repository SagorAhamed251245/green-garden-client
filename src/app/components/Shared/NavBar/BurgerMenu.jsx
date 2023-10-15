import React, { useEffect, useState } from "react";

const BurgerMenu = () => {
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    // After a specified time (e.g., 2 seconds), stop the animation
    const timeout = setTimeout(() => {
      setStopAnimation(true);
    }, 2000); // Adjust the time as needed (2 seconds in this example)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <svg
        className={`swap-off fill-current w-8 h-10 ${
          stopAnimation ? "" : "animate-spin"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default BurgerMenu;
