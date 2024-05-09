import React, { useRef } from "react";
import HeaderComp from "../components/headerComp";
import NavbaarComp from "../components/NavbaarComp";
import CarouselComp from "../components/carouselComp";
import DestinationListComp from "../components/DestinationListComp";
import FeaturedToursComp from "../components/FeaturedToursComp";
import { FooterComp } from "../components/FooterComp";

export default function Home_page() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <HeaderComp />
      <NavbaarComp />
      <CarouselComp />
      <DestinationListComp bookNow={() => executeScroll()} />
      <div ref={myRef}>
        <FeaturedToursComp />
      </div>
      <FooterComp />
    </>
  );
}
