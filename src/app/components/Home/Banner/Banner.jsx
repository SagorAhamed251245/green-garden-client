import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="flex h-[600px]">
      <div className="flex w-[40%] h-full ">
        <Image
          src={bannerImage}
          width={400}
          height={800}
          alt="banner image"
          className="w-full object-cover"
        />
      </div>

      <div className="px-10 w-[60%] mx-auto ">
        <h1 className="text-4xl font-bold text-secondary">
          Crafting <span className="text-primary">Green</span> <br />
          Masterpieces
        </h1>
        <p className="line-clamp-3 w-[40%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          nesciunt ducimus, praesentium porro veniam ut distinctio nam modi
          suscipit, deserunt blanditiis odit illum adipisci cumque rem impedit
          nihil facilis eius ipsum eligendi in culpa quidem, sed ipsa. Quis,
          temporibus molestiae ea sit eum alias distinctio nobis iure autem aut
          error!
        </p>
      </div>
    </section>
  );
};

export default Banner;