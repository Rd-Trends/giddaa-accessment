import GetStarted from "../components/Home/GetStarted";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import PurchaseOptions from "../components/Home/PurchaseOptions";
import Service from "../components/Home/Service";
import Stats from "../components/Home/Stats";
import TrustedBy from "../components/Home/TrustedBy";
import WhyGiddaa from "../components/Home/WhyGiddaa";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <TrustedBy />
      <PurchaseOptions />
      <WhyGiddaa />
      <Service />
      <HowItWorks />
      <GetStarted />
    </div>
  );
};

export default HomePage;
