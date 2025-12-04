"use client";

import { TestimonialCard } from "@/components/ui/Cards";
import ScrollTools from "@/components/general/ScrollTools";
import { RoundButton } from "@/components/ui/Button";
import { TitleText } from "@/components/ui/Text";
import { testimonialData } from "@/lib/mocks/testimonialMock";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillBuildingsFill, BsTools } from "react-icons/bs";
import { FaStoreAlt } from "react-icons/fa";
import {
  FaArrowRight,
  FaGraduationCap,
  FaStethoscope,
  FaTruck,
} from "react-icons/fa6";
import { GiFactory } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdDomainAdd } from "react-icons/md";
import { RxArrowBottomRight, RxArrowTopRight } from "react-icons/rx";
import { OLineBrushText } from "@/components/ui/LineBrushText";
import { HomeFaq } from "@/components/general/FAQs";

export default function Home() {
  const router = useRouter();
  const [solutionPaneOpen, setSolutionPaneOpen] = useState<number | null>(1);

  return (
    <div className="w-full min-h-screen bg-my-bg overflow-x-hidden">
      <div className="flex gap-x-3 px-10 mt-5">
        <div className="w-[45%] bg-white rounded-lg px-4 md:px-10 py-10 flex flex-col justify-center">
          <div className="w-fit border border-black rounded-full text-sm text-black px-2 py-1 opacity-50">
            7 industries served.
          </div>

          <h1 className="text-black text-5xl mt-10">
            <TitleText weight="regular" className="leading-snug">
              <span className="text-4xl">ERP Solutions</span> <br />
              <span className="text-5xl">that meet your</span>
              <br />
              <TitleText weight="bold-italic" className="text-my-blue text-6xl">
                Business needs
              </TitleText>
            </TitleText>
          </h1>

          <p className="text-black text-xl opacity-70 mt-5">
            Custom enterprise solutions that transform operations, reduce costs,
            and drive growth
          </p>

          <div className="flex items-center gap-x-7 mt-14">
            <RoundButton
              bgColor="black"
              onClick={() => router.push("/contact-us?p=demo")}
            >
              Book Demo
            </RoundButton>
            <Link
              href={"/contact-us"}
              className="flex items-center space-x-2 text-my-blue hover:underline"
            >
              <span className="text-lg">Contact Us</span>
              <FaArrowRight size={16} />
            </Link>
          </div>

          <p className="mt-3 text-black text-sm opacity-50">
            100% Free Consultations
          </p>
        </div>

        <div className="w-[55%]">
          <div className="w-full h-72 rounded-lg relative">
            <div className="rounded-lg relative w-full h-full overflow-hidden">
              <Image
                alt="Manufacturing warehouse plant"
                src={"/images/manufacturing_bg.jpg"}
                fill
                className="object-cover"
              />
              <div className="absolute w-full h-full bg-black bg-opacity-50" />
            </div>

            <div className="absolute bottom-5 left-5">
              <OLineBrushText
                brushColor="my-blue"
                text="Manufacturing"
                className="text-white text-xl"
              />
            </div>
            <div className="absolute top-0 left-0 px-6 h-14 flex items-center justify-center space-x-4 rounded-full bg-white shadow-sm shadow-my-shadow transition-transform -translate-y-5 -translate-x-10">
              <BsTools color="black" size={24} />
              <span className="text-black text-sm">
                Production <br />
                Scheduling
              </span>
            </div>
          </div>

          <div className="flex gap-x-3 mt-3">
            <div className="w-[50%] h-80 rounded-lg relative">
              <div className="rounded-lg relative w-full h-full overflow-hidden">
                <Image
                  alt="a health specialist operating a computer"
                  src={"/images/healthcare_bg.jpg"}
                  fill
                  className="object-cover"
                />
                <div className="absolute w-full h-full bg-black bg-opacity-50" />
              </div>

              <div className="absolute bottom-5 left-5">
                <OLineBrushText
                  brushColor="my-blue"
                  text="Healthcare"
                  className="text-white text-xl"
                />
              </div>
              <div className="absolute bottom-20 left-0 px-6 h-14 flex items-center justify-center space-x-4 rounded-full bg-white shadow-sm shadow-my-shadow transition-transform -translate-x-28">
                <HiOutlineUsers color="black" size={32} />
                <span className="text-black text-sm">
                  Client/Customer
                  <br />
                  Relationship
                </span>
              </div>
            </div>

            <div className="w-[50%] h-80 rounded-lg relative">
              <div className="rounded-lg relative w-full h-full overflow-hidden">
                <Image
                  alt="a lady in a retail store working on a computer"
                  src={"/images/retail_bg.jpg"}
                  fill
                  className="object-cover"
                />
                <div className="absolute w-full h-full bg-black bg-opacity-50" />
              </div>

              <div className="absolute bottom-5 left-5">
                <OLineBrushText
                  brushColor="my-blue"
                  text="Retail"
                  className="text-white text-xl"
                />
              </div>

              <div className="absolute top-0 right-5 px-6 h-14 flex items-center justify-center space-x-4 rounded-full bg-white shadow-sm shadow-my-shadow transition-transform -translate-y-7">
                <GoChecklist color="black" size={32} />
                <span className="text-black text-sm">
                  Inventory
                  <br />
                  Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-10 mt-5">
        <section className="w-full md:px-10 px-4 bg-white bg-opacity-70 rounded-lg py-16">
          <div className="flex items-center md:justify-around justify-between">
            <div className="flex flex-col items-center border-t border-black pt-8 md:px-8 pr-2 border-opacity-30">
              <span className="lg:text-5xl md:text-4xl text-2xl text-black">
                9M+
              </span>
              <span className="lg:text-base text-sm text-center text-black opacity-70 mt-3">
                businesses worldwide
                <br />
                use an ERP system
              </span>
            </div>
            <div className="flex flex-col items-center border-t border-black pt-8 md:px-8 px-2 border-opacity-30">
              <span className="lg:text-5xl md:text-4xl text-2xl text-black">
                4.9
              </span>
              <span className="lg:text-base text-sm text-center text-black opacity-70 mt-3">
                postive satisfaction
                <br />
                from our clients
              </span>
            </div>
            <div className="flex flex-col items-center border-t border-black pt-8 md:px-8 pl-2 border-opacity-30">
              <span className="lg:text-5xl md:text-4xl text-2xl text-black">
                24/5
              </span>
              <span className="lg:text-base text-sm text-center text-black opacity-70 mt-3">
                Enhanced Global
                <br />
                customer support
              </span>
            </div>
          </div>

          <div className="lg:mt-20 mt-20 flex flex-col lg:flex-row md:justify-between items-start">
            <div className="lg:w-1/2">
              <div className="flex flex-col md:flow-row space-x-20 items-start">
                <div className="flex space-x-2 items-center mt-3">
                  <div className="h-1 w-1 rounded-full bg-my-blue" />
                  <span className="text-my-blue md:text-base text-xs whitespace-nowrap">
                    System for growth
                  </span>
                </div>
                <h3 className="leading-normal lg:text-2xl md:text-xl text-lg opacity-50">
                  <span className="text-black block whitespace-nowrap">
                    Software to drive
                  </span>
                  <span className="text-black ml-10 whitespace-nowrap">
                    Your business forward
                  </span>
                </h3>
              </div>

              <div className="mt-7">
                <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-black whitespace-nowrap">
                  <span className="xl:text-3xl lg:text-2xl md:text-xl text-lg">
                    With the right catalyst,
                  </span>
                  <br />
                  Any business can{" "}
                  <span className="text-my-blue italic">Scale</span>.
                </h2>
                <p className="xl:text-xl md:text-lg text-base lg:mt-5 mt-3 opacity-100 text-black text-justify md:text-start">
                  No 2 businesses are the same. We treat each business{" "}
                  <span className="text-my-blue">uniquely</span>, customizing
                  interfaces and building features that eliminate unnecessary
                  faults and speed up productivity.
                </p>
              </div>
            </div>

            <div className="relative h-fit w-fit mt-8 lg:mt-0">
              {/* <div className="h-full w-full lg:rounded-3xl rounded-xl bg-my-blue bg-opacity-20 transition-transform translate-x-5 translate-y-5"></div> */}
              <div className="lg:w-2/5 w-full xl:min-h-[50vh] lg:min-h-[57vh] md:min-h-[45vh] min-h-[30vh] mt-8 lg:mt-0 lg:rounded-3xl rounded-xl overflow-hidden relative">
                <Image
                  alt="software for growth"
                  src={"/images/erprex_image.jpeg"}
                  fill
                  className="object-top"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full md:px-10 px-4 mt-10">
        <div
          className={`w-full rounded-lg bg-my-blue ${
            solutionPaneOpen === 1 ? "bg-opacity-10" : "bg-opacity-5"
          } p-5 mb-5`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`${
                solutionPaneOpen === 1 ? "text-my-blue" : "text-black"
              } text-2xl`}
            >
              <TitleText weight="medium">
                Improved Inventory Management
              </TitleText>
            </h2>
            <button
              className={`h-10 w-10 flex items-center justify-center rounded-full ${
                solutionPaneOpen === 1
                  ? "bg-my-blue"
                  : "bg-white bg-opacity-50 hover:bg-opacity-100"
              } duration-300 ease-in-out`}
              onClick={() =>
                setSolutionPaneOpen(solutionPaneOpen === 1 ? null : 1)
              }
            >
              {solutionPaneOpen === 1 ? (
                <RxArrowTopRight size={20} color="white" />
              ) : (
                <RxArrowBottomRight size={20} color="#1e40af" />
              )}
            </button>
          </div>

          <div
            className={`w-1/2 px-10 border-l-4 border-my-blue overflow-hidden ${
              solutionPaneOpen === 1 ? "max-h-fit mt-3" : "max-h-0 mt-0"
            } transition-all duration-500 ease-in-out text-black text-lg text-opacity-70`}
          >
            Avoid overstocking and/or stockouts by gaining real-time visibility
            into inventory levels. Manage the procurement, production and
            distribution of your goods in a better error-free way.
          </div>
        </div>

        <div
          className={`w-full rounded-lg bg-my-blue ${
            solutionPaneOpen === 2 ? "bg-opacity-10" : "bg-opacity-5"
          } p-5 mb-5`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`${
                solutionPaneOpen === 2 ? "text-my-blue" : "text-black"
              } text-2xl`}
            >
              <TitleText weight="medium">
                Real-Time Insights and Reporting
              </TitleText>
            </h2>
            <button
              className={`h-10 w-10 flex items-center justify-center rounded-full ${
                solutionPaneOpen === 2
                  ? "bg-my-blue"
                  : "bg-white bg-opacity-50 hover:bg-opacity-100"
              } duration-300 ease-in-out`}
              onClick={() =>
                setSolutionPaneOpen(solutionPaneOpen === 2 ? null : 2)
              }
            >
              {solutionPaneOpen === 2 ? (
                <RxArrowTopRight size={20} color="white" />
              ) : (
                <RxArrowBottomRight size={20} color="#1e40af" />
              )}
            </button>
          </div>

          <div
            className={`w-1/2 px-10 border-l-4 border-my-blue overflow-hidden ${
              solutionPaneOpen === 2 ? "max-h-fit mt-3" : "max-h-0 mt-0"
            } transition-all duration-500 ease-in-out text-black text-lg text-opacity-70`}
          >
            Make informed decisions in-the-moment by gaining real-time data
            analytics and reporting. Monitor your Key Performance Indicators
            (KPIs) and track progress agains goals.
          </div>
        </div>

        <div
          className={`w-full rounded-lg bg-my-blue ${
            solutionPaneOpen === 3 ? "bg-opacity-10" : "bg-opacity-5"
          } p-5 mb-5`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`${
                solutionPaneOpen === 3 ? "text-my-blue" : "text-black"
              } text-2xl`}
            >
              <TitleText weight="medium">
                Enhanced Customer Satisfaction & Relationship
              </TitleText>
            </h2>
            <button
              className={`h-10 w-10 flex items-center justify-center rounded-full ${
                solutionPaneOpen === 3
                  ? "bg-my-blue"
                  : "bg-white bg-opacity-50 hover:bg-opacity-100"
              } duration-300 ease-in-out`}
              onClick={() =>
                setSolutionPaneOpen(solutionPaneOpen === 3 ? null : 3)
              }
            >
              {solutionPaneOpen === 3 ? (
                <RxArrowTopRight size={20} color="white" />
              ) : (
                <RxArrowBottomRight size={20} color="#1e40af" />
              )}
            </button>
          </div>

          <div
            className={`w-1/2 px-10 border-l-4 border-my-blue overflow-hidden ${
              solutionPaneOpen === 3 ? "max-h-fit mt-3" : "max-h-0 mt-0"
            } transition-all duration-500 ease-in-out text-black text-lg text-opacity-70`}
          >
            ERP systems help businesses provide better customer service by
            having all customer information in one place. Respond to customer
            inquiries more quickly and accurately
          </div>
        </div>

        <div
          className={`w-full rounded-lg bg-my-blue ${
            solutionPaneOpen === 4 ? "bg-opacity-10" : "bg-opacity-5"
          } p-5 mb-5`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`${
                solutionPaneOpen === 4 ? "text-my-blue" : "text-black"
              } text-2xl`}
            >
              <TitleText weight="medium">
                Order Processing and Fulfillment
              </TitleText>
            </h2>
            <button
              className={`h-10 w-10 flex items-center justify-center rounded-full ${
                solutionPaneOpen === 4
                  ? "bg-my-blue"
                  : "bg-white bg-opacity-50 hover:bg-opacity-100"
              } duration-300 ease-in-out`}
              onClick={() =>
                setSolutionPaneOpen(solutionPaneOpen === 4 ? null : 4)
              }
            >
              {solutionPaneOpen === 4 ? (
                <RxArrowTopRight size={20} color="white" />
              ) : (
                <RxArrowBottomRight size={20} color="#1e40af" />
              )}
            </button>
          </div>

          <div
            className={`w-1/2 px-10 border-l-4 border-my-blue overflow-hidden ${
              solutionPaneOpen === 4 ? "max-h-fit mt-3" : "max-h-0 mt-0"
            } transition-all duration-500 ease-in-out text-black text-lg text-opacity-70`}
          >
            Make informed decisions in-the-moment by gaining real-time data
            analytics and reporting. Monitor your Key Performance Indicators
            (KPIs) and track progress agains goals.
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href={"/solutions"}
            className="text-black text-base opacity-70 underline hover:opacity-100 duration-300 ease-in-out"
          >
            See more
          </Link>
        </div>
      </section>

      <section className="mt-20 relative">
        <h2 className="text-5xl text-black text-center">
          <TitleText weight="medium">
            All{" "}
            <TitleText weight="medium-italic" className="text-my-blue">
              Essential Tools
            </TitleText>{" "}
            in One System
          </TitleText>
        </h2>

        <ScrollTools />

        <div className="flex flex-col items-center mt-20">
          <p className="text-2xl text-black mb-10 w-2/3 text-center">
            Your ERP software should cover at least 90% of your business&apos;
            operations. Automate repetitive processes and eliminate unnecessary
            errors.
          </p>
          <RoundButton
            bgColor="black"
            hasIcon
            onClick={() => router.push("/contact")}
          >
            Reach out today
          </RoundButton>
        </div>
      </section>

      <section className="w-full py-14 bg-white mt-20 relative">
        <div className="flex flex-col items-center md:px-10 px-4">
          <h2 className="text-4xl text-black text-center">
            <TitleText weight="bold">
              What our{" "}
              <TitleText weight="bold-italic" className="text-my-blue">
                Clients
              </TitleText>{" "}
              are
              <br />
              Saying about Us
            </TitleText>
          </h2>

          <div className="flex items-start gap-x-10 mt-10">
            <div className="flex flex-col gap-y-5">
              {testimonialData.slice(0, 3).map((item, index) => (
                <TestimonialCard
                  key={index}
                  review={item.testimonial}
                  rating={item.rating}
                  author={item.author}
                />
              ))}
            </div>

            <div className="flex flex-col gap-y-5">
              {testimonialData.slice(3, 6).map((item, index) => (
                <TestimonialCard
                  key={index}
                  review={item.testimonial}
                  rating={item.rating}
                  author={item.author}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full mt-20 md:px-10 px-4">
          <div className="flex flex-col justify-between">
            <h3 className="text-5xl text-black">
              <TitleText weight="bold">
                Frequently Asked
                <br />
                Questions
              </TitleText>
            </h3>

            <Link
              href={"/faqs"}
              className="w-fit px-10 py-2 rounded-full flex items-center space-x-4 border border-black border-opacity-30"
            >
              <span className="text-black text-sm">Want more FAQs?</span>
              <FaArrowRight color="#1e40af" size={16} />
            </Link>
          </div>

          <div className="w-1/2">
            <HomeFaq />
          </div>
        </div>

        <div
          className="bg-white h-20 z-20 w-full absolute bottom-0 translate-y-10"
          style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        />
      </section>

      <section className="bg-my-blue w-full min-h-screen relative flex flex-col justify-center items-center md:pb-20 pb-10 lg:pt-32 md:pt-28 pt-20 xl:px-20 md:px-10 px-4">
        <BsFillBuildingsFill size={30} color="rgba(255,255,255,1)" />
        <h2 className="lg:text-5xl text-4xl text-white mt-5">
          <TitleText weight="medium">Built for </TitleText>
          <TitleText weight="medium-italic" className="text-black">
            Industries
          </TitleText>
        </h2>
        <p className="text-white xl:w-1/2 lg:w-3/4 md:w-4/5 w-full lg:text-lg text-sm mt-5 text-center opacity-70">
          From logistics to hospitality, we cut across multiple industries,
          understanding each problems & bottlenecks, and developing features &
          solutions to counter them.
        </p>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mt-20">
          <div className="lg:w-[27vw] md:w-[40vw] w-full min-h-[37vh] bg-black bg-opacity-10 rounded-lg md:px-7 px-4 py-10 flex flex-col items-center hover:bg-black duration-300 ease-in-out cursor-default">
            <FaStoreAlt color="white" size={20} />
            <p className="mt-3 text-white text-2xl">Retails</p>
            <p className="xl:text-base text-sm text-white text-center lg:mt-7 mt-4 opacity-80">
              Use ERP systems to maintaining optimal stock levels, track sales,
              and analyze customer behavior.
            </p>
          </div>

          <div className="lg:w-[27vw] md:w-[40vw] w-full min-h-[37vh] bg-black bg-opacity-10 rounded-lg md:px-7 px-4 py-10 flex flex-col items-center hover:bg-black duration-300 ease-in-out cursor-default">
            <GiFactory color="white" size={20} />
            <p className="mt-3 text-white text-2xl">Manufacturing</p>
            <p className="xl:text-base text-sm text-white text-center lg:mt-7 mt-4 opacity-80">
              Get real-time data on production schedules, material usage, and
              workforce efficiency.
            </p>
          </div>

          <div className="lg:w-[27vw] md:w-[40vw] w-full min-h-[37vh] bg-black bg-opacity-10 rounded-lg md:px-7 px-4 py-10 flex flex-col items-center hover:bg-black duration-300 ease-in-out cursor-default">
            <FaStethoscope color="white" size={20} />
            <p className="mt-3 text-white text-2xl">Healthcare</p>
            <p className="xl:text-base text-sm text-white text-center lg:mt-7 mt-4 opacity-80">
              Manage patient records, billing, and supply chain logistics for
              medical supplies.
            </p>
          </div>

          <div className="lg:w-[27vw] md:w-[40vw] w-full min-h-[37vh] bg-black bg-opacity-10 rounded-lg md:px-7 px-4 py-10 flex flex-col items-center hover:bg-black duration-300 ease-in-out cursor-default">
            <FaTruck color="white" size={20} />
            <p className="mt-3 text-white text-2xl">Logistics</p>
            <p className="xl:text-base text-sm text-white text-center lg:mt-7 mt-4 opacity-80">
              Streamline order processing, reduce delays, manage fleet
              maintenance, track shipments, and automate billing.
            </p>
          </div>

          <div className="lg:w-[27vw] md:w-[40vw] w-full min-h-[37vh] bg-black bg-opacity-10 rounded-lg md:px-7 px-4 py-10 flex flex-col items-center hover:bg-black duration-300 ease-in-out cursor-default">
            <FaGraduationCap color="white" size={20} />
            <p className="mt-3 text-white text-2xl">Education</p>
            <p className="xl:text-base text-sm text-white text-center lg:mt-7 mt-4 opacity-80">
              Organise student records, faculty schedules, and financial
              operations, providing better data insights for decision-making.
            </p>
          </div>

          <div className="lg:w-[27vw] md:w-[40vw] w-full min-h-[37vh] bg-black bg-opacity-100 rounded-lg md:px-7 px-4 py-10 flex flex-col items-center hover:bg-black duration-300 ease-in-out cursor-default">
            <MdDomainAdd color="white" size={20} />
            <p className="mt-3 text-white text-2xl">And many more...</p>
            <p className="xl:text-base text-sm text-white text-center lg:mt-7 mt-4 opacity-80">
              No matter your industry, there is always a technological solution
              for your business. Reach out to us today!
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row w-full items-start xl:space-x-28 lg:mt-40 md:mt-32 mt-28 z-20">
          <div className="flex items-center space-x-3 mt-3">
            <div className="h-1 w-1 rounded-full bg-white" />
            <span className="text-white text-sm whitespace-nowrap">
              Let&#39;s get started
            </span>
          </div>
          <div className="flex flex-col md:flex-row w-full lg:items-start md:items-center items-start justify-between mt-4 xl:mt-0">
            <h3 className="lg:text-6xl md:text-4xl text-3xl whitespace-nowrap">
              We Can&#39;t Wait To See
              <br />
              <span className="md:pl-16 pl-4 text-white">
                Your Business Bloom
              </span>
            </h3>
            <div className="mt-8 md:mt-0 w-full md:w-fit">
              <Link
                href={"/contact"}
                className="bg-white text-black lg:text-base text-sm py-3 px-16 w-full md:w-fit rounded-full block hover:bg-black hover:text-white duration-300 ease-in-out text-center"
              >
                Contact Us
              </Link>
              <Link
                href={`/contact?p=demo`}
                className="bg-black text-white lg:text-base text-sm py-3 px-16 w-full md:w-fit rounded-full block mt-5 hover:bg-white hover:text-black duration-300 ease-in-out"
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
