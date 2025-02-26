import React from "react";
import Image from "next/image";
import Paragraph from "@/components/atoms/paragraph";

interface Props {
  image: string;
  brimoIcon: string;
  bannerText: string;
}

const LifestyleBanner = ({ image, brimoIcon, bannerText }: Props) => {
  return (
    <div className="bg-primary-blue rounded-b-[40px] h-[80vh]">
      <div className="flex items-center h-full justify-between pt-20 max-w-[90rem] mx-auto px-4">
        <div className="pl-20 -mt-20 w-[50%]">
          <Image src={brimoIcon} alt="" width={230} height={230} />
          <Paragraph className="text-primary-white -ml-0.5 mt-5 font-brineue-bold leading-[3.8rem] text-[3.8rem]">
            {bannerText}
          </Paragraph>
        </div>
        <div>
          <Image
            src={image}
            alt=""
            className="w-[600px]"
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default LifestyleBanner;
