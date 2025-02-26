import React from "react";
import FadeInOpacity from "@/components/animation/fadeIn";
import Paragraph from "@/components/atoms/paragraph";
import Image from "next/image";
import { PromoDummy } from "@/helper/dummy";
import Button from "@/components/atoms/button";
import FadeInFromBottom from "@/components/animation/fadeInBottom";
import ScreenReaderTitle from "@/components/atoms/sr-only-title";

const PromoPage = () => {
  return (
    <div className="mt-28 max-w-screen-xl mx-auto px-4 mb-36">
      <ScreenReaderTitle title="Promo Spesial BRImo" />
      <FadeInOpacity duration={1000} className="faq-title" style="mb-6">
        <Paragraph className="font-brineue-bold mb-6 text-[2.5rem] text-primary-blue leading-[3.5rem]">
          Promo Spesial untuk Anda
        </Paragraph>
      </FadeInOpacity>

      {/* FIRST GRID */}
      <div className="grid grid-cols-4 mt-16 gap-8">
        {PromoDummy.slice(0, 5).map((promo, index) => {
          const className = (() => {
            switch (index) {
              case 0:
                return "col-span-2 row-span-2";
              case 1:
                return "col-start-3";
              case 2:
                return "col-start-3 row-start-2";

              default:
                return "";
            }
          })();

          return (
            <FadeInFromBottom
              key={promo.id}
              duration={400 * promo.id}
              className={`promo-list-${promo.id}`}
              style={`${className} bg-primary-blue rounded-xl shadow`}
            >
              <Image
                src={promo.image}
                alt=""
                width={1000}
                height={1000}
                className={`w-full rounded-xl ${
                  promo.id === 1 ? "h-[20rem]" : "h-[10rem]"
                } object-cover`}
              />
              <div className="px-6 py-4">
                <Paragraph
                  className={`font-brineue-regular text-primary-white`}
                >
                  6 Januari 2024
                </Paragraph>
                <Paragraph
                  className={`${
                    promo.id === 1 ? "text-[2.5rem]" : "text-lg"
                  } font-brineue-bold text-primary-white`}
                >
                  {promo.title}
                </Paragraph>
                <Paragraph
                  className={`${
                    promo.id === 1 ? "text-[12px]" : "text-[10px]"
                  } font-brineue-bold border mt-4 px-2 border-primary-white bg-primary-white rounded-full w-fit text-primary-blue`}
                >
                  {promo.category}
                </Paragraph>
              </div>
            </FadeInFromBottom>
          );
        })}
      </div>

      {/* SECOND GRID */}
      <div className="grid grid-cols-3 mt-8 gap-8">
        {PromoDummy.slice(5, 14).map((promo) => {
          return (
            <FadeInFromBottom
              key={promo.id}
              duration={400 * promo.id}
              className={`promo-list-${promo.id}`}
              style={` bg-primary-blue rounded-xl shadow`}
            >
              <Image
                src={promo.image}
                alt=""
                width={1000}
                height={1000}
                className={`w-full rounded-xl ${
                  promo.id === 1 ? "h-[20rem]" : "h-[10rem]"
                } object-cover`}
              />
              <div className="px-6 py-4">
                <Paragraph
                  className={`font-brineue-regular text-primary-white`}
                >
                  6 Januari 2024
                </Paragraph>
                <Paragraph
                  className={`${
                    promo.id === 1 ? "text-[2.5rem]" : "text-lg"
                  } font-brineue-bold text-primary-white`}
                >
                  {promo.title}
                </Paragraph>
                <Paragraph
                  className={`${
                    promo.id === 1 ? "text-[12px]" : "text-[10px]"
                  } font-brineue-bold border mt-4 px-2 border-primary-white bg-primary-white rounded-full w-fit text-primary-blue`}
                >
                  {promo.category}
                </Paragraph>
              </div>
            </FadeInFromBottom>
          );
        })}
      </div>
      <div className="flex mt-4 justify-center">
        <Button
          buttonText={"Muat Lebih Banyak"}
          className={
            "rounded-3xl z-10 lg:w-fit h-fit mt-6 font-brineue-regular text-md px-6 py-3 lg:py-2 text-primary-white text-center bg-primary-blue"
          }
        />
      </div>
    </div>
  );
};

export default PromoPage;
