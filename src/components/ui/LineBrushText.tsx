import { FC } from "react";

interface Props {
  brushColor: string;
  className?: string;
  text: string;
}

export const OLineBrushText: FC<Props> = ({ brushColor, className, text }) => {
  return (
    <div className="relative inline-block h-fit">
      <div className={`absolute w-2/3 h-full rotate-[-2deg]`}>
        <div className={`bg-${brushColor} h-1/3 w-full rounded-full`} />
        <div
          className={`bg-${brushColor} h-1/3 w-full rounded-full transition-transform translate-x-1`}
        />
        <div className={`bg-${brushColor} h-1/3 w-full rounded-full`} />
      </div>
      <span className={`${className} z-10 relative`}>{text}</span>
    </div>
  );
};
