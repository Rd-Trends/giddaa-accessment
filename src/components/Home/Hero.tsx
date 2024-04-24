import HeroImage from "../../assets/image/hero-image.png";

const Hero = () => {
  return (
    <div
      className={
        " px-4 md:px-8 lg:pr-0 lg:pl-10 xl:pl-20 flex flex-col lg:flex-row " +
        "py-8 space-y-6  lg:py-0 lg:space-y-0"
      }>
      <div className=" lg:w-5/12 space-y-4  lg:pr-4 lg:py-20">
        <h1 className=" font-millik text-2xl md:text-4xl xl:text-4xl lg:max-w-md lg:!leading-[140%]">
          Securely and Affordably Own a Home in Nigeria.{" "}
          <span className=" text-primary">
            We Serve Nigerians Across the Globe.
          </span>
        </h1>

        <p className=" text-base md:text-lg font-medium">
          Experience confidence when buying a home in Nigeria whether you’re in
          Nigeria or Abroad! Enjoy peace of mind with legitimate transactions,
          straightfoward processes, and a variety of flexible payment options
          directly from top developers and banks.
        </p>

        <div className=" flex items-center space-x-4">
          <a
            href="#"
            className={
              " bg-primary font-bold text-white py-2.5 px-4 rounded-full " +
              "text-sm md:text-base"
            }>
            Find a Home
          </a>

          <span className=" text-primary text-sm font-bold border border-primary py-3 px-4 rounded-lg">
            10,000 People Have Seen This
          </span>
        </div>
      </div>

      <img src={HeroImage} alt="Hero" className=" w-full h-auto lg:w-7/12" />
    </div>
  );
};

export default Hero;
