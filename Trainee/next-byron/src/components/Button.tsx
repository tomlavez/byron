import React from "react";

interface IProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, disabled, onClick }: IProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="p-2 bg-red-300 rounded shadow"
    >
      {children}
    </button>
  );
};

export default Button;
