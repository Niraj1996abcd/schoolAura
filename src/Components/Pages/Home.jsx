import React from "react";
import Header from "./Header";
import BenefitsSection from "./BenefitsSection";
import Footer from "./Footer";
import Middle from "./Middle";
import OnlineEducationBenefits from "./OnlineEducationBenefits";
import SpreadingSection from "./SpreadingSection";
import TestimonialSlider from "./TestimonialSlider";
import CampusGallerySection from "./CampusGallerySection";
const Home = () => {
  return (
    <>
      <Header />
      <BenefitsSection />
      <Middle />
      <OnlineEducationBenefits />
      <SpreadingSection />
      <CampusGallerySection />
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default Home;
