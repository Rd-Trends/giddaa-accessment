import clsx from "clsx";
import GallowingHorseIcon from "../../custom-vectors/GallowingHorse";
import SlowTurtle from "../../custom-vectors/SlowTurtle";
import SwiftRabbit from "../../custom-vectors/SwiftRabbit";
import SectionTitle from "../SectionTitle";
import { ChevronDownIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import Caret from "../../custom-vectors/Caret";

const PurchaseOptions = () => {
  return (
    <div
      className={
        " container flex flex-col items-center lg:items-start space-y-8 " +
        " md:space-y-10 lg:space-y-12 py-8 lg:py-12"
      }>
      <SectionTitle title="Your Purchase Options" />
      <div className=" flex flex-col items-center space-y-4 md:space-y-8">
        <p className=" text-center max-w-2xl">
          Buying a home isn’t a one-size fits all kind of purchase — we know!.
          So…we give you all the options the market has to offer to choose from!
        </p>

        <div
          className={
            " w-full flex flex-col md:flex-row  " +
            "space-y-4 md:space-y-0 md:space-x-4 lg:space-x-10 xl:space-x-12 " +
            " [&>*:nth-child(3)]:!mt-4 lg:[&>*:nth-child(3)]:!mt-0 md:justify-center flex-wrap lg:flex-nowrap"
          }>
          {purchaseOptions.map((option, index) => (
            <div
              key={option.name + index}
              className={clsx(
                "w-full md:w-[calc(50%-1rem)] lgw-1/3 py-4 px-4 rounded-xl flex flex-col justify-between space-y-8",
                {
                  " bg-yellow-tertiary": option.name === "Payment Plans",
                  " bg-light-accent-green": option.name === "Mortgages",
                  " bg-light-grey": option.name === "Outright Purchase",
                }
              )}>
              <div>
                <div className=" flex items-center">
                  {option.icon}
                  <div className=" w-10/12 flex flex-col justify-center items-center text-center">
                    <h3 className=" text-lg text-primary font-millik">
                      {option.name}
                    </h3>
                    <p>{option.tag}</p>
                  </div>
                </div>

                <p className=" text-sm py-2">{option.description}</p>

                <Accordion type="single" collapsible>
                  <AccordionItem className="relative" value="item-1">
                    <AccordionTrigger className=" flex items-center justify-start space-x-4">
                      <ChevronDownIcon className="h-4 w-4 border-2 border-primary rounded-full" />
                      <span className=" text-sm text-primary font-bold">
                        View Another Explanation
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className=" absolute bg-white top-full p-4 rounded-md">
                      <p className=" text-sm">{option.explanation}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div>
                  <h3 className=" text-lg font-bold font-millik text-center text-primary capitalize">{`Features of ${option.name}`}</h3>

                  <ul className=" space-y-1">
                    {option.features.map((feature, index) => (
                      <li
                        key={feature + index}
                        className=" flex items-start space-x-2">
                        <Caret width={7} />
                        <span className=" w-11/12">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className=" mx-auto w-fit flex items-center space-x-2 border border-primary rounded-full py-2 px-4">
                <span className=" flex items-center justify-center size-6 bg-primary rounded-full">
                  <Caret width={6} fill="#ffffff" />
                </span>
                <span className=" text-sm ">WATCH THE VIDEO TO LEARN MORE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseOptions;

const purchaseOptions = [
  {
    name: "Mortgages",
    tag: "The Slow Turtle",
    description: `Experience confidence when buying a home in Nigeria whether you’re in Nigeria or Abroad! Enjoy peace of mind with legitimate transactions, straightfoward processes, and a variety of flexible payment options directly from top developers and banks.`,
    explanation: `Picture getting a mortgage as a turtle competing against a rabbit: though the rabbit may dash ahead initially, reflecting short-term plans, the turtle’s steady but gradual pace, similar to mortgage payments, ensures stability and the ability to own a home without stressing your finances by coughing a large amount of money at once to buy a home.`,
    features: [
      "For budget conscious people without the money to make large payments.",
      "Mostly offered by banks & financial institutions",
      "Typically attracts payment of interest",
      "Payment periods are usually long term (Typically between 10 - 30 years)",
      "Monthly Payments are fixed, meaning it remains the same throughout the payment period. For example, you pay N150,000 in Month 1, you’ll pay N150,000 in Month 70. The payment remains the same over time.",
    ],
    icon: <SlowTurtle />,
  },
  {
    name: "Payment Plans",
    tag: "The Galloping Horse",
    description: `Imagine you’re looking to buy your dream house, but you don’t have all the money saved up. A payment plan is a structured arrangement where you agree to pay for your home over a period of time instead of all at once. It allows you to split the cost into smaller, manageable payments spread out over months, or years until the full amount is paid off. This makes the purchase of your dream home more affordable and accessible by breaking down the total cost into more managable payments, usually monthly.`,
    explanation: `Picture a horse galloping with a rabbit and a turtle. It is not quite as fast as the rabbit, but not nearly as slow as the turtle. It wants to get to the finish line quickly, but won’t beat the rabbit, but will beat the turtle, Similarly, a payment plan allows you to purchase a property over a short period of time, but not as short as an outright purchase, but not as long as mortgage. You make periodic payments over a short period of time.`,
    features: [
      "For people who want pocket friendly options, but don’t want to pay interest",
      "Mostly offered by property Developers",
      "Usually zero (0%) interest. Payment plans usally don’t attract interest.",
      "Payment periods are usually short term (6 Months - 3 Years)",
      "Like ,mortgages, monthly payments are also fixed, but may change if the property developer experiences issues during development. If periodic payments are subject to change, the developer usually states it in your offer letter.",
    ],
    icon: <GallowingHorseIcon />,
  },
  {
    name: "Outright Purchase",
    tag: "The Swift Rabbit",
    description: `The outright purchase of a house refers to buying a home directly without the need for financing through a mortgage or creation of flexible payment plans by developers. In this scenario, you pay the entire purchase price upfront using your own funds or savings, without relying on a loan from a bank or flexible payment options from developers. This means that once the transaction is complete, the you own the property outright, without any debt or ongoing payments to a lender or property developer.`,
    explanation: `Picture a rabbit running with a turtle or a horse. It wants to get to its destination quickly an knows it has the pace to get there without needing to stop or receivie assistance from anyone. It can go all the way, by itself. Similarly, with outright purchases, you don’t need anyone to help you. You can and are able to buy the property by yourself 100%. After you pay, the house is your, no repayments needed. Go Rabbit, go!`,
    features: [
      "For people who have the ability to make large purchases at once.",
      "Mostly offered by property Developers",
      "Usually zero (0%) interest. Payment plans usally don’t attract interest.",
      "There are no payment periods. This requires a one-time payment.",
      "This requires one lump sum payment, upon which the property is fully yours.",
    ],
    icon: <SwiftRabbit />,
  },
];
