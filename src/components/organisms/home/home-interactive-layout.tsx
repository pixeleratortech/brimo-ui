"use client";
import FadeInFromBottom from "@/components/animation/fadeInBottom";
import Button from "@/components/atoms/button";
import Paragraph from "@/components/atoms/paragraph";
import React, { useRef } from "react";
import { RiFullscreenFill } from "react-icons/ri";
import Image from "next/image";

interface Props {
  containerStyle: string;
}

const HomeInteractiveLayout = ({ containerStyle }: Props) => {
  const iframeRef = useRef(null);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if ((iframeRef.current as HTMLIFrameElement).requestFullscreen) {
        (iframeRef.current as HTMLIFrameElement).requestFullscreen();
      } else if ((iframeRef.current as HTMLIFrameElement).requestFullscreen) {
        (iframeRef.current as HTMLIFrameElement).requestFullscreen();
      } else if ((iframeRef.current as HTMLIFrameElement).requestFullscreen) {
        (iframeRef.current as HTMLIFrameElement).requestFullscreen();
      } else if ((iframeRef.current as HTMLIFrameElement).requestFullscreen) {
        (iframeRef.current as HTMLIFrameElement).requestFullscreen();
      }
    }
  };

  return (
    <div className={containerStyle}>
      <div className="flex flex-col justify-center gap-4">
        <iframe
          ref={iframeRef}
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: 20 }}
          width="362"
          height="642"
          src="https://embed.figma.com/proto/976ALVPRd8BYvOZngUaAgn/BRimo%2C-Qlola-Merchant?page-id=3426%3A12545&node-id=3426-15171&viewport=428%2C-21%2C0.17&scaling=min-zoom&content-scaling=fixed&embed-host=share&hide-ui=1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col justify-center">
        <FadeInFromBottom
          duration={1000}
          style="flex gap-4 items-center"
          className="interactive-feature-title"
        >
          <Paragraph className="text-[3.5rem] font-brineue-bold text-primary-blue text-left">
            Simulasi Aplikasi
          </Paragraph>
          <Image
            src="/icons/blue_brimo.svg"
            alt=""
            className="-mt-1"
            width={180}
            height={180}
          />
        </FadeInFromBottom>
        <FadeInFromBottom
          duration={1200}
          className="interactive-feature-subtitle"
        >
          <Paragraph className="text-lg font-brineue-regular text-primary-blue text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            culpa recusandae nobis itaque eos consequuntur error fugit, unde
            quaerat blanditiis?
          </Paragraph>
        </FadeInFromBottom>
        <Button
          className="px-2 py-2 mt-4 w-fit bg-primary-blue font-brineue-bold text-primary-white rounded-md shadow-md hover:bg-secondary-blue transition"
          onClick={handleFullscreen}
          buttonText={
            <div className="flex items-center justify-center gap-2">
              <RiFullscreenFill />
              <Paragraph>Fullscreen</Paragraph>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HomeInteractiveLayout;
