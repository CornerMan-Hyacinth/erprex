import Accounting from "@/../public/icons/accounting_icon.svg";
import CRM from "@/../public/icons/crm_icon.svg";
import Dashboard from "@/../public/icons/dashboard_icon.svg";
import Documents from "@/../public/icons/documents_icon.svg";
import HR from "@/../public/icons/hr_icon.svg";
import Inventory from "@/../public/icons/inventory_icon.svg";
import Manufacturing from "@/../public/icons/manufacturing_icon.svg";
import POS from "@/../public/icons/pos_icon.svg";
import Purchase from "@/../public/icons/purchase_icon.svg";
import Sales from "@/../public/icons/sales_icon.svg";
import Website from "@/../public/icons/website_icon.svg";
import { BodyText } from "../ui/Text";

const ScrollTools = () => {
  return (
    <div className="relative mt-20">
      <div className="scrolling-container flex md:space-x-24 space-x-16">
        <IconRow />
        <IconRow />
      </div>
    </div>
  );
};

export default ScrollTools;

const IconRow = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Accounting className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Accounting
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <CRM className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          CRM
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Dashboard className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Dashboard
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Documents className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Documents
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <HR className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          HR
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Inventory className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Inventory
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Manufacturing className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Manufacturing
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <POS className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Point of Sale
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Purchase className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Purchase
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Sales className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Sales
        </BodyText>
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <div className="h-28 w-28 flex items-center justify-center bg-white shadow-sm shadow-my-shadow transition-transform hover:-translate-y-3 duration-500 ease-in-out">
          <Website className="h-12 w-12" />
        </div>
        <BodyText weight="medium" className="text-black text-base">
          Website
        </BodyText>
      </div>
    </>
  );
};
