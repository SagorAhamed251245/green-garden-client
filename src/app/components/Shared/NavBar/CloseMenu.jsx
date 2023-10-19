import { useState } from "react";

const CloseMenu = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        className="spin"
        height="32"
        viewBox="0 0 32 32"
      >
        <line
          x1="7"
          y1="7"
          x2="25"
          y2="25"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="7"
          y1="25"
          x2="25"
          y2="7"
          stroke="#2FB95D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default CloseMenu;
