import React from "react";
import Image from "next/image";
import Paragraph from "@/components/base/paragraph";
import Button from "@/components/base/button";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  containerStyle: string;
}

const HomeDescription = ({ containerStyle }: Props) => {
  return (
    <div className={containerStyle}>
      <Image
        src="/images/description_image.svg"
        width={450}
        height={450}
        alt=""
      />
      <div className="w-[50%]">
        <Paragraph className="text-[3rem] font-brineue-bold leading-[3rem] -ml-0.5 text-primary-blue">
          Buka Tabungan Pake
        </Paragraph>
        <Image src="/icons/blue_brimo.svg" width={280} height={280} alt="" />
        <Paragraph fontUbuntu className="text-primary-blue my-6">
          Dengan BRImo, buka tabungan baru jadi super simpel gak perlu antre di
          bank!
          <br /> Dengan BRImo, buka tabungan jadi lebih gampang dan cepat! Nggak
          perlu ke
          <br /> bank, cukup lewat aplikasi, Anda bisa langsung punya rekening
          baru dalam
          <br /> hitungan menit.
        </Paragraph>
        <Button
          buttonText={
            <div className="flex items-center gap-3">
              <Paragraph>Selengkapnya</Paragraph>
              <IoIosArrowForward size={15} color="white" />
            </div>
          }
          className={
            "rounded-3xl hidden md:block px-6 py-2 font-brineue-bold text-primary-white text-center font-jakarta bg-primary-blue"
          }
        />
      </div>
    </div>
  );
};

export default HomeDescription;
