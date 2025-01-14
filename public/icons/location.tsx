import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const LocationIcon: React.FC<IconProps> = ({
  width = 19,
  height = 21,
  fill = "#F6FAFF",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 21"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.27374 2.17383C5.29016 2.17383 2.06083 5.40884 2.06083 9.39942C2.06083 11.6766 3.43754 13.8049 5.36322 15.4768L8.90932 18.5555C9.11846 18.7371 9.42902 18.7371 9.63815 18.5555L13.1842 15.4768C15.1099 13.8049 16.4866 11.6766 16.4866 9.39942C16.4866 5.40884 13.2573 2.17383 9.27374 2.17383ZM0 9.39942C0 4.26867 4.15199 0.109375 9.27374 0.109375C14.3955 0.109375 18.5475 4.26867 18.5475 9.39942C18.5475 12.5233 16.6827 15.1714 14.5339 17.0369L10.9879 20.1156C10.0041 20.9696 8.54334 20.9696 7.55962 20.1156L4.01352 17.0369C1.86481 15.1714 0 12.5233 0 9.39942Z"
        fill={fill}
      />
      <path
        d="M11.3346 9.39975C11.3346 10.5401 10.4119 11.4645 9.27372 11.4645C8.13556 11.4645 7.21289 10.5401 7.21289 9.39975C7.21289 8.2594 8.13556 7.33496 9.27372 7.33496C10.4119 7.33496 11.3346 8.2594 11.3346 9.39975Z"
        fill={fill}
      />
    </svg>
  );
};

export default LocationIcon;
