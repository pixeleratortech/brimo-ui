import ScreenReaderTitle from "@/components/base/sr-only-title";
import SavingBanner from "@/components/section/buka-tabungan/saving-banner";
import SavingFAQ from "@/components/section/buka-tabungan/saving-faq";
import SavingTutorials from "@/components/section/buka-tabungan/saving-tutorials";
import React from "react";

const OpenSavingPage = () => {
  return (
    <>
      <ScreenReaderTitle title="Buka Tabungan Pake BRImo" />
      <SavingBanner containerStyle="bg-primary-blue/10 rounded-b-[50px]" />
      <SavingTutorials containerStyle="mt-16" />
      <SavingFAQ containerStyle="mt-44 max-w-screen-lg mx-auto" />
    </>
  );
};

export default OpenSavingPage;
