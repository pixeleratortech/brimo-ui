import React from "react";
import Paragraph from "@/components/base/paragraph";
import Image from "next/image";
import FadeInLeft from "@/components/animation/fadeInLeft";

interface Props {
  containerStyle: string;
}

const SavingBanner = ({ containerStyle }: Props) => {
  return (
    <div className={containerStyle}>
      <div className="max-w-screen-xl flex items-center justify-between pt-24 pb-20 mx-auto px-4">
        <div className="w-[50%]">
          <FadeInLeft duration={1200} className={`saving-banner-title-text`}>
            <Paragraph className="text-[4rem] leading-[4rem] font-brineue-bold text-primary-blue -ml-1 font-light">
              Buka Tabungan Pake
            </Paragraph>
          </FadeInLeft>
          <FadeInLeft duration={1400} className={`saving-banner-logo-image`}>
            <Image
              src="/icons/blue_brimo.svg"
              width={250}
              height={250}
              alt=""
            />
          </FadeInLeft>
          <FadeInLeft
            duration={1600}
            style="mt-12"
            className={`saving-banner-description`}
          >
            <Paragraph className=" text-primary-blue" fontUbuntu>
              Selain praktis, terdapat berbagai penawaran menarik khusus untuk
              pembukaan tabungan melalui BRImo. Kartu ATM akan dikirim langsung
              ke alamat Anda, dan rekening Anda akan otomatis terhubung dengan
              layanan mobile banking untuk mendukung kebutuhan transaksi
              sehari-hari. Prosesnya cepat, nyaman, dan <br /> tentunya aman.
            </Paragraph>
          </FadeInLeft>
        </div>
        <div className="w-[45%]">
          <Image
            src="/images/saving_banner_image.svg"
            className="w-full h-full"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SavingBanner;
