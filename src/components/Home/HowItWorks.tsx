import SectionTitle from "../SectionTitle";
import Caret from "../../custom-vectors/Caret";

const HowItWorks = () => {
  return (
    <div className=" container space-y-8 md:space-y-10 lg:space-y-12 py-8 md:py-16">
      <SectionTitle title="How It Works" />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-x-12">
        {steps.map((step, index) => {
          return (
            <div
              key={step.title + index}
              className=" flex items-start space-x-4 group">
              <span
                className={
                  "inline-block py-4 px-4 rounded-full bg-yellow-tertiary text-primary " +
                  " group-hover:bg-primary group-hover:text-white font-millik text-lg "
                }>
                {index + 1}
              </span>
              <div className=" space-y-2 group-hover:bg-light-accent-green p-4 transition-all duration-300">
                <h3 className=" text-lg md:text-xl font-millik text-primary">
                  {step.title}
                </h3>

                <p className=" text-lg text-black font-light">
                  {step.description}
                </p>

                <button className=" flex items-center py-2 px-4 space-x-2 rounded-full border border-primary">
                  <span className=" size-5 flex items-center justify-center rounded-full bg-primary">
                    <Caret fill="#ffffff" width={5} />
                  </span>
                  <span className=" text-primary text-xs">
                    WATCH THE VIDEO TO LEARN MORE
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;

const steps = [
  {
    title: "Find Your Dream Home.",
    description:
      "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
  },
  {
    title: "Select A Plan.",
    description:
      "Choose the best way YOU want to buy your dream home. We do most of the hardwork by automatically calculating which properties you are able to afford, as long as you put in your correct age and income.",
  },
  {
    title: "Book A Viewing",
    description:
      "We give you several options to book a viewing for the property. You can view it yourself, with our agent (for a small fee), or use someone you trust, maybe a family member or close friend. Choose a date and time and book your viewing.",
  },
  {
    title: "Apply!",
    description:
      "After you have booked a viewing and you are satisfied with the viewing, you acknowledge having viewed the property and then proceed to submit the document required by the organzation you are applying to.",
  },
  {
    title: "Wait for Application processing",
    description:
      "The partner (Developer or Bank) you applied to will process your application and the submitted documents. You will be notified if your application is accepted or not.",
  },
  {
    title: "Accept Terms & make Payment",
    description:
      "If the partner accepts your application, they will submit the terms of your application and an offer letter or a term sheet for you to review. If you accept the terms, you can then proceed to make payment and create a mandate for repayment, if it is a mortgage or payment plan.",
  },
];
