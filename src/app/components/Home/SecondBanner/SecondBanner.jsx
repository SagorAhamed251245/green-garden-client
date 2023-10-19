import Image from "next/image";
import ImagePlaceholder from "@/assets/ImagePlaceholder.png";

const SecondBanner = () => {
  return (
    <section className="my-10 w-[90%] mx-auto ">
      <div>
        <h1 className="text-4xl font-bold text-center text-secondary">
          Landscape Design <br />
          <span className="text-primary">Beyond Expectations</span>
        </h1>
        <p className="text-xl font-bold text-center my-3 text-gray-900">
          A place to grow your garden
        </p>
        <p className="md:w-[50%] w-[90%] mx-auto text-center mb-14 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, vitae!
          Dolores minus sequi aspernatur! Pariatur officiis, ullam amet natus,
          veritatis quis cupiditate dolorem debitis aperiam porro numquam iste
          nihil officia.
        </p>
      </div>
      {/* banner */}
      <div>
        <div className="relative ">
          <Image
            src={ImagePlaceholder}
            width={1920}
            height={1080}
            alt="ImagePlaceholder"
            className="lg:rounded-b-3xl rounded-b-lg "
          />
          <div className="bg-secondary lg:rounded-b-3xl rounded-b-lg  text-white text-center font-bold text-xs md:text-2xl  h-10 md:h-20 w-full absolute bottom-0 flex items-center justify-center">
            <p className="w-[25%] ">
              13<span className="text-primary">+</span>
              <br />
              <span className="text-xs md:text-sm font-normal">
                Years Experience
              </span>
            </p>
            <p className="w-[25%] border-x">
              13K<span className="text-primary">+</span>
              <br />
              <span className=" text-xs md:text-sm font-normal">Products</span>
            </p>
            <p className="w-[25%] border-x">
              7K<span className="text-primary">+</span> <br />
              <span className=" text-xs md:text-sm font-normal">
                Satisfied Clients
              </span>
            </p>
            <p className="w-[25%] ">
              124<span className="text-primary">+</span> <br />
              <span className=" text-xs md:text-sm font-normal">
                Local Team Members
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
