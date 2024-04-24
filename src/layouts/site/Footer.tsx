import PeopleGroup from "../../assets/image/footer-people.png";
import WhatsAppIcon from "../../custom-vectors/Whatsapp";
import { ArrowRightIcon } from "lucide-react";
import clsx from "clsx";
import FacebookIcon from "../../custom-vectors/Facebook";
import TwitterIcon from "../../custom-vectors/TwitterIcon";
import InstagramIcon from "../../custom-vectors/Instagram";
import LinkedInIcon from "../../custom-vectors/LinkedIn";
import TikTokIcon from "../../custom-vectors/Tiktok";

const Footer = () => {
  return (
    <footer>
      <div
        className={
          " container bg-primary flex flex-col items-center " +
          " py-8 space-y-8 lg:space-y-12"
        }>
        <div className=" w-fit flex flex-col items-center bg-white px-8 py-4 rounded-full">
          <img src={PeopleGroup} alt="People Group" className=" w-20 h-auto" />

          <div className=" flex items-center space-x-2">
            <WhatsAppIcon width={40} />
            <span className=" text-secondary font-millik">
              Join Our WhatsApp Community
            </span>
            <ArrowRightIcon className=" fill-secondary" />
          </div>
        </div>

        <nav
          className={
            " w-full flex items-start flex-wrap justify-between " +
            " [&>*:nth-child(n+3)]:mt-8 md:[&>*:nth-child(n+3)]:mt-0 " +
            "md:[&>*:nth-child(n+4)]:mt-8 xl:[&>*:nth-child(n+4)]:mt-0"
          }>
          {footerLinks.map((footerLink, index) => {
            return (
              <div
                key={footerLink.title + index}
                className=" space-y-2 w-[calc(50%-1rem)] md:w-[calc(100%/3-1rem)] xl:w-fit">
                <span className=" text-lg text-white font-millik">
                  {footerLink.title}
                </span>
                <ul className=" space-y-2">
                  {footerLink.links.map((link, index) => {
                    return (
                      <li key={link.text + index}>
                        <a
                          href={link.url}
                          className={clsx(" text-white font-medium text-base", {
                            "font-black opacity-85": !!link?.makeBold,
                            "opacity-80": !link?.makeBold,
                          })}>
                          {link.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>

        <div className=" flex items-center justify-center space-x-4">
          {socialMediaLinks.map((socialMediaLink, index) => {
            return (
              <a key={socialMediaLink.title + index} href={socialMediaLink.url}>
                {socialMediaLink.icon}
              </a>
            );
          })}
        </div>
      </div>
      <span className=" container block text-center w-full bg-yellow-tertiary py-2 font-bold text-sm text-primary  ">
        PROPERTY OF GIDDAA INC.
      </span>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Bank",
    links: [
      {
        text: "Join as a Bank",
        url: "#",
        makeBold: true,
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        text: "Join as a Developer",
        url: "#",
        makeBold: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        text: "Privacy Policy",
        url: "#",
      },
      {
        text: "Terms and Conditions",
        url: "#",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        text: "info@giddaa.com",
        url: "mailto:info@giddaa.com",
      },
      {
        text: "WhatsApp",
        url: "#",
      },
      {
        text: "Book a meeting",
        url: "#",
        makeBold: true,
      },
      {
        text: "+234 809 762 1791",
        url: "tel:+2348097621791",
        makeBold: true,
      },
    ],
  },
  {
    title: "Site Navigation",
    links: [
      {
        text: "Properties",
        url: "#",
      },
      {
        text: "Developers",
        url: "#",
      },
      {
        text: "Banks",
        url: "#",
      },
    ],
  },
];

const socialMediaLinks = [
  {
    title: "LinkedIn",
    url: "#",
    icon: <LinkedInIcon />,
  },
  {
    title: "Twitter",
    url: "#",
    icon: <TwitterIcon />,
  },
  {
    title: "Instagram",
    url: "#",
    icon: <InstagramIcon />,
  },
  {
    title: "TikTok",
    url: "#",
    icon: <TikTokIcon />,
  },
  {
    title: "Facebook",
    url: "#",
    icon: <FacebookIcon />,
  },
];
