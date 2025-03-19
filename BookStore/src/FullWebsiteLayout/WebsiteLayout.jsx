import React from "react";
import Navebar from "../Component/Navebar/Navebar.jsx"
import HomePage from "../Component/HomePage/HomePage.jsx";
import HeroSection from "../Component/HeroSection/HeroSection.jsx";
import OurTrack from "../Component/OurTracks/OurTrack.jsx";
import CardLayout from "../Component/CourseCard/CardLayout.jsx";
import LearningExperience from "../Component/LearningExperience/LearningExperience.jsx";
import TestimonialCarousel from "../Component/TestimonialCarousel/TestimonialCarousel.jsx";
import ProfileCardLayout from "../Component/ProfileCard/ProfileCardLayout.jsx";
import Newsletter from "../Component/NewsLetter/Newsletter.jsx";
import Footer from "../Component/Footer/Footer.jsx";

function WebsiteLayout() {
  return (
    <>
      <Navebar />
      <HomePage />
      <HeroSection />
      <OurTrack />
      <CardLayout />
      <LearningExperience />
      <TestimonialCarousel />
      <OurTrack />
      <ProfileCardLayout />
      <Newsletter />
      <Footer />
    </>
  );
}

export default WebsiteLayout;
