import React from "react";
import HeaderComp from "../components/headerComp";
import NavbaarComp from "../components/NavbaarComp";
import CarouselComp from "../components/carouselComp";
import DestinationListComp from "../components/DestinationListComp";
import FeaturedToursComp from "../components/FeaturedToursComp";
import ReadtComp from "../components/ReadtComp";
import { FooterComp } from "../components/FooterComp";

export default function Home_page() {
  return (
    <>
      <HeaderComp />
      <NavbaarComp />
      <CarouselComp />
      <DestinationListComp />
      <FeaturedToursComp />
      <FooterComp />
    </>
  );
}
