import Paragraph from "@/components/atoms/paragraph";
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/button";
import FadeInLeft from "@/components/animation/fadeInLeft";
import FadeInRight from "@/components/animation/fadeInRight";

interface Props {
  containerStyle: string;
}

const HomeBanner = ({ containerStyle }: Props) => {
  return (
    <div className={containerStyle}>
      <div className="max-w-screen-xl h-[95vh] mx-auto px-4 justify-between items-center flex">
        <div>
          <div>
            <FadeInLeft duration={1000} className={`home-banner-title-image`}>
              <Image
                src="/images/brimo_home_banner.svg"
                width={400}
                height={400}
                alt=""
              />
            </FadeInLeft>
            <FadeInLeft duration={1200} className={`home-banner-title-text`}>
              <Paragraph fontUbuntu className="text-[3.3rem] font-light">
                Semua serba bisa
              </Paragraph>
            </FadeInLeft>
            <FadeInLeft duration={1400} className={`home-banner-description`}>
              <Paragraph fontUbuntu className="w-[70%] mt-5">
                Dengan BRImo, segala urusan perbankan jadi lebih mudah, cepat,
                dan bisa diakses kapan saja, di mana saja.
              </Paragraph>
            </FadeInLeft>
          </div>
          <div className="flex items-center gap-12 mt-20">
            <Button
              buttonText={"Download"}
              className={
                "rounded-3xl hidden md:block text-sm px-12 py-2 font-brineue-bold text-primary-blue text-center font-jakarta bg-primary-white"
              }
            />
            <Button
              buttonText={
                <div className="flex gap-3 items-center">
                  <Image
                    src="/icons/play_video.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <Paragraph className="font-brineue-bold">
                    Watch Video
                  </Paragraph>
                </div>
              }
              className={
                "rounded-3xl hidden md:block text-sm px-4 py-2 text-primary-white text-center font-jakarta bg-primary-blue"
              }
            />
          </div>
        </div>
        <div>
          <FadeInRight className={`home-banner-image`} duration={1400}>
            <Image
              src="/images/home_banner_image.svg"
              width={700}
              height={700}
              alt=""
            />
          </FadeInRight>

          <div className="flex justify-center gap-10 -mt-20 mx-8 glassmorphism py-4">
            <Button
              buttonText={
                <Image
                  alt=""
                  width={130}
                  height={130}
                  src="/icons/appstore_download.svg"
                />
              }
              className={""}
            />
            <Button
              buttonText={
                <Image
                  alt=""
                  width={130}
                  height={130}
                  src="/icons/playstore_download.svg"
                />
              }
              className={""}
            />
            <Button
              buttonText={
                <Image
                  alt=""
                  width={130}
                  height={130}
                  src="/icons/appgallery_download.svg"
                />
              }
              className={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
