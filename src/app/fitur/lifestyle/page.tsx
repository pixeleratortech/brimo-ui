import FAQSection from "@/components/molecules/faq-section";
import FeatureLayout from "@/components/molecules/feature-flex-layout";
import LifestyleBanner from "@/components/organisms/lifestyle/banner";
import { LifestyleDummy } from "@/helper/dummy";
import React from "react";

const LifestylePage = () => {
  return (
    <>
      <LifestyleBanner
        image="/images/lifestyle_banner.png"
        bannerText="Kemudahan Lifestyle Tanpa Batas "
        brimoIcon="/icons/brimo_logo_white.png"
      />
      <div className="mt-24 flex flex-col gap-24">
        {LifestyleDummy.map((item, index) => (
          <FeatureLayout
            key={item.id}
            isReverse={index % 2 === 0}
            image={item.image}
            featureTitle={item.title}
            subtitle={item.subtitle}
            item={item.item}
          />
        ))}
      </div>
      <FAQSection containerStyle={"mt-36 max-w-screen-xl mx-auto px-4"} />
    </>
  );
};

export default LifestylePage;
