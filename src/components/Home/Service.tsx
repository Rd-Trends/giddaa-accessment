import SectionTitle from "../SectionTitle";

// images
import Diaspora from "../../assets/image/services/diaspora.png";
import DIasporaIcon from "../../assets/image/services/diaspora-icon.svg";

import NaijaRemote from "../../assets/image/services/remote.png";
import NaijaRemoteIcon from "../../assets/image/services/remote-icon.svg";

import PrivateSector from "../../assets/image/services/private.png";
import PrivateSectorIcon from "../../assets/image/services/private-icon.svg";

import PublicSector from "../../assets/image/services/public.png";
import PublicSectorIcon from "../../assets/image/services/public-icon.svg";
import clsx from "clsx";
import { ChevronDownCircleIcon } from "lucide-react";

const Service = () => {
 
  return (
    <div className=" flex flex-col items-center lg:items-start py-8 md:py-10 lg:py-12 xl:py-20 space-y-8 h-full">
      <div className=" container flex flex-col items-center lg:items-start">
        <SectionTitle title="Who We Serve" />
      </div>

      <div className="h-full">
        {services.map((service, index) => {
          return (
            <div
              key={service.title + index}
              className={clsx(
                " container flex flex-col lg:flex-row items-start lg:justify-between",
                " py-8 lg:py-12 space-y-8 lg:space-y-0 sticky top-0 lg:items-center",
                {
                  " bg-light-accent-green": service.colorScheme === "secondary",
                  " bg-white": service.colorScheme === "primary",
                }
              )}>
              <div className=" space-y-4 w-full lg:w-6/12">
                {service.icon}
                <h3
                  className={clsx(" text-4xl lg:text-5xl font-millik", {
                    "text-primary": service.colorScheme === "primary",
                    "text-secondary opacity-30":
                      service.colorScheme === "secondary",
                  })}>
                  {service.title}
                </h3>

                <p className=" text-lg text-black font-light">
                  {service.description}
                </p>

                <ul className={" grid grid-cols-2 gap-4"}>
                  {service.reasons.map((reason, index) => (
                    <li
                      key={service.title + index}
                      className={
                        " flex items-start space-x-2 text-primary font-medium text-base " +
                        " "
                      }>
                      <ChevronDownCircleIcon className=" size-4" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className=" w-full lg:w-[45%] h-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;

const services = [
  {
    title: "The Diaspora",
    description:
      "Living outside Nigeria? Thinking about buying a place Back Home for viists (No need for hotels, Airbnbs, or your parent’s house), Investment, or is it a personal goal of yours? Or maybe you see yourself spending more time back home . If any of those sounds like you, we can help you along your home purchase journey.",
    reasons: [
      "No Agency fee, Gidda is free",
      "We Eliminate Price Discrimination",
      "Giddaa Is Scam Proof!",
      "Relevant Information To Boost Your Confidence!",
      "We Are Responsive!",
    ],
    image: Diaspora,
    icon: (
      <img src={DIasporaIcon} alt="Diaspora Icon" className=" w-20 h-auto" />
    ),
    colorScheme: "primary",
  },
  {
    title: "Naija Remote Workers",
    description:
      "Do you work from home? Your own Home? With Giddaa, that’s possible. You don’t need to have all the money at once to buy a house to become a homeowner. Leverage your job flexibility working remotely and your current earning capacity to build equity in a home of your own.",
    reasons: [
      `Work From “Your Own Home”`,
      "Invest In Man’s Greatest Asset Class",
      "Don’t Let Rent Go Up On You, Again!!",
      "No Agency Fees. Giddaa Is Free!",
    ],
    image: NaijaRemote,
    icon: (
      <img
        src={NaijaRemoteIcon}
        alt="Naija Remote Icon"
        className=" w-20 h-auto"
      />
    ),
    colorScheme: "secondary",
  },
  {
    title: "Private Sector Workers",
    description:
      "Whether you’re a doctor, nurse, banker, tech bro or sis, or work in another industry in the private sector, Giddaa assists individuals looking to purchase property without straining their budget or breaking the bank. In the face of rising property prices, we empower middle-class individuals, like you, to achieve homeownership!",
    reasons: [
      "Join The Homeowners Club!",
      "Don’t Let Rent Go Up On You, Again!!",
      "Build A Solid Foundation For Your Family",
      "No Agency Fees. Giddaa is Free!",
    ],
    image: PrivateSector,
    icon: (
      <img
        src={PrivateSectorIcon}
        alt="Private Sector Icon"
        className=" w-20 h-auto"
      />
    ),
    colorScheme: "primary",
  },
  {
    title: "Public Sector Workers",
    description:
      "You serve the people, and now let us serve you!. Government workers can effortlessly apply for a National Housing Fund (NHF) loan through a primary mortgage bank with Giddaa—no stress or connections needed. Giddaa ensures a seamless application process for NHF loans, and government workers can seamlessly explore alternative properties and plans beyond NHF.",
    reasons: [
      "Have A Place You Can Call Yours!",
      "Don’t Let Rent Go Up On You, Again!!",
      "Build A Solid Foundation For Your Family.",
      "No Agency Fees. Giddaa is Free!",
    ],
    image: PublicSector,
    icon: (
      <img
        src={PublicSectorIcon}
        alt="Public Sector Icon"
        className=" w-20 h-auto"
      />
    ),
    colorScheme: "secondary",
  },
];
