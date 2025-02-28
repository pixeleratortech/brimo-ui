import React from "react";
import Image from "next/image";
import Paragraph from "@/components/atoms/paragraph";

interface Props {
  brimoLogo: string;
  textBanner: string;
  imageBanner: string;
}

const BillBanner = ({ brimoLogo, textBanner, imageBanner }: Props) => {
  return (
    <div className="bg-primary-blue pb-12 rounded-b-[50px] pt-28">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="text-left -mt-24 w-[50%] text-white">
          <div className="flex items-center mb-6">
            <Image
              src={brimoLogo}
              alt="BRImo Logo"
              className="w-[280px] h-auto mr-4"
              width={280}
              height={280}
            />
          </div>
          <Paragraph className="text-[3.5rem] font-brineue-bold leading-[3.5rem]">
            {textBanner}
          </Paragraph>
        </div>
        <div className="flex -mr-12 justify-end">
          <Image
            src={imageBanner}
            alt="BRImo Illustration"
            className="w-[600px]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default BillBanner;
