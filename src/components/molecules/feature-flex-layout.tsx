"use client";
import React from "react";
import Image from "next/image";
import Paragraph from "../atoms/paragraph";
import Button from "../atoms/button";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  image: string;
  featureTitle: string;
  isReverse?: boolean;
  subtitle: string;
  url?: string;
  item: {
    icon: string;
    title: string;
  }[];
}

const FeatureLayout = ({
  image,
  featureTitle,
  subtitle,
  item,
  url,
  isReverse,
}: Props) => {
  const router = useRouter();

  const handleDirect = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <div
      className={`${
        isReverse ? "flex-row-reverse" : ""
      } flex items-center max-w-7xl px-4 mx-auto justify-between`}
    >
      <Image className="h-fit" src={image} alt="" width={450} height={450} />
      <div className="w-[50%]">
        <Paragraph className="text-primary-blue font-brineue-bold leading-[3.5rem] text-[3.5rem] inline">
          {featureTitle}
          <Image
            src="/icons/blue_brimo.svg"
            width={160}
            height={160}
            alt=""
            className="inline ml-3 -mt-2 align-middle"
          />
        </Paragraph>
        <Paragraph className="text-lg mt-4 text-primary-blue" fontUbuntu>
          {subtitle}
        </Paragraph>
        <div className="flex mt-12 flex-col gap-4">
          {item.map((item, idx) => (
            <div className="flex gap-3 items-center" key={idx}>
              <Image src={item.icon} alt="" width={40} height={40} />
              <Paragraph fontUbuntu className="text-primary-blue font-bold">
                {item.title}
              </Paragraph>
            </div>
          ))}
        </div>
        <Button
          buttonText={
            <div className="flex items-center gap-2">
              <Paragraph className="">Selengkapnya</Paragraph>
              <IoIosArrowForward />
            </div>
          }
          onClick={handleDirect}
          className={
            "rounded-3xl hidden mt-10 md:block text-sm px-6 py-2 font-brineue-bold text-primary-white text-center font-jakarta bg-primary-blue"
          }
        />
      </div>
    </div>
  );
};

export default FeatureLayout;
