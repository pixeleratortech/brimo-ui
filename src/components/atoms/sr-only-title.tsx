import React from "react";

interface ScreenReaderTitleProps {
  title: string;
}

const ScreenReaderTitle = ({ title }: ScreenReaderTitleProps) => {
  return <h1 className="sr-only">{title}</h1>;
};

export default ScreenReaderTitle;