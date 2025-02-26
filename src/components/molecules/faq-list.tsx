import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Paragraph from "../atoms/paragraph";

interface Props {
  data: {
    id: number;
    title: string;
    href: string;
  }[];
}

const FAQList = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <div
          className="shadow-faq flex items-center justify-between px-6 bg-white py-4"
          key={item.id}
        >
          <Paragraph
            className="text-primary-blue text-lg rounded-[5px]"
            fontUbuntu
          >
            {item.title}
          </Paragraph>
          <MdArrowForwardIos color="#00529C" size={20} />
        </div>
      ))}
    </div>
  );
};

export default FAQList;
