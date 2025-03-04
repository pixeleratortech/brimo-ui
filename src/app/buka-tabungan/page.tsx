import React, { Suspense } from "react";
import ScreenReaderTitle from "@/components/atoms/sr-only-title";
import SavingBanner from "@/components/organisms/buka-tabungan/saving-banner";
import SavingFAQ from "@/components/molecules/faq-section";
import SavingTutorials from "@/components/organisms/buka-tabungan/saving-tutorials";

const OpenSavingPage = () => {
  return (
    <>
      <ScreenReaderTitle title="Buka Tabungan Pake BRImo" />
      <SavingBanner containerStyle="bg-primary-blue/10 rounded-b-[50px]" />

      <Suspense>
        <SavingTutorials containerStyle="mt-16" />
      </Suspense>

      <SavingFAQ containerStyle="mt-44 max-w-screen-lg mx-auto" />
    </>
  );
};

export default OpenSavingPage;
