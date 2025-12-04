import {
  CustomSolutionsFaq,
  GeneralFaq,
  GettingStartedFaq,
  HostingFaq,
  MobileAppFaq,
  SecurityFaq,
} from "@/components/general/FAQs";
import { RoundButton } from "@/components/ui/Button";
import { TitleText } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";

const FAQsPage = () => {
  return (
    <div className="w-full min-h-screen bg-my-bg overflow-x-hidden md:px-10 px-4 mt-10 flex flex-col items-center pb-20">
      <Image
        alt="an illustration of a man carrying a question mark symbol"
        src={"/images/faq_image.png"}
        width={200}
        height={200}
        priority
        className="object-cover"
      />

      <h1 className="text-black text-5xl text-center">
        <TitleText weight="bold">
          Frequently Asked
          <br />
          <span className="text-my-blue">Questions</span>
        </TitleText>
      </h1>
      <p className="text-xl text-black w-1/2 text-center self-center mt-7 opacity-70 mb-10">
        Find answers to our most commonly asked questions below. Can&apos;t find
        what you&apos;re looking for? Our support team is always here to help.
        Browse through these topics or{" "}
        <Link href="/contact" className="text-my-blue underline">
          reach out
        </Link>{" "}
        to us directly for personalized assistance.
      </p>

      <div className="flex justify-between space-x-20 w-full mt-10 md:px-10 px-4 bg-white bg-opacity-70 py-10 rounded-lg hover:bg-opacity-100 duration-500 ease-in-out">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-black mt-9">
            <TitleText weight="bold">General</TitleText>
          </h2>
        </div>

        <div className="w-2/3">
          <GeneralFaq />
        </div>
      </div>

      <div className="flex justify-between space-x-20 w-full mt-10 md:px-10 px-4 bg-white bg-opacity-70 py-10 rounded-lg hover:bg-opacity-100 duration-500 ease-in-out">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-black mt-9">
            <TitleText weight="bold">Mobile App</TitleText>
          </h2>
        </div>

        <div className="w-2/3">
          <MobileAppFaq />
        </div>
      </div>

      <div className="flex justify-between space-x-20 w-full mt-10 md:px-10 px-4 bg-white bg-opacity-70 py-10 rounded-lg hover:bg-opacity-100 duration-500 ease-in-out">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-black mt-9">
            <TitleText weight="bold">Custom Solutions</TitleText>
          </h2>
        </div>

        <div className="w-2/3">
          <CustomSolutionsFaq />
        </div>
      </div>

      <div className="flex justify-between space-x-20 w-full mt-10 md:px-10 px-4 bg-white bg-opacity-70 py-10 rounded-lg hover:bg-opacity-100 duration-500 ease-in-out">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-black mt-9">
            <TitleText weight="bold">Security</TitleText>
          </h2>
        </div>

        <div className="w-2/3">
          <SecurityFaq />
        </div>
      </div>

      <div className="flex justify-between space-x-20 w-full mt-10 md:px-10 px-4 bg-white bg-opacity-70 py-10 rounded-lg hover:bg-opacity-100 duration-500 ease-in-out">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-black mt-9">
            <TitleText weight="bold">Hosting and Maintenance</TitleText>
          </h2>
        </div>

        <div className="w-2/3">
          <HostingFaq />
        </div>
      </div>

      <div className="flex justify-between space-x-20 w-full mt-10 md:px-10 px-4 bg-white bg-opacity-70 py-10 rounded-lg hover:bg-opacity-100 duration-500 ease-in-out">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-black mt-9">
            <TitleText weight="bold">Getting Started</TitleText>
          </h2>
        </div>

        <div className="w-2/3">
          <GettingStartedFaq />
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <Image
          alt="a black message chat icon"
          src={"/icons/message_icon.png"}
          width={200}
          height={200}
          className="object-cover"
        />
        <h3>
          <TitleText weight="medium" className="text-4xl text-black">
            Still have questions?{" "}
            <span className="text-my-blue">Let&apos;s talk!</span>
          </TitleText>
        </h3>
        <p className="text-xl text-black opacity-70 mt-7 text-center w-2/3 mb-14">
          Whether you need detailed explanations or personalized solutions, our
          experts are just a click away. Schedule a free consultation and get
          the answers you&apos;re looking for.
        </p>

        <Link href={"/contact?q=consultation"}>
          <RoundButton hasIcon bgColor="my-blue">
            Book a free consultation
          </RoundButton>
        </Link>
      </div>
    </div>
  );
};

export default FAQsPage;
