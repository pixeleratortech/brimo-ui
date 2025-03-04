"use client";
import Filter from "@/components/atoms/filter";
import { openSavingFilter } from "@/helper/const";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Paragraph from "@/components/atoms/paragraph";
import { DummySavingData } from "@/helper/dummy";
import FadeInLeft from "@/components/animation/fadeInLeft";
import FadeInFromBottom from "@/components/animation/fadeInBottom";
import { useSearchParams } from "next/navigation";

interface Props {
  containerStyle: string;
}

const SavingTutorials = ({ containerStyle }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<number>(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());
    if ("sudah-punya-tabungan" in query) {
      setSelectedFilter(0);
    } else if ("belum-punya-tabungan" in query) {
      setSelectedFilter(1);
    }
  }, [searchParams]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleFilterChange = (selectedFilter: number) => {
    setSelectedFilter(selectedFilter);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % DummySavingData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeData =
    selectedFilter === 0
      ? DummySavingData[activeIndex]
      : DummySavingData[activeIndex];

  return (
    <div className={containerStyle}>
      <div className="flex justify-center">
        <Filter
          onFilterChange={handleFilterChange}
          initialFilter={selectedFilter}
          filterData={openSavingFilter}
        />
      </div>
      <div className="max-w-screen-xl mt-12 flex justify-between mx-auto">
        <div className="w-[50%] flex justify-center">
          <div className="relative w-fit">
            <div className="absolute inset-0 -left-[90px] m-auto bg-primary-blue h-[30rem] w-[30rem] rounded-full -z-10" />
            <FadeInLeft
              duration={1000}
              className={`saving-tutorial-${activeIndex}`}
            >
              <Image
                src={activeData.image}
                width={300}
                height={300}
                alt={activeData.title}
                className="relative z-20"
              />
            </FadeInLeft>
          </div>
        </div>

        <div className="w-[50%] flex flex-col justify-center">
          <div className="flex-col items-center justify-start mb-4 gap-4">
            {/* PROGRESS BAR */}
            <div className="flex items-center mb-4 gap-4">
              <div className="w-36 h-1 bg-gray-300 rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 h-full bg-primary-blue transition-all duration-500"
                  style={{
                    width: `${
                      ((activeIndex + 1) / DummySavingData.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* DOTS PROGRESS */}
            <div className="flex gap-3 mt-4">
              {DummySavingData.map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-5 border border-primary-blue rounded-full ${
                    index === activeIndex
                      ? "bg-primary-blue"
                      : "bg-primary-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <FadeInFromBottom
            className={`saving-tutorial-title-${activeIndex}`}
            duration={600}
          >
            <Paragraph className="text-primary-blue mt-4 font-brineue-bold text-[3rem] -ml-0.5 leading-[3rem] w-[70%]">
              {activeData.title}
            </Paragraph>
          </FadeInFromBottom>

          <FadeInFromBottom
            className={`saving-tutorial-image-${activeIndex}`}
            duration={800}
          >
            <Image
              src="/icons/blue_brimo.svg"
              width={200}
              height={200}
              alt="BRImo Icon"
            />
          </FadeInFromBottom>
          <FadeInFromBottom
            className={`saving-tutorial-description-${activeIndex}`}
            duration={1000}
          >
            <Paragraph className="text-primary-blue w-[85%] mt-8" fontUbuntu>
              {activeData.description}
            </Paragraph>
          </FadeInFromBottom>
        </div>
      </div>
    </div>
  );
};

export default SavingTutorials;
