"use client";

import { FC, ReactNode, useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";

interface RoundButtonProps {
  bgColor: string;
  hasIcon?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export const RoundButton: FC<RoundButtonProps> = ({
  bgColor,
  hasIcon,
  className,
  onClick,
  children,
}) => {
  const [isBtnHoveredOn, setBtnHoveredOn] = useState(false);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => setBtnHoveredOn(true)}
      onMouseLeave={() => setBtnHoveredOn(false)}
    >
      <div
        className={`absolute w-full rounded-full transition-transform bg-${bgColor} bg-opacity-20 ${
          isBtnHoveredOn ? "-translate-x-2 -translate-y-2" : ""
        } duration-300 ease-in-out`}
      />
      <button
        className={`${className} bg-${bgColor} h-14 px-10 flex items-center justify-center space-x-4 rounded-full`}
        onClick={onClick}
      >
        <span className="text-white text-base">{children}</span>
        {hasIcon && (
          <span
            className={`bg-white text-${bgColor} h-6 w-6 flex items-center justify-center rounded-full`}
          >
            <RxArrowTopRight size={18} />
          </span>
        )}
      </button>
    </div>
  );
};

interface ButtonProps {
  color: string;
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

export const RectButton: FC<ButtonProps> = ({
  color,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${className} bg-${color} h-10 w-32 flex items-center justify-center space-x-2 rounded-md text-sm text-white hover:rounded-full duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BorderButton: FC<ButtonProps> = ({
  color,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${className} border border-${color} bg-transparent text-${color} h-12 w-32 flex items-center justify-center space-x-2 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
