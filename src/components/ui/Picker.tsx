import countries from "countries-phone-masks";
import Image from "next/image";
import { FC } from "react";

type CountryType = {
  name: string;
  code: string;
  iso: string;
  flag: string;
  mask: string[];
};

interface PhoneCodePickerProps {
  currentPosition: number;
  onSelect: (i: number) => void;
  close: () => void;
}

const PhoneCodePicker: FC<PhoneCodePickerProps> = ({
  currentPosition,
  onSelect,
  close,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex md:items-center items-end justify-center z-50"
      onClick={close}
    >
      <div
        className="xl:w-[25vw] lg:w-[30vw] md:w-[40vw] w-full max-h-[80vh] bg-white rounded-lg py-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3D3A3A] scrollbar-track-[#C5C4C4] scrollable-content"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xl text-black md:px-8 px-4 mb-5 border-b border-black border-opacity-20 pb-3">
          Select phone code
        </p>

        {countries.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 md:px-10 px-4 hover:bg-black hover:bg-opacity-20"
            onClick={() => {
              onSelect(index);
              close();
            }}
          >
            <div className="flex items-center space-x-4">
              <Image
                alt={`${option.name} flag svg icon`}
                src={option.flag}
                width={30}
                height={10}
                className="object-cover"
              />
              <span className="text-black text-base">
                <span className="opacity-70">{option.iso}</span> {option.code}
              </span>
            </div>

            <div
              className={`h-4 w-4 flex items-center justify-center border rounded-full ${
                currentPosition === index
                  ? "border-my-blue border-opacity-100"
                  : "border-black border-opacity-50"
              }`}
            >
              {currentPosition === index && (
                <div className="h-3 w-3 bg-my-blue rounded-full" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneCodePicker;
