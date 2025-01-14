import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const MailIcon: React.FC<IconProps> = ({
  width = 12,
  height = 10,
  fill = "#F6FAFF",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 10"
      fill="none"
      className={className}
    >
      <path
        d="M11.2142 1.85268C11.2142 1.25856 10.7483 0.772461 10.179 0.772461H1.89749C1.32814 0.772461 0.862305 1.25856 0.862305 1.85268V8.33396C0.862305 8.92808 1.32814 9.41418 1.89749 9.41418H10.179C10.7483 9.41418 11.2142 8.92808 11.2142 8.33396V1.85268ZM10.179 1.85268L6.03823 4.54781L1.89749 1.85268H10.179ZM10.179 8.33396H1.89749V2.93289L6.03823 5.63343L10.179 2.93289V8.33396Z"
        fill={fill}
      />
    </svg>
  );
};

export default MailIcon;
