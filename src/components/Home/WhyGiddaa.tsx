import Marquee from "react-fast-marquee";
import SectionTitle from "../SectionTitle";

// images
import StayScamFree from "../../assets/image/why-gidda/stay-scam-free.svg";
import StreamlineYourSearch from "../../assets/image/why-gidda/streamline-your-search.svg";
import MultiplePurchaseOptions from "../../assets/image/why-gidda/multiple-purchase-options.svg";
import PayOnline from "../../assets/image/why-gidda/pay-online-and-track.svg";
import FindWhatYouCanAfford from "../../assets/image/why-gidda/find-what-you-can-afford.svg";
import ApplyOnline from "../../assets/image/why-gidda/apply-online.svg";
import SeeItForYourself from "../../assets/image/why-gidda/see-for-yourself.svg";
import ManageTermsAndDocumentation from "../../assets/image/why-gidda/manage-terms.svg";

const WhyGiddaa = () => {
  return (
    <div
      className={
        " container py-4 md:py-8 lg:py-10 xl:py-12 bg-light-accent-green" +
        " flex flex-col items-center lg:items-start space-y-6 md:space-y-10"
      }>
      <SectionTitle title="Why Giddaa?" />
      <div className=" w-full flex flex-col items-center">
        <p className=" md:text-base text-lg text-black font-medium max-w-2xl text-center">
          Too many Nigerians at home and abroad have complained about scams,
          inavailabilty of flexible payment options, how stressful, ambiguous,
          and manual the property purchase process is, we heard you all,{" "}
          <strong>over 100+ of you!</strong>
        </p>
      </div>

      <Marquee autoFill pauseOnClick pauseOnHover>
        <div className=" flex items-start h-20 min-h-fit">
          {complains.map((complain, index) => (
            <blockquote
              key={index}
              className={
                `border-l pl-4 border-gray-300 w-96 max-w-fit md:max-w-xs ` +
                "flex items-start space-x-4 h-full "
              }>
              <svg
                className="size-4 text-gray-400 dark:text-gray-600 mb-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <div className=" w-[calc(100%-3rem)] space-y-1">
                <p className="text-sm text-black font-medium">
                  {complain.complain}
                </p>
                <p className="text-xs text-black font-light">{complain.from}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </Marquee>

      <div className={" flex flex-col space-y-4 items-center"}>
        <h3 className=" text-3xl text-primary font-millik text-center">
          Here's Why
        </h3>

        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={
                " bg-white border border-[#D8D8D8] rounded-2xl p-4 flex flex-col items-center " +
                "space-y-4 group hover:bg-yellow-tertiary hover:border-dark-grey transition-all duration-300 "
              }>
              {reason.image}
              <h4 className=" text-lg text-center md:text-xl text-primary group-hover:text-black font-millik font-medium">
                {reason.title}
              </h4>
              <p className=" text-sm text-black font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyGiddaa;

const complains = [
  {
    complain: "I was scammed, by my wife!",
    from: "DIASPORAN LIVING IN IRELAND",
  },
  {
    complain: "The form was too long!",
    from: "GOVERNMENT WORKER IN ABUJA",
  },
  {
    complain: "I can’t track my repayments",
    from: "NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT",
  },
  {
    complain:
      "They sell to diasporan clients at higher prices, that’s price discrimination. It is not fair.",
    from: "SOMEONE IN CANADA",
  },
  //   make more different complaints
  {
    complain: "I was scammed, by my wife!",
    from: "DIASPORAN LIVING IN IRELAND",
  },
  {
    complain: "The form was too long!",
    from: "GOVERNMENT WORKER IN ABUJA",
  },
  {
    complain: "I can’t track my repayments",
    from: "NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT",
  },
  {
    complain:
      "They sell to diasporan clients at higher prices, that’s price discrimination. It is not fair.",
    from: "SOMEONE IN CANADA",
  },
  {
    complain: "I was scammed, by my wife!",
    from: "DIASPORAN LIVING IN IRELAND",
  },
  {
    complain: "The form was too long!",
    from: "GOVERNMENT WORKER IN ABUJA",
  },
  {
    complain: "I can’t track my repayments",
    from: "NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT",
  },
  {
    complain:
      "They sell to diasporan clients at higher prices, that’s price discrimination. It is not fair.",
    from: "SOMEONE IN CANADA",
  },
  {
    complain: "I was scammed, by my wife!",
    from: "DIASPORAN LIVING IN IRELAND",
  },
];

const reasons = [
  {
    title: "Stay Scam Free!",
    description:
      "We partner directly with trusted banks and developers. Your applications are sent straight to them, eliminating the need for agents, close relatives or friends. We connect you directly to the source.",
    image: (
      <img src={StayScamFree} alt="Stay Scam Free" className=" w-12 h-auto" />
    ),
  },
  {
    title: "Streamline Your Search",
    description:
      "We simplify your property search by presenting comprehensive information in a visual and easily understandable format, making decision making easier and quicker for you along your journey.",
    image: (
      <img
        src={StreamlineYourSearch}
        alt="Streamline Your Search"
        className=" w-32 h-auto"
      />
    ),
  },
  {
    title: "Multiple Purchase Options",
    description:
      "We provide you with a diverse range of housing options and flexible financing plans, ensuring you have a wide selection of choices to suit your preferences and current financial situation.",
    image: (
      <img
        src={MultiplePurchaseOptions}
        alt="Multiple Purchase Options"
        className=" w-32 h-auto"
      />
    ),
  },
  {
    title: "Pay Online & Track All Payments",
    description:
      "Pay online and track every single payment you make. We make your transactions clear as day between you and the partner you purchase from ,be it a property developer or bank.",
    image: (
      <img
        src={PayOnline}
        alt="Pay Online & Track All Payments"
        className=" w-24 h-auto"
      />
    ),
  },
  {
    title: "Find What You Can Afford",
    description:
      "We use affordability tags to visually display properties and financing plans you can afford based on age and income, which could help you simplify your decision-making.",
    image: (
      <img
        src={FindWhatYouCanAfford}
        alt="Find What You Can Afford"
        className=" w-24 h-auto"
      />
    ),
  },
  {
    title: "Apply Online — in 5 Mins, and Track Your Application.",
    description:
      "On Giddaa, we don’t tell you to fill a form and we will get back to you. You can apply for your home 100% online and track your application as it is being processed by the developer or bank.",
    image: (
      <img
        src={ApplyOnline}
        alt="Apply Online — in 5 Mins, and Track Your Application."
        className=" w-24 h-auto"
      />
    ),
  },
  {
    title: "See It For Yourself — Virtual Viewings",
    description:
      "Living abroad? We offer a service that allows you to view the property through a video call. We also send a report of the condition of the property after the viewing. We’re not quite at the VR level yet. 😁",
    image: (
      <img
        src={SeeItForYourself}
        alt="See It For Yourself — Virtual Viewings"
        className=" w-24 h-auto"
      />
    ),
  },
  {
    title: "Manage Terms and Documentation",
    description:
      "All terms between you and the developer or bank are managed online. You can view the terms you’ve offered, send revisions, if need be all online. You can also view and manage important documents like offer letters online.",
    image: (
      <img
        src={ManageTermsAndDocumentation}
        alt="Manage Terms and Documentation"
        className=" w-24 h-auto"
      />
    ),
  },
];
