import React, { Fragment } from "react";
import LocationIcon from "../../../public/icons/location";
import Paragraph from "../base/paragraph";
import PhoneIcon from "../../../public/icons/phone";
import MailIcon from "../../../public/icons/mail";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "../base/button";
import { helpLinks, productLinks, promoLinks } from "@/helper/const";

const Footer = () => {
  const footerLinks = [
    { id: 1, label: "Privasi", href: "https://bri.co.id/privacy" },
    {
      id: 2,
      label: "Syarat & ketentuan",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 3,
      label: "Sitemap",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 4,
      label: "Karier",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 5,
      label: "CMS BRI",
      href: "https://bri.co.id/term-of-use",
    },
    {
      id: 6,
      label: "E-form BRI",
      href: "https://bri.co.id/term-of-use",
    },
  ];

 

  return (
    <div className="bottom-0 mt-8">
      <div className="bg-primary-blue rounded-t-[75px]">
        <div className="max-w-screen-xl relative h-[25rem] justify-between flex mx-auto">
          <div className="mt-24">
            <div className="flex gap-3 items-center">
              <Paragraph className="text-[3rem] text-primary-white font-brineue-bold">
                Download
              </Paragraph>
              <Image
                src="/images/brimo_home_banner.svg"
                alt=""
                width={150}
                height={150}
              />
              <Paragraph className="text-[3rem] text-primary-white font-brineue-bold">
                sekarang!
              </Paragraph>
            </div>
            <div className="flex py-4 mt-4 gap-8">
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
          <Image
            src="/images/brimo_mascott.svg"
            alt=""
            className="absolute top-12 -right-20"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-primary-blue lg:px-0 px-4 pt-16">
        <div className="grid grid-cols-1 lg:flex gap-16 max-w-screen-xl mx-auto">
          <div className="border-b pb-10 lg:border-none lg:pb-0">
            <div className="h-[4.5rem] lg:h-[5rem]">
              <Paragraph className="font-brineue-bold text-[22px] text-primary-white">
                BRI KANTOR PUSAT
              </Paragraph>
              <Paragraph className="text-primary-white font-poppins text-[16px] lg:text-[14px]">
                PT. Bank Rakyat Indonesia (Persero) Tbk.
              </Paragraph>
            </div>
            <div className="flex gap-2">
              <LocationIcon className="mt-1 lg:mt-0.5 w-3 h-3 lg:w-5 lg:h-5" />
              <Paragraph className="text-primary-white font-poppins leading-6 lg:leading-5 text-[16px] lg:text-[14px]">
                Gedung BRI
                <br />
                Jl. Jenderal Sudirman <br className="md:hidden block" />{" "}
                Kav.44-46
                <br />
                Jakarta 10210
                <br />
                Indonesia
              </Paragraph>
            </div>
            <div className="mt-12">
              <div className="flex gap-2 items-center">
                <PhoneIcon />
                <Paragraph className="text-[16px] lg:text-[14px] font-poppins text-primary-white">
                  1500017
                </Paragraph>
              </div>
              <div className="flex gap-2 items-center">
                <MailIcon />
                <Paragraph className="text-[16px] lg:text-[14px] font-poppins text-primary-white">
                  callbri@bri.co.id
                </Paragraph>
              </div>
              <div className="flex gap-4 lg:gap-7 items-center border-t border-b lg:border-none py-4 lg:py-0 mt-10">
                <Link
                  href="https://www.facebook.com/BRIofficialpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF width={20} height={20} color="white" />
                </Link>
                <Link
                  href="https://x.com/promo_BRI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXFill width={20} height={20} color="white" />
                </Link>
                <Link
                  href="https://www.instagram.com/bankbri_id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiInstagram className="w-5 h-5" color="white" />
                </Link>
                <Link
                  href="https://www.youtube.com/@BANK_BRI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineYoutube className="w-6 h-6" color="white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="h-[3rem] lg:h-[5rem]">
              <Paragraph className="font-brineue-bold text-[22px] text-primary-white">
                PRODUK
              </Paragraph>
            </div>
            <div className="flex gap-2 flex-col">
              {productLinks.map((item) => (
                <Link
                  className="text-[16px] lg:text-[14px] font-brineue-bold"
                  key={item.id}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="h-[3rem] lg:h-[5rem]">
              <Paragraph className="font-brineue-bold text-[22px] text-primary-white">
                PROMO
              </Paragraph>
            </div>
            <div className="flex gap-2 flex-col">
              {promoLinks.map((item) => (
                <Link
                  className="text-[16px] lg:text-[14px] font-brineue-bold"
                  key={item.id}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="h-[3rem] lg:h-[5rem]">
              <Paragraph className="font-brineue-bold text-[22px] text-primary-white">
                BANTUAN
              </Paragraph>
            </div>
            <div className="flex gap-2 flex-col">
              {helpLinks.map((item) => (
                <Link
                  className="text-[16px] lg:text-[14px] font-brineue-bold"
                  key={item.id}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t ml-16 border-b py-8 lg:py-0 mt-[155px] lg:border-none lg:w-[25%]">
            <div className=" text-primary-blue hidden lg:block h-[5rem]">.</div>
            <div className="lg:flex justify-between">
              <div className="font-poppins">
                <Paragraph className="md:text-[12px] lg:text-[14px] text-white">
                  BRI berizin dan diawasi oleh Otoritas
                  <br />
                  Jasa Keuangan & Bank Indonesia
                </Paragraph>
                <Paragraph className="md:text-[12px] mt-4 lg:text-[14px] text-white">
                  BRI merupakan peserta penjaminan LPS
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between  max-w-screen-xl mx-auto items-center mt-12 md:mt-16">
          <Paragraph className="font-bold text-center lg:text-left font-pp-right-grotesk text-[12px]">
            © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights
            Reserved.
          </Paragraph>
          <div className="mt-8 lg:mt-0 flex-wrap flex justify-center md:justify-end items-center gap-2">
            {footerLinks?.map((item, index) => (
              <Fragment key={item.id}>
                <Link href={item.href} key={index}>
                  <Paragraph
                    fontUbuntu
                    className="font-bold font-pp-right-grotesk text-[12px] text-white"
                  >
                    {item.label}
                  </Paragraph>
                </Link>
                {index !== footerLinks?.length - 1 && (
                  <GoDotFill color="white" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="relative max-w-screen-2xl mx-auto mt-6 pb-3">
          <div
            className="top-0 left-0 w-full h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>

          <Paragraph className="text-white mt-4 text-[10px] font-pp-right-grotesk lg:text-[12px] text-center">
            BRI berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia
            BRI merupakan peserta penjaminan LPS
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Footer;
