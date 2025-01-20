"use client";

import { FC, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BodyText } from "./Text";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface TestimonialCardProp {
  review: string;
  rating: number;
  author: {
    name: string;
    company: string;
    title: string;
  };
}

export const TestimonialCard: FC<TestimonialCardProp> = ({
  review,
  rating,
  author,
}) => {
  return (
    <div className="bg-black bg-opacity-5 w-[30vw] p-7 rounded-md">
      <p className="text-black text-base mb-5">{review}</p>

      <Rating value={rating} readOnly style={{ maxWidth: 100 }} />

      <BodyText weight="medium" className="text-black text-lg mt-3 block">
        {author.name}
      </BodyText>
      <p className="text-sm text-black opacity-70">
        {author.title}, {author.company}
      </p>
    </div>
  );
};

interface FaqCardProp {
  question: string;
  answer: string;
}

export const FaqCard: FC<FaqCardProp> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full transition-all duration-500 ease-in-out py-8 border-b border-b-black border-opacity-30 overflow-hidden`}
    >
      <div className="flex items-center justify-between">
        <span className="text-black text-xl">{question}</span>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <FaMinus color="#1e40af" size={20} />
          ) : (
            <FaPlus color="#1e40af" size={20} />
          )}
        </button>
      </div>

      <p
        className={`w-3/4 text-black text-lg opacity-70 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 mt-5" : "max-h-0 mt-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};
