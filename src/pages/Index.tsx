// export default Index;

import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Service"; // Fixed typo from "Service"
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-9xl mx-auto px-7">
        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
