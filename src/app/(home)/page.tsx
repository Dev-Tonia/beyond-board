import {
  HomeHeroSection,
  CommonStories,
  Research,
  VideoSection,
  WhatWeDiscover,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return ( 
    <>
      <HomeHeroSection />
      <CommonStories />
      <Research />
      <VideoSection />
      <WhatWeDiscover />
    </>
  );
}
