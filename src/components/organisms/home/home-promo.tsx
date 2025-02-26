import FadeInFromBottom from "@/components/animation/fadeInBottom";
import Paragraph from "@/components/atoms/paragraph";
import { DummyPromo } from "@/helper/dummy";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/button";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  containerStyle: string;
}

const HomePromo = ({ containerStyle }: Props) => {
  return (
    <div className={containerStyle}>
      <FadeInFromBottom duration={1000} className="another-feature-title">
        <Paragraph className="text-[3.5rem] font-brineue-bold text-primary-blue text-center">
          Promo Bulan Ini
        </Paragraph>
      </FadeInFromBottom>
      <FadeInFromBottom duration={1400} className="another-feature-subtitle">
        <Paragraph fontUbuntu className="text-center text-primary-blue">
          Dapatkan Kejutan Promo Spesial Setiap Hari!
        </Paragraph>
      </FadeInFromBottom>
      <div className="flex gap-8 w-full">
        {DummyPromo.map((item) => (
          <FadeInFromBottom
            key={item.id}
            style="w-full mt-24"
            className={`dummy-promo-${item.id}`}
          >
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt=""
                width={1000}
                className="w-full h-full object-cover"
                height={1000}
              />
            </div>
            <div className="bg-primary-blue rounded-b-[20px] space-y-4 pb-12 -mt-6 pt-10 px-12">
              <Paragraph fontUbuntu className="text-sm">
                {item.date}
              </Paragraph>
              <Paragraph className="font-brineue-bold text-3xl w-[80%]">
                {item.title}
              </Paragraph>
              <Paragraph className="text-[10px] font-brineue-bold text-primary-blue bg-primary-white rounded-full px-2 py-1 w-fit">
                {item.category}
              </Paragraph>
            </div>
          </FadeInFromBottom>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          buttonText={
            <div className="flex items-center gap-3">
              <Paragraph>Lihat Semua Promo</Paragraph>
              <IoIosArrowForward size={15} color="white" />
            </div>
          }
          className={
            "rounded-3xl hidden md:block px-6 mt-12 py-2 font-brineue-bold text-primary-white text-center font-jakarta bg-primary-blue"
          }
        />
      </div>
    </div>
  );
};

export default HomePromo;
