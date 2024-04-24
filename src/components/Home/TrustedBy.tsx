import SectionTitle from "../SectionTitle";
import Chrome from "../../assets/image/partners/chrome.png";
import Reddit from "../../assets/image/partners/reddit.png";
import Viber from "../../assets/image/partners/viber.png";
import Dropbox from "../../assets/image/partners/dropbox.png";
import Vimeo from "../../assets/image/partners/vimeo.png";
import TrustedBYIcon from "../../assets/image/trusted-by-icon.png";

// users image
import KunlePhoto from "../../assets/image/users/kunle.png";
import LanrePhoto from "../../assets/image/users/lanre.png";
import EmmanuelPhoto from "../../assets/image/users/emmanuel.png";
import DooshimaPhoto from "../../assets/image/users/Dooshima.png";

import Marquee from "react-fast-marquee";
import Carousel from "../Carousel";
import CaretWithBg from "../../custom-vectors/CaretWithBg";

const TrustedBy = () => {
  return (
    <div className={" "}>
      <div className={" bg-yellow-tertiary py-8 space-y-8 "}>
        <div className=" container">
          <SectionTitle title="Trusted by" />
        </div>
        <Marquee autoFill pauseOnClick pauseOnHover className=" container">
          {partners.map((partner, index) => (
            <img
              key={partner.name + index}
              src={partner.image}
              alt={partner.name}
              className="h-12 w-auto mx-4 md:mx-10"
            />
          ))}
        </Marquee>
      </div>

      <div className=" -mt-2 flex flex-col items-center space-y-8 bg-mid-accent-green pb-4">
        <h3
          className={
            " w-fit flex items-center capitalize text-primary bg-white font-millik -rotate-6 " +
            " py-2 px-4 space-x-2 rounded-full border-2 shadow-[0px_3px_6px_#335F32] border-primary"
          }>
          <img src={TrustedBYIcon} alt="" loading="eager" className=" size-7" />
          <span>If they trust us, So can you</span>
        </h3>

        <Carousel.Wrapper className="">
          <Carousel.Content className=" ml-1 md:ml-2">
            {users.map((user, index) => (
              <Carousel.Item
                key={user.name + index}
                className={
                  "basis-[80%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 md:pl-8 lg:pl-10 xl:pl-20"
                }>
                <div
                  key={user.name + index}
                  className={
                    " bg-white rounded-lg " +
                    " flex flex-col relative items-center"
                  }>
                  <CaretWithBg className=" absolute top-4 right-4" />
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-full h-auto "
                  />
                  <div
                    className={
                      " absolute bottom-0 w-full left-0 right-0 bg-black " +
                      "bg-opacity-30 rounded-b-3xl text-white p-4"
                    }>
                    <h4 className=" text-base font-bold">{user.name}</h4>
                    <p className=" text-xs uppercase font-medium">
                      {user.worksAs}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.Content>
          <div className=" container flex items-center justify-end mt-8 space-x-4">
            <Carousel.PreviousButton />
            <Carousel.NextButton />
          </div>
        </Carousel.Wrapper>
      </div>
    </div>
  );
};

export default TrustedBy;

const partners = [
  {
    name: "Chrome",
    image: Chrome,
  },
  {
    name: "Reddit",
    image: Reddit,
  },
  {
    name: "Viber",
    image: Viber,
  },
  {
    name: "Dropbox",
    image: Dropbox,
  },
  {
    name: "Vimeo",
    image: Vimeo,
  },
];

const users = [
  {
    name: "Lanre Edun",
    worksAs: "Head of Marketting at Brains and Hammers",
    photo: LanrePhoto,
  },
  {
    name: "Kunle Fatimehin",
    worksAs: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
    photo: KunlePhoto,
  },
  {
    name: "Emmanuel Uge",
    worksAs: "DIRECTOR OF SALES AT WIGWE INFRASTURUCTURE",
    photo: EmmanuelPhoto,
  },
  {
    name: "Dooshima Anakaa",
    worksAs: "DIRECTOR OF FINANCE AT IKPAAHINDI VENTURES",
    photo: DooshimaPhoto,
  },
  {
    name: "Lanre Edun",
    worksAs: "Head of Marketting at Brains and Hammers",
    photo: LanrePhoto,
  },
  {
    name: "Kunle Fatimehin",
    worksAs: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
    photo: KunlePhoto,
  },
  {
    name: "Emmanuel Uge",
    worksAs: "DIRECTOR OF SALES AT WIGWE INFRASTURUCTURE",
    photo: EmmanuelPhoto,
  },
  {
    name: "Dooshima Anakaa",
    worksAs: "DIRECTOR OF FINANCE AT IKPAAHINDI VENTURES",
    photo: DooshimaPhoto,
  },
];
