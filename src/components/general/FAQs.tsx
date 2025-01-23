import { faqData } from "../../lib/mocks/faqMocks";
import { FaqCard } from "../ui/Cards";

export const HomeFaq = () => {
  return (
    <div className="w-full">
      {faqData.general.slice(0, 4).map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
      {faqData.mobile_app.slice(0, 2).map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
      {faqData.custom_solutions.slice(0, 2).map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
      {faqData.security.slice(0, 2).map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
      {faqData.getting_started.slice(0, 1).map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export const GeneralFaq = () => {
  return (
    <div className="w-full">
      {faqData.general.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export const MobileAppFaq = () => {
  return (
    <div className="w-full">
      {faqData.mobile_app.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export const CustomSolutionsFaq = () => {
  return (
    <div className="w-full">
      {faqData.custom_solutions.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export const GettingStartedFaq = () => {
  return (
    <div className="w-full">
      {faqData.getting_started.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export const SecurityFaq = () => {
  return (
    <div className="w-full">
      {faqData.security.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export const HostingFaq = () => {
  return (
    <div className="w-full">
      {faqData.hosting_and_maintenance.map((item, index) => (
        <FaqCard key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
