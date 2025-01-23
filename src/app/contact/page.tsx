"use client";

import BudgetRangeSlider from "@/components/general/BudgetRangeSlider";
import { BodyText, TitleText } from "@/components/ui/Text";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCaretDown,
  FaCheck,
  FaLaptop,
  FaUsers,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdError } from "react-icons/md";
import countries from "countries-phone-masks";
import getVisitorLocation from "@/lib/utils/getVisitorLocation";
import Portal from "@/components/ui/Portal";
import PhoneCodePicker from "@/components/ui/Picker";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    subject: "",
    channel: "",
  });

  const onNext = (v: any) => {
    setDetails((prev) => ({ ...prev, ...v }));
    setStep((prev) => ++prev);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstStep
            initialValues={{
              subject: details.subject,
              channel: details.channel,
            }}
            onNext={onNext}
          />
        );

      case 2:
        return details.subject === "complaint" ? (
          <ComplaintStep
            channel={details.channel}
            onPrev={() => setStep((prev) => --prev)}
          />
        ) : (
          <SecondStep
            channel={details.channel}
            onPrev={() => setStep((prev) => --prev)}
          />
        );

      default:
        break;
    }
  };

  const renderSubtitle = () => {
    switch (details.subject) {
      case "consultation":
        return "Ready to dive deeper into our solution? Our expert team will provide a comprehensive walkthrough, answer your specific questions, and help you understand the full potential of our technology.";

      case "demo":
        return "Ready to dive deeper into our solution? Request a tailored demonstration that showcases how our AI-powered platform can transform your business workflow.";

      case "complaint":
        return "Your feedback drives our continuous improvement. We're committed to addressing your concerns promptly, transparently, and effectively. Submit detailed information about your experience, and our dedicated support team will investigate and resolve your issue with the highest priority.";

      default:
        break;
    }
  };

  return (
    <div className="flex justify-between h-screen max-h-screen bg-white overflow-hidden">
      <div className="md:w-[40vw] w-full relative h-full max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#3D3A3A] scrollbar-track-[#C5C4C4] scrollable-content">
        <div className="absolute w-full md:px-10 px-4 flex items-center space-x-4 pt-10 pb-5 bg-white z-10">
          <button
            className="p-3 rounded-md bg-black bg-opacity-50 hover:bg-opacity-100 duration-300 ease-in-out"
            onClick={() => router.back()}
          >
            <FaArrowLeft color="white" size={18} />
          </button>
          <span className="text-lg text-black">Go back</span>
        </div>

        <h1 className="text-black text-xl mt-28 md:px-10 px-4">
          <TitleText weight="medium">How can we best help you?</TitleText>
        </h1>
        <p className="text-black text-base opacity-70 mt-2 md:px-10 px-4">
          {step === 1
            ? "Choose your preferred way to connect with us, and we'll ensure you get the support you need through the channel that works best for you."
            : renderSubtitle()}
        </p>

        {renderStep()}
      </div>
      <div className="w-[60vw] h-screen overflow-hidden relative hidden md:flex flex-col justify-end z-20">
        <div className="absolute w-full h-full">
          <Image
            alt="a lady writing a notebook with a laptop"
            src={"/images/contact_cover_image.jpeg"}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute bg-black bg-opacity-50 w-full h-full" />
        </div>

        <div className="px-10 py-20 z-10">
          <Image
            alt="Erprex logo"
            src={"/images/erprex_logo_white_nobg.png"}
            width={200}
            height={200}
            priority
            className="object-cover"
          />

          <BodyText
            weight="medium-italic"
            className="text-2xl text-white w-[80%] block mb-10 mt-32"
          >
            &apos;Their ERP solution seamlessly integrated our brick-and-mortar
            and e-commerce operations. Order fulfillment time dropped from 48
            hours to just 4 hours. The ROI exceeded our expectations within the
            first year.&apos;
          </BodyText>

          <Rating value={4.5} readOnly style={{ maxWidth: 150 }} />
          <TitleText weight="medium" className="text-white text-xl block mt-5">
            Chijioke Okonkwo,{" "}
            <span className="opacity-80">MarketSquare Retail Limited</span>
          </TitleText>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

const FirstStep = ({
  initialValues,
  onNext,
}: {
  initialValues: any;
  onNext: (v: any) => void;
}) => {
  const [inputs, setInputs] = useState({
    subject: "",
    channel: "",
  });

  const enableBtn = inputs.subject !== "" && inputs.channel !== "";

  useEffect(() => {
    setInputs(initialValues);
  }, [initialValues]);

  return (
    <div className="relative h-[70vh] flex flex-col justify-between">
      <div className="mt-10">
        <div className="md:px-10 px-4">
          <span className="text-black text-base">Select your reason</span>
          <div className="flex gap-x-5 mt-3">
            <button
              className={`flex flex-col items-center py-4 w-40 rounded-lg border-4 outline-none ${
                inputs.subject === "consultation"
                  ? "border-my-blue border-opacity-100"
                  : "border-black border-opacity-5 hover:border-opacity-10"
              }`}
              onClick={() =>
                setInputs((prev) => ({ ...prev, subject: "consultation" }))
              }
            >
              <FaUsers
                size={26}
                color={inputs.subject === "consultation" ? "#1e40af" : "black"}
              />
              <p className="text-black text-sm mt-2">Consultation</p>
            </button>

            <button
              className={`flex flex-col items-center py-4 w-40 rounded-lg border-4 outline-none ${
                inputs.subject === "demo"
                  ? "border-my-blue border-opacity-100"
                  : "border-black border-opacity-5 hover:border-opacity-10"
              }`}
              onClick={() =>
                setInputs((prev) => ({ ...prev, subject: "demo" }))
              }
            >
              <FaLaptop
                size={26}
                color={inputs.subject === "demo" ? "#1e40af" : "black"}
              />
              <p className="text-black text-sm mt-2">Demo Request</p>
            </button>

            <button
              className={`flex flex-col items-center py-4 w-40 rounded-lg border-4 outline-none ${
                inputs.subject === "complaint"
                  ? "border-my-blue border-opacity-100"
                  : "border-black border-opacity-5 hover:border-opacity-10"
              }`}
              onClick={() =>
                setInputs((prev) => ({ ...prev, subject: "complaint" }))
              }
            >
              <MdError
                size={26}
                color={inputs.subject === "complaint" ? "#1e40af" : "black"}
              />
              <p className="text-black text-sm mt-2">Complaint</p>
            </button>
          </div>
        </div>

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base">
            How do you want us to respond?
          </span>
          <div className="flex gap-x-5 mt-3">
            <button
              className={`flex flex-col items-center py-4 w-40 rounded-lg border-4 outline-none ${
                inputs.channel === "whatsapp"
                  ? "border-my-blue border-opacity-100"
                  : "border-black border-opacity-5 hover:border-opacity-10"
              }`}
              onClick={() =>
                setInputs((prev) => ({ ...prev, channel: "whatsapp" }))
              }
            >
              <IoLogoWhatsapp
                size={26}
                color={inputs.channel === "whatsapp" ? "#1e40af" : "black"}
              />
              <p className="text-black text-sm mt-2">Via WhatsApp</p>
            </button>

            <button
              className={`flex flex-col items-center py-4 w-40 rounded-lg border-4 outline-none ${
                inputs.channel === "email"
                  ? "border-my-blue border-opacity-100"
                  : "border-black border-opacity-5 hover:border-opacity-10"
              }`}
              onClick={() =>
                setInputs((prev) => ({ ...prev, channel: "email" }))
              }
            >
              <MdEmail
                size={26}
                color={inputs.channel === "email" ? "#1e40af" : "black"}
              />
              <p className="text-black text-sm mt-2">Via Email</p>
            </button>
          </div>
        </div>
      </div>

      <div className="pb-5 bg-white flex items-center justify-between w-full md:px-10 px-4">
        <div className="flex items-center gap-x-3">
          <div className="h-3 w-3 rounded-full bg-my-blue" />
          <div className="h-3 w-3 rounded-full bg-black bg-opacity-30" />
          <p className="text-black text-base opacity-50 ml-2">Step 1 of 2</p>
        </div>

        <button
          className={`bg-my-blue text-white px-10 py-2 rounded-md ${
            enableBtn
              ? "cursor-pointer opacity-100"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={() => onNext(inputs)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const ComplaintStep = ({
  channel,
  onPrev,
}: {
  channel: string;
  onPrev: () => void;
}) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    company: "",
    contact: "",
    hasUsedErprex: false,
    message: "",
  });
  const [selectedCountryPosition, setSelectedCountryPosition] = useState(0);
  const [isPickerOn, setPickerOn] = useState(false);

  const enableBtn =
    inputs.fullName !== "" && inputs.contact !== "" && inputs.message !== "";

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {};

  useEffect(() => {
    const fetchLocation = async () => {
      const country = await getVisitorLocation();
      const position = countries.findIndex((item) => item.name === country);
      setSelectedCountryPosition(position || 0);
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const { code } = countries[selectedCountryPosition];
    setInputs((prev) => ({ ...prev, contact: code }));
  }, [selectedCountryPosition]);

  return (
    <div className="mt-10 relative flex flex-col justify-between space-y-16">
      <div className="flex-grow">
        <div className="md:px-10 px-4">
          <span className="text-black text-base">
            Enter your full name <span className="text-red-700">*</span>
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={handleInputs}
            className="outline-none bg-transparent w-full border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 text-sm text-black px-4 h-12 flex items-center mt-2"
          />
        </div>

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base">Enter your company</span>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={inputs.company}
            onChange={handleInputs}
            className="outline-none bg-transparent w-full border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 text-sm text-black px-4 h-12 flex items-center mt-2"
          />
        </div>

        {channel === "email" ? (
          <div className="mt-6 md:px-10 px-4">
            <span className="text-black text-base">
              Enter your email <span className="text-red-700">*</span>
            </span>
            <input
              type="email"
              name="contact"
              placeholder="Email address"
              value={inputs.contact}
              onChange={handleInputs}
              className="outline-none bg-transparent w-full border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 text-sm text-black px-4 h-12 flex items-center mt-2"
            />
          </div>
        ) : (
          <div className="mt-6 md:px-10 px-4">
            <span className="text-black text-base">
              Enter your WhatsApp number <span className="text-red-700">*</span>
            </span>
            <div className="flex items-center space-x-2 mt-2 w-full border-4 border-black border-opacity-10 rounded-lg focus-within:border-my-blue focus-within:border-opacity-100 px-4 h-12">
              <div
                className="flex items-center space-x-4 h-full cursor-pointer"
                onClick={() => setPickerOn(true)}
              >
                <Image
                  alt={`${countries[selectedCountryPosition].name} flag svg icon`}
                  src={countries[selectedCountryPosition].flag}
                  width={30}
                  height={10}
                  className="object-cover"
                />

                <FaCaretDown color="black" size={14} />
              </div>

              <input
                type="tel"
                name="contact"
                placeholder=""
                value={inputs.contact}
                onChange={handleInputs}
                className="flex-grow text-sm text-black bg-transparent outline-none h-full"
              />
            </div>
          </div>
        )}

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base">
            Have you used any Erprex services?{" "}
            <span className="text-red-700">*</span>
          </span>

          <div className="flex items-center space-x-8 mt-2">
            <div className="flex items-center space-x-4">
              <div
                className={`w-5 h-5 rounded-sm border flex items-center justify-center ${
                  inputs.hasUsedErprex
                    ? "border-my-blue bg-my-blue"
                    : "border-black border-opacity-50"
                }`}
                onClick={() =>
                  setInputs((prev) => ({ ...prev, hasUsedErprex: true }))
                }
              >
                {inputs.hasUsedErprex && <FaCheck color="white" size={14} />}
              </div>
              <span className="text-black text-base">Yes</span>
            </div>

            <div className="flex items-center space-x-4">
              <div
                className={`w-5 h-5 rounded-sm border flex items-center justify-center ${
                  !inputs.hasUsedErprex
                    ? "border-my-blue bg-my-blue"
                    : "border-black border-opacity-50"
                }`}
                onClick={() =>
                  setInputs((prev) => ({ ...prev, hasUsedErprex: false }))
                }
              >
                {!inputs.hasUsedErprex && <FaCheck color="white" size={14} />}
              </div>
              <span className="text-black text-base">No</span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base">
            Enter your complaint
            <span className="text-red-700">*</span>
          </span>
          <textarea
            placeholder="Briefly state your complaint..."
            value={inputs.message}
            onChange={handleInputs}
            className="min-h-40 w-full outline-none bg-transparent border-4 border-black border-opacity-10 focus:border-my-blue focus:border-opacity-100 px-4 py-2 text-sm text-black mt-2 rounded-lg"
          />
        </div>
      </div>

      <div className="w-full md:px-10 px-4 pb-5">
        <div className="bg-white flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="h-3 w-3 rounded-full bg-black bg-opacity-30" />
            <div className="h-3 w-3 rounded-full bg-my-blue" />
            <p className="text-black text-base opacity-50 ml-2">Step 2 of 2</p>
          </div>

          <div className="flex items-center space-x-4 z-10">
            <button
              className={`bg-black text-white px-10 py-2 rounded-md`}
              onClick={onPrev}
            >
              Back
            </button>

            <button
              className={`bg-my-blue text-white px-10 py-2 rounded-md ${
                enableBtn
                  ? "cursor-pointer opacity-100"
                  : "cursor-not-allowed opacity-50"
              }`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {isPickerOn && (
        <Portal>
          <PhoneCodePicker
            currentPosition={selectedCountryPosition}
            onSelect={(i) => setSelectedCountryPosition(i)}
            close={() => setPickerOn(false)}
          />
        </Portal>
      )}
    </div>
  );
};

const SecondStep = ({
  channel,
  onPrev,
}: {
  channel: string;
  onPrev: () => void;
}) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    company: "",
    contact: "",
    size: "10-50",
    budget: {
      min: 50,
      max: 5000,
    },
    message: "",
  });
  const [selectedCountryPosition, setSelectedCountryPosition] = useState(0);
  const [isPickerOn, setPickerOn] = useState(false);

  const enableBtn = inputs.fullName !== "" && inputs.contact !== "";

  const handleInputs = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = useCallback(([min, max]: [number, number]) => {
    setInputs((prev) => ({ ...prev, budget: { min, max } }));
  }, []);

  const handleSubmit = async () => {};

  useEffect(() => {
    const fetchLocation = async () => {
      const country = await getVisitorLocation();
      const position = countries.findIndex((item) => item.name === country);
      setSelectedCountryPosition(position || 0);
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const { code } = countries[selectedCountryPosition];
    setInputs((prev) => ({ ...prev, contact: code }));
  }, [selectedCountryPosition]);

  return (
    <div className="mt-10 relative flex flex-col justify-between space-y-16">
      <div className="flex-grow">
        <div className="md:px-10 px-4">
          <span className="text-black text-base">
            Enter your full name <span className="text-red-700">*</span>
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={inputs.fullName}
            onChange={handleInputs}
            className="outline-none bg-transparent w-full border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 text-sm text-black px-4 h-12 flex items-center mt-2"
          />
        </div>

        {channel === "email" ? (
          <div className="mt-6 md:px-10 px-4">
            <span className="text-black text-base">
              Enter your email <span className="text-red-700">*</span>
            </span>
            <input
              type="email"
              name="contact"
              placeholder="Email address"
              value={inputs.contact}
              onChange={handleInputs}
              className="outline-none bg-transparent w-full border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 text-sm text-black px-4 h-12 flex items-center mt-2"
            />
          </div>
        ) : (
          <div className="mt-6 md:px-10 px-4">
            <span className="text-black text-base">
              Enter your WhatsApp number <span className="text-red-700">*</span>
            </span>
            <div className="flex items-center space-x-2 mt-2 w-full border-4 border-black border-opacity-10 rounded-lg focus-within:border-my-blue focus-within:border-opacity-100 px-4 h-12">
              <div
                className="flex items-center space-x-4 h-full cursor-pointer"
                onClick={() => setPickerOn(true)}
              >
                <Image
                  alt={`${countries[selectedCountryPosition].name} flag svg icon`}
                  src={countries[selectedCountryPosition].flag}
                  width={30}
                  height={10}
                  className="object-cover"
                />

                <FaCaretDown color="black" size={14} />
              </div>

              <input
                type="tel"
                name="contact"
                placeholder=""
                value={inputs.contact}
                onChange={handleInputs}
                className="flex-grow text-sm text-black bg-transparent outline-none h-full"
              />
            </div>
          </div>
        )}

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base">Enter your company</span>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={inputs.company}
            onChange={handleInputs}
            className="outline-none bg-transparent w-full border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 text-sm text-black px-4 h-12 flex items-center mt-2"
          />
        </div>

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base block">
            Select your company size <span className="text-red-700">*</span>
          </span>
          <div className="border-4 border-black border-opacity-10 rounded-lg focus:border-my-blue focus:border-opacity-100 px-4 h-12 flex items-center mt-2">
            <select
              name="size"
              value={inputs.size}
              onChange={handleInputs}
              className="outline-none bg-transparent w-full text-sm text-black"
            >
              <option value="<10">&gt; 10 people</option>
              <option value="10-50">10 - 50 people</option>
              <option value="50-250">50 - 250 people</option>
              <option value=">250">&lt; 250 people</option>
            </select>
          </div>
        </div>

        <div className="mt-6 md:px-10 px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-black text-base block">
              Select your budget <span className="text-red-700">*</span>
            </span>
            <p className="text-black text-base">
              ${inputs.budget.min} - ${inputs.budget.max}{" "}
              <span className="opacity-70">USD</span>
            </p>
          </div>

          <BudgetRangeSlider
            min={50}
            max={5000}
            onChange={handleBudgetChange}
            isLg
          />
        </div>

        <div className="mt-6 md:px-10 px-4">
          <span className="text-black text-base">Enter additional info</span>
          <textarea
            placeholder="Briefly state additional message..."
            value={inputs.message}
            onChange={handleInputs}
            className="min-h-40 w-full outline-none bg-transparent border-4 border-black border-opacity-10 focus:border-my-blue focus:border-opacity-100 px-4 py-2 text-sm text-black mt-2 rounded-lg"
          />
        </div>
      </div>

      <div className="pb-5 bg-white flex items-center justify-between w-full md:px-10 px-4">
        <div className="flex items-center gap-x-3">
          <div className="h-3 w-3 rounded-full bg-black bg-opacity-30" />
          <div className="h-3 w-3 rounded-full bg-my-blue" />
          <p className="text-black text-base opacity-50 ml-2">Step 2 of 2</p>
        </div>

        <div className="flex items-center space-x-4 z-10">
          <button
            className={`bg-black text-white px-10 py-2 rounded-md`}
            onClick={onPrev}
          >
            Back
          </button>

          <button
            className={`bg-my-blue text-white px-10 py-2 rounded-md ${
              enableBtn
                ? "cursor-pointer opacity-100"
                : "cursor-not-allowed opacity-50"
            }`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {isPickerOn && (
        <Portal>
          <PhoneCodePicker
            currentPosition={selectedCountryPosition}
            onSelect={(i) => setSelectedCountryPosition(i)}
            close={() => setPickerOn(false)}
          />
        </Portal>
      )}
    </div>
  );
};
