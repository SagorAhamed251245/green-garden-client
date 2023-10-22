import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner.png";

const WhyChooseUs = () => {
  const services = [
    {
      _id: 1,
      name: "Sustainable Practices",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem porro, non numquam temporibus nisi nihil soluta deleniti earum similique placeat, sunt quos explicabo, quod recusandae ullam animi eum obcaecati est.",
    },
    {
      _id: 2,
      name: "Licensed and Insured",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem porro, non numquam temporibus nisi nihil soluta deleniti earum similique placeat, sunt quos explicabo, quod recusandae ullam animi eum obcaecati est.",
    },
    {
      _id: 3,
      name: "Local Knowledge",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem porro, non numquam temporibus nisi nihil soluta deleniti earum similique placeat, sunt quos explicabo, quod recusandae ullam animi eum obcaecati est.",
    },
  ];
  return (
    <section className="mb-10 flex w-[90%] mx-auto">
      <div className="w-[70%] flex flex-col justify-between ">
        <div>
          <h3 className="text-4xl font-bold  text-secondary">
            Why Choose <span className="text-primary">Us?</span>
          </h3>
          <p className="w-[90%] my-5 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            fugiat atque eaque est cupiditate inventore excepturi corrupti
            dolorum minus. Sint rerum, rem corrupti dolore in molestiae debitis
            quos earum nesciunt.
          </p>
        </div>

        <div>
          {services.map((service, index) => {
            return (
              <div
                className="flex  items-center gap-5 w-[90%] mb-10"
                key={index}
              >
                <div>
                  <div className="w-14 h-14 border rounded-xl bg-primary flex items-center justify-center text-white text-2xl  ">
                    &#10003;
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold  text-secondary">
                    {service.name}
                  </h3>
                  <p className="line-clamp-3">{service.details}</p>
                  <span className="text-primary hover:underline">
                    read more...
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[30%] h-auto flex">
        <Image
          src={bannerImage}
          width={400}
          height={500}
          alt="bannerImage"
          className="lg:rounded-3xl rounded-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
