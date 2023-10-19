import Image from "next/image";
import bannerImage from "@/assets/banner.png";
import PrimaryBtn from "../../Shared/Buttons/PrimaryBtn";
import UserEnroll from "./UserEnroll";

const Banner = () => {
  return (
    <section className="flex lg:block h-[600px] lg:relative">
      <div className="flex w-[40%] lg:w-full h-full ">
        <Image
          src={bannerImage}
          width={400}
          height={800}
          alt="banner image"
          className="w-full object-cover"
        />
      </div>

      <div className="px-10 w-[60%]  lg:absolute top-0 z-20  lg:w-full flex flex-col  gap-5 justify-center lg:text-white items-start lg:items-center h-full  mx-auto ">
        <div className="lg:text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-secondary lg:text-white pb-5  lg:text-6xl lg:py-10">
            Crafting <span className="text-primary">Green</span> <br />
            Masterpieces
          </h1>
          <p className="line-clamp-3 lg:w-1/2 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            nesciunt ducimus, praesentium porro veniam ut distinctio nam modi
            suscipit, deserunt blanditiis odit illum adipisci cumque rem impedit
            nihil facilis eius ipsum eligendi in culpa quidem, sed ipsa. Quis,
            temporibus molestiae ea sit eum alias distinctio nobis iure autem
            aut error!
          </p>
        </div>
        {/* button  */}
        <div className=" flex gap-5 flex-col md:flex-row text-sm md:text-base">
          <PrimaryBtn path={"/"}>Get Started</PrimaryBtn>
          <PrimaryBtn path={"/"} btnType={"secondary"}>
            Learn More
          </PrimaryBtn>
        </div>
        <div>
          <UserEnroll />
        </div>
      </div>

      <div className="lg:bg-black lg:w-full lg:h-full lg:absolute top-0 z-10 opacity-30"></div>
    </section>
  );
};

export default Banner;
