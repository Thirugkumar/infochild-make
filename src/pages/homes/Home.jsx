import React from "react";
import Hero from "../../components/home/Hero";
import WhyInfonits from "../../components/home/WhyInfonits";
import Casestudies from "../../components/home/Casestudies";
//import Blogs from "../../components/home/Blogs";
//import Learnhut from "../../components/home/Learnhut";
import Companies from "../../components/home/Companies";
import Map from "../../components/home/Map";
import Testimonial from "../../components/home/Testimonial";
import What from "../../components/home/What";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyInfonits />
      <What />
      <Casestudies />
      <Testimonial />
      <Map />
      <Companies />
      {/*  <Blogs />
       <Learnhut />*/}
    </>
  );
}
