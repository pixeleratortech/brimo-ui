import React, { ReactNode } from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fontUbuntu?: boolean;
}

const Paragraph: React.FC<SectionProps> = ({
  children,
  className = "",
  fontUbuntu = false,
  style = {},
}) => {
  return (
    <p
      className={`${className} ${fontUbuntu && ubuntu.className}`}
      style={style}
    >
      {children}
    </p>
  );
};

export default Paragraph;
