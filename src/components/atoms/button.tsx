import React from "react";

interface Props {
  buttonText: string | React.ReactNode;
  onClick?: () => void;
  className: string;
}

const Button = ({ buttonText, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
