import {
  StoriesHero,
  CommonStories,
  CustomButton,
  StoriesSection,
  FeaturedStories,
} from "@/components";
import React from "react";

export default function Stories() {
  return (
    <>
      <StoriesHero />
      <StoriesSection />
      <FeaturedStories />
    </>
  );
}
