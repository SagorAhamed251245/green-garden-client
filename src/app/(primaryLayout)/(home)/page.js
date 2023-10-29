import Banner from "@/app/components/Home/Banner/Banner";
import SecondBanner from "@/app/components/Home/SecondBanner/SecondBanner";
import Services from "@/app/components/Home/Services/Services";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs/WhyChooseUs";
import Navbar from "@/app/components/Shared/NavBar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SecondBanner />
      <WhyChooseUs />
      <Services />
    </>
  );
};

export default HomePage;
