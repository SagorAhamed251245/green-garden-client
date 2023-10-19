import Banner from "@/app/components/Home/Banner/Banner";
import SecondBanner from "@/app/components/Home/SecondBanner/SecondBanner";
import Navbar from "@/app/components/Shared/NavBar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SecondBanner />
    </>
  );
};

export default HomePage;
