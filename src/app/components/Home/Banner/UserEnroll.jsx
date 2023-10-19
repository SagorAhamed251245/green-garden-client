"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserEnroll = () => {
  const [users, setUser] = useState(null);
  console.log("🚀 ~ file: UserEnroll.jsx:5 ~ UserEnroll ~ user:", users);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users.slice(0, 5)));
  }, []);
  return (
    <div>
      <div className="flex">
        {users?.map(({ image, id }) => (
          <div
            key={id}
            className="bg-white h-9 w-9 md:h-14 md:w-14 rounded-full -ml-3 border shadow-lg"
          >
            <Image src={image} width={50} height={50} alt="" />
          </div>
        ))}
        <div className="hidden md:block ml-5">
          <p className="text-primary text-3xl font-bold ">50K+</p>
          <span>Joined In Already</span>
        </div>
      </div>
      <div className="md:hidden mt-5">
        <p className="text-primary text-3xl font-bold ">50K+</p>
        <span>Joined In Already</span>
      </div>
    </div>
  );
};

export default UserEnroll;
