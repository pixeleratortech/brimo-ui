"use client";
import Paragraph from "@/components/base/paragraph";
import React from "react";
import Button from "@/components/base/button";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

interface Props {
  containerStyle: string;
}

const HomeHighlight = ({ containerStyle }: Props) => {
  const router = useRouter();
  return (
    <div className={containerStyle}>
      <div className="bg-primary-blue justify-between py-16 items-center flex rounded-3xl px-14">
        <div className="w-[37%] ml-12">
          <Paragraph className="text-[3.7rem] leading-[3.7rem] text-primary-white font-brineue-bold">
            Transaksi apa pun jadi mudah dan serba bisa bersama BRImo!
          </Paragraph>
          <Button
            onClick={() => router.push("/everyday-banking")}
            buttonText={
              <div className="flex items-center ">
                <Paragraph>Selengkapnya</Paragraph>
                <IoIosArrowForward />
              </div>
            }
            className={
              "rounded-3xl hidden md:block mt-8 text-sm px-6 py-2 font-brineue-bold text-primary-blue text-center font-jakarta bg-primary-white"
            }
          />
        </div>
        <div className="w-[50%]">
          <Image
            src="/images/brimo_highlight.svg"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHighlight;
