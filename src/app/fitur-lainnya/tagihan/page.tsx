import React from "react";
import SavingFAQ from "@/components/molecules/faq-section";
import BillBanner from "@/components/organisms/tagihan/tagihan-banner";
import FeatureLayout from "@/components/molecules/feature-flex-layout";
import { TagihanDummy } from "@/helper/dummy";

const TagihanPage = () => {
  return (
    <>
      {/* BANNER TAGIHAN */}
      <BillBanner
        brimoLogo={"/icons/brimo_logo_white.png"}
        textBanner="Solusi Praktis untuk Bayar Tagihan"
        imageBanner="/images/dummy_tagihan_banner.png"
      />

      {/* SECTION TAGIHAN */}
      <div className="flex mt-24 flex-col gap-24">
        {TagihanDummy.map((item, index) => (
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

      {/* Section FAQ */}
      <SavingFAQ containerStyle="mt-44 max-w-screen-lg mx-auto" />
    </>
  );
};

export default TagihanPage;
