"use client";
import React from "react";
import FadeInOpacity from "@/components/animation/fadeIn";
import Paragraph from "@/components/atoms/paragraph";
import Image from "next/image";
import { PromoDummy } from "@/helper/dummy";
import Button from "@/components/atoms/button";
import FadeInFromBottom from "@/components/animation/fadeInBottom";
import ScreenReaderTitle from "@/components/atoms/sr-only-title";
import PromoDesktopView from "@/components/organisms/promo/promo-desktop-view";
import PromoMobileView from "@/components/organisms/promo/promo-mobile-view";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const PromoPage = () => {
  const carouselRef = useRef<Carousel | null>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };

  return (
    <div className="mt-28 max-w-screen-xl mx-auto px-4 mb-36">
      <ScreenReaderTitle title="Promo Spesial BRImo" />
      <FadeInOpacity duration={1000} className="faq-title" style="mb-6">
        <Paragraph className="font-brineue-bold mb-6 text-[2.5rem] text-primary-blue leading-[3.5rem]">
          Promo Spesial untuk Anda
        </Paragraph>
      </FadeInOpacity>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:block">
        <PromoDesktopView />
      </div>

      {/* MOBILE VIEW */}
      <div className="block lg:hidden">
        <PromoMobileView
          data={PromoDummy.slice(0, 5)}
          carouselRef={carouselRef}
          handleClick={() => undefined}
        />

        <div className="items-center flex justify-center">
          <Button
            onClick={handlePrev}
            buttonText={
              <IoIosArrowRoundBack size={50} className="text-primary-blue" />
            }
            className=""
          />
          <Button
            onClick={handleNext}
            buttonText={
              <IoIosArrowRoundForward size={50} className="text-primary-blue" />
            }
            className=""
          />
        </div>

      </div>

      <div className="grid lg:grid-cols-3 mt-8 gap-8">
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
