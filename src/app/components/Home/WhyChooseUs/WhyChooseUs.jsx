import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner.png";

const WhyChooseUs = () => {
  return (
    <section className="mb-10 flex w-[90%] mx-auto">
      <div className="w-[70%] ">
        <div>
          <h3 className="text-4xl font-bold  text-secondary">
            Why Choose <span className="text-primary">Us?</span>
          </h3>
        </div>
      </div>
      <div className="w-[30%]">
        <Image
          src={bannerImage}
          width={400}
          height={500}
          alt="bannerImage"
          className="lg:rounded-3xl rounded-lg"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
