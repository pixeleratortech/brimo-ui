"use client";
import React, { useState } from "react";
import Paragraph from "@/components/base/paragraph";
import Image from "next/image";
import { DummyFeature } from "@/helper/dummy";
import Button from "@/components/base/button";
import { IoIosArrowForward } from "react-icons/io";
import FadeInFromBottom from "@/components/animation/fadeInBottom";

interface Props {
  containerStyle: string;
}

interface Feature {
  id: number;
  image: string;
  title: string;
  description: string;
}

const HomeFeature = ({ containerStyle }: Props) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderContent = (item: Feature, isHovered: boolean) => {
    if (isHovered) {
      return (
        <FadeInFromBottom
          className="feature-more-button"
          style="flex mt-12 justify-center items-center"
        >
          <Button
            buttonText={
              <div className="flex items-center gap-3">
                <Paragraph>Selengkapnya</Paragraph>
                <IoIosArrowForward size={15} color="#00529C" />
              </div>
            }
            className="rounded-3xl hidden md:block px-6 py-2 font-brineue-bold text-primary-blue text-center font-jakarta bg-primary-white"
          />
        </FadeInFromBottom>
      );
    }

    return (
      <>
        <Paragraph fontUbuntu className="py-3">
          {item.description}
        </Paragraph>
      </>
    );
  };

  return (
    <div className={containerStyle}>
      <Paragraph className="text-[3.5rem] font-brineue-bold text-primary-blue text-center">
        Fitur Unggulan
      </Paragraph>
      <Paragraph fontUbuntu className="text-center text-primary-blue">
        Nikmati kemudahan transaksi, pembayaran, dan investasi dalam satu
        aplikasi
        <br /> praktis dengan fitur-fitur unggulan BRImo
      </Paragraph>
      <div className="flex mt-16 gap-8 justify-between">
        {DummyFeature.map((item: Feature) => {
          const isHovered = hoveredItem === item.id;

          return (
            <div
              className="w-full"
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full rounded-t-[25px] overflow-hidden relative">
                <Image
                  src={item.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>

              <div className="px-12 py-4 h-[12rem] rounded-b-[25px] text-primary-white text-center bg-primary-blue">
                <Paragraph className="text-2xl font-brineue-bold">
                  {item.title}
                </Paragraph>
                {renderContent(item, isHovered)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeature;
