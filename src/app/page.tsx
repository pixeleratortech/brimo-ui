import ScreenReaderTitle from "@/components/atoms/sr-only-title";
import HomeAnotherFeature from "@/components/organisms/home/home-another-feature";
import HomeBanner from "@/components/organisms/home/home-banner";
import HomeDescription from "@/components/organisms/home/home-description";
import HomeFeature from "@/components/organisms/home/home-feature";
import HomeHighlight from "@/components/organisms/home/home-highlight";
import HomePromo from "@/components/organisms/home/home-promo";

const HomePage = () => {
  return (
    <>
      <ScreenReaderTitle title="BRImo Semua Serba Bisa" />
      <HomeBanner containerStyle={"bg-primary-blue rounded-b-[2.5rem]"} />
      <HomeDescription containerStyle="max-w-screen-xl py-36 flex justify-between items-center mx-auto px-4" />
      <HomeHighlight containerStyle="max-w-screen-xl px-4 mx-auto " />
      <HomeFeature containerStyle="max-w-screen-xl my-24 px-4 mx-auto" />
      <HomeAnotherFeature containerStyle="max-w-screen-xl my-24 px-4 mx-auto" />
      <HomePromo containerStyle="max-w-screen-xl mt-36 px-4 mx-auto" />
    </>
  );
};

export default HomePage;
