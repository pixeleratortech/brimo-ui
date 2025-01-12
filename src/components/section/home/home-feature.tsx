import React from "react";
import Paragraph from "@/components/base/paragraph";
import Image from "next/image";
import { DummyFeature } from "@/helper/dummy";

interface Props {
  containerStyle: string;
}

const HomeFeature = ({ containerStyle }: Props) => {
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
        {DummyFeature.map((item) => (
          <div className="w-full" key={item.id}>
            <Image
              src={item.image}
              alt=""
              width={1000}
              className=""
              height={1000}
            />
            <div className="px-12 py-4 h-[12rem] -mt-2.5 rounded-b-[25px] text-primary-white text-center bg-primary-blue">
              <Paragraph className="text-xl font-brineue-bold">
                {item.title}
              </Paragraph>
              <Paragraph fontUbuntu className="text-sm py-3">
                {item.description}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeature;
