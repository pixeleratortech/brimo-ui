"use client";
import Paragraph from "@/components/atoms/paragraph";
import { featureFilter } from "@/helper/const";
import React, { useState } from "react";
import Image from "next/image";
import { DummyAnotherFeature } from "@/helper/dummy";
import Button from "@/components/atoms/button";
import { IoIosArrowForward } from "react-icons/io";
import FadeInLeft from "@/components/animation/fadeInLeft";
import FadeInRight from "@/components/animation/fadeInRight";
import FadeInFromBottom from "@/components/animation/fadeInBottom";

interface Props {
  containerStyle: string;
}

const HomeAnotherFeature = ({ containerStyle }: Props) => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleClick = (id: number) => {
    setActiveButton(id);
  };

  return (
    <div className={containerStyle}>
      <FadeInFromBottom duration={1000} className="another-feature-title">
        <Paragraph className="text-[3.5rem] font-brineue-bold text-primary-blue text-center">
          Fitur Lainnya yang Bikin Hidup Lebih Mudah
        </Paragraph>
      </FadeInFromBottom>
      <FadeInFromBottom duration={1400} className="another-feature-subtitle">
        <Paragraph fontUbuntu className="text-center text-primary-blue">
          Nikmati kenyamanan dengan fitur lainnya yang siap membantu kebutuhan
          <br /> sehari-hari
        </Paragraph>
      </FadeInFromBottom>

      <div className="flex justify-between mt-20 w-full">
        {featureFilter.map((item, index) => (
          <FadeInFromBottom
            duration={1000}
            className={`feature-filter-button-${index}`}
            style="grid"
            key={item.id}
          >
            <button
              className={`w-full p-4 rounded-[20px] flex flex-col items-center justify-center ${
                activeButton === index ? "bg-primary-blue" : "bg-[#E3F2FF]"
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="w-[80px] h-[80px]">
                <Image
                  src={item.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            </button>
            <Paragraph
              fontUbuntu
              className={`font-medium mt-3 text-center text-primary-blue`}
            >
              {item.name}
            </Paragraph>
          </FadeInFromBottom>
        ))}
      </div>
      <div className="mt-16 w-full flex items-center justify-between">
        <div className="w-[40%]">
          <FadeInLeft
            duration={1000}
            className={`active-feature-category-${activeButton}`}
          >
            <Paragraph fontUbuntu className="text-accent-orange">
              {DummyAnotherFeature[activeButton].category}
            </Paragraph>
          </FadeInLeft>
          <FadeInLeft
            duration={1200}
            className={`active-feature-title-${activeButton}`}
          >
            <Paragraph className="font-brineue-bold mt-8 text-primary-blue text-[3rem] leading-[3rem]">
              {DummyAnotherFeature[activeButton].title}
            </Paragraph>
          </FadeInLeft>
          <FadeInLeft
            duration={1400}
            className={`active-feature-description-${activeButton}`}
          >
            <Paragraph fontUbuntu className="text-primary-blue mt-8">
              {DummyAnotherFeature[activeButton].description}
            </Paragraph>
          </FadeInLeft>

          <Button
            buttonText={
              <div className="flex items-center gap-3">
                <Paragraph>Selengkapnya</Paragraph>
                <IoIosArrowForward size={15} color="white" />
              </div>
            }
            className={
              "rounded-3xl hidden md:block px-6 mt-8 py-2 font-brineue-bold text-primary-white text-center font-jakarta bg-primary-blue"
            }
          />
        </div>
        <FadeInRight
          className={`active-image-feature-${activeButton}`}
          style="w-[60%] flex justify-center"
        >
          <Image
            src={DummyAnotherFeature[activeButton].image}
            alt=""
            width={400}
            height={400}
          />
        </FadeInRight>
      </div>
    </div>
  );
};

export default HomeAnotherFeature;
