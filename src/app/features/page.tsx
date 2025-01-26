"use client";

import { RoundButton } from "@/components/ui/Button";
import { BodyText, TitleText } from "@/components/ui/Text";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturesPage = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [featureInView, setFeatureInView] = useState(1);
  const [leftHeight, setLeftHeight] = useState("auto");

  useEffect(() => {
    const handleScroll = () => {
      if (rightRef.current && leftRef.current) {
        const rightScrollHeight = rightRef.current.scrollHeight;
        const rightClientHeight = rightRef.current.clientHeight;
        const rightScrollTop = rightRef.current.scrollTop;

        // Dynamically adjust left column height based on right column scroll
        if (rightScrollTop + rightClientHeight >= rightScrollHeight) {
          // When scrolled to bottom, match right column's total height
          leftRef.current.style.height = `${rightScrollHeight}px`;
        } else {
          // Reset to viewport height when not fully scrolled
          leftRef.current.style.height = "100vh";
        }
      }
    };

    const rightElement = rightRef.current;
    if (rightElement) {
      rightElement.addEventListener("scroll", handleScroll);
      return () => rightElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-my-bg flex justify-between space-x-20 overflow-x-hidden lg:px-32 md:px-10 px-4 relative hide-scrollbar">
      <div
        // ref={leftRef}
        className="w-[20vw] max-h-[70vh] mt-24 border border-black relative"
      >
        <div className="sticky bottom-0 flex flex-col gap-y-4 h-fit border border-black">
          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 1
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(1)}
          >
            <BodyText weight={featureInView === 1 ? "medium" : "regular"}>
              Financial Oversight
            </BodyText>
          </div>

          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 2
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(2)}
          >
            <BodyText weight={featureInView === 2 ? "medium" : "regular"}>
              Inventory Management
            </BodyText>
          </div>

          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 3
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(3)}
          >
            <BodyText weight={featureInView === 3 ? "medium" : "regular"}>
              Sales Management
            </BodyText>
          </div>

          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 4
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(4)}
          >
            <BodyText weight={featureInView === 4 ? "medium" : "regular"}>
              Supply Acquisition
            </BodyText>
          </div>

          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 5
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(5)}
          >
            <BodyText weight={featureInView === 5 ? "medium" : "regular"}>
              Human Resources
            </BodyText>
          </div>

          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 6
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(6)}
          >
            <BodyText weight={featureInView === 6 ? "medium" : "regular"}>
              Production Management
            </BodyText>
          </div>

          <div
            className={`pl-2 border-l-4 cursor-pointer ${
              featureInView === 7
                ? "text-base text-my-blue opacity-100 border-my-blue"
                : "text-sm text-black opacity-50 border-transparent"
            }`}
            onClick={() => setFeatureInView(7)}
          >
            <BodyText weight={featureInView === 7 ? "medium" : "regular"}>
              Reporting and Analytics
            </BodyText>
          </div>
        </div>
      </div>

      <div className="max-w-[60vw] flex flex-col gap-y-10 mt-20">
        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">Financial Oversight</TitleText>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Accounting"
              desc="A comprehensive financial system that centralizes all monetary
                transactions, providing real-time insights into the
                organization's financial landscape. It transforms raw financial
                data into strategic decision-making tools."
            />

            <FeaturesBox
              subfeature="Accounts Receivable"
              desc="Manages customer billing processes by tracking incoming payments
                and monitoring credit limits. This module ensures timely revenue
                collection and provides a clear view of customer financial
                interactions."
            />

            <FeaturesBox
              subfeature="Accounts Payable"
              desc="Handles external financial obligations through automated vendor
                payment processes and expense tracking. It offers robust control
                mechanisms to optimize cash flow and maintain accurate financial
                records."
            />

            <FeaturesBox
              subfeature="Budgeting and Forecasting"
              desc="Enables strategic financial planning by creating and analyzing
                budgets with predictive capabilities. It helps organizations
                make informed decisions by generating dynamic financial
                scenarios based on historical and current data."
            />
          </div>
        </div>

        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">Inventory Management</TitleText>
            </h2>
            <RoundButton
              bgColor="black"
              className="h-12 px-7 rounded-full flex items-center"
            >
              Get the App
            </RoundButton>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Stock Tracking"
              desc="Creates a real-time, comprehensive view of product inventory across multiple locations. This system provides detailed insights into product movement and strategic asset management."
            />

            <FeaturesBox
              subfeature="Inventory Optimization"
              desc="Employs predictive algorithms to anticipate demand and recommend optimal stock levels. It transforms inventory management from a static process to a strategic business function."
            />

            <FeaturesBox
              subfeature="Warehouse Management"
              desc="Orchestrates logistics operations through advanced tracking and workflow automation. It turns warehouses into strategic hubs of operational efficiency and customer satisfaction."
            />
          </div>
        </div>

        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">Sales Management</TitleText>
            </h2>
            <RoundButton
              bgColor="black"
              className="h-12 px-7 rounded-full flex items-center"
            >
              Get the App
            </RoundButton>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Customer Relationship Management (CRM)"
              desc="Captures and analyzes every customer interaction to create a comprehensive relationship strategy. This module enables personalized marketing and predictive sales approaches."
            />

            <FeaturesBox
              subfeature="Sales Order Processing"
              desc="Automates the entire sales workflow from initial inquiry to final delivery. It eliminates manual processes and provides real-time insights into sales performance."
            />

            <FeaturesBox
              subfeature="Sales Analytics"
              desc="Decodes sales performance data through advanced analytical tools. This module uncovers hidden patterns and predicts sales trends to drive strategic decision-making."
            />
          </div>
        </div>

        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">Supply Acquisition</TitleText>
            </h2>
            <RoundButton
              bgColor="black"
              className="h-12 px-7 rounded-full flex items-center"
            >
              Get the App
            </RoundButton>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Purchase Order Management"
              desc="Creates an end-to-end workflow for managing purchasing activities with comprehensive vendor interaction tracking. It provides strategic visibility into spending patterns and procurement opportunities."
            />

            <FeaturesBox
              subfeature="Procurement Workflow"
              desc="Standardizes and optimizes purchasing processes through intelligent, configurable workflows. The system ensures transparency and transforms procurement into a strategic business function."
            />

            <FeaturesBox
              subfeature="Supplier Analytics"
              desc="Evaluates supplier performance through comprehensive, data-driven assessment tools. It enables organizations to make informed vendor selection and management decisions."
            />
          </div>
        </div>

        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">Human Resources</TitleText>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Employee Records"
              desc="Maintains a centralized, secure repository of comprehensive employee information. This module supports strategic workforce planning and organizational design."
            />

            <FeaturesBox
              subfeature="Payroll Management"
              desc="Automates complex salary calculations, tax processing, and benefits administration with precise accuracy. It ensures timely and compliant employee compensation."
            />

            <FeaturesBox
              subfeature="Performance Management"
              desc="Creates a system for continuous performance tracking and professional development. This module aligns individual performance with organizational strategic objectives."
            />

            <FeaturesBox
              subfeature="Recruitment"
              desc="Provides end-to-end support for talent acquisition from job posting to candidate onboarding. It leverages analytics to attract and secure top talent efficiently."
            />
          </div>
        </div>

        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">Production Management</TitleText>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Production Planning"
              desc="Creates dynamic production schedules that balance resource availability and market demands. This module maximizes manufacturing efficiency and responsiveness."
            />

            <FeaturesBox
              subfeature="Bill of Materials (BOM)"
              desc="Serves as a digital blueprint for product composition and manufacturing processes. It enables precise cost calculation and seamless integration across production teams."
            />

            <FeaturesBox
              subfeature="Quality Control"
              desc="Embeds systematic quality assurance throughout the production process. The module tracks defects and supports continuous improvement in manufacturing operations."
            />
          </div>
        </div>

        <div className="w-full mb-10 pb-10 border-b border-black border-opacity-30">
          <div className="flex items-center justify-between space-x-10">
            <h2 className="text-4xl text-my-blue">
              <TitleText weight="bold-italic">
                Reporting and Analytics
              </TitleText>
            </h2>
            <RoundButton
              bgColor="black"
              className="h-12 px-7 rounded-full flex items-center"
            >
              Get the App
            </RoundButton>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-5">
            <FeaturesBox
              subfeature="Comprehensive Reporting"
              desc="Transforms raw data into customizable, interactive strategic insights. It provides flexible reporting across all business dimensions."
            />

            <FeaturesBox
              subfeature="Business Intelligence"
              desc="Reveals hidden patterns and predicts future scenarios through advanced analytical models. This module turns historical data into a proactive strategic planning tool."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

const FeaturesBox = ({
  subfeature,
  desc,
}: {
  subfeature: string;
  desc: string;
}) => {
  return (
    <div className="bg-white bg-opacity-70 p-5 rounded-lg hover:bg-opacity-100 duration-300 ease-in-out cursor-default flex flex-col justify-between">
      <div>
        <h3 className="text-2xl text-black mb-3">
          <BodyText weight="medium">{subfeature}</BodyText>
        </h3>
        <p className="text-base text-black opacity-70">{desc}</p>
      </div>

      <Link href={"/contact"} className="flex items-center space-x-2 mt-5">
        <span className="text-base text-my-blue">Learn more</span>
        <FaArrowRightLong color="#1e40af" size={18} />
      </Link>
    </div>
  );
};
