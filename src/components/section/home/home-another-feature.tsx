import Paragraph from "@/components/base/paragraph";
import { anotherFeature } from "@/helper/const";
import React from "react";
import Image from "next/image";

interface Props {
  containerStyle: string;
}

const HomeAnotherFeature = ({ containerStyle }: Props) => {
  return (
    <div className={containerStyle}>
      <Paragraph className="text-[3.5rem] font-brineue-bold text-primary-blue text-center">
        Fitur Lainnya yang Bikin Hidup Lebih Mudah
      </Paragraph>
      <Paragraph fontUbuntu className="text-center text-primary-blue">
        Nikmati kenyamanan dengan fitur lainnya yang siap membantu kebutuhan
        <br /> sehari-hari
      </Paragraph>
      <div className="flex gap-14 mt-20 w-full">
        {anotherFeature.map((item) => (
          <div className="w-full" key={item.id}>
            <div className="bg-primary-blue p-4 rounded-[20px]">
              <Image
                src={item.icon}
                width={50}
                className="w-full"
                height={50}
                alt=""
              />
            </div>
            <Paragraph
              fontUbuntu
              className="font-medium mt-3 text-center text-primary-blue"
            >
              {item.name}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAnotherFeature;
