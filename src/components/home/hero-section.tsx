"use client";
import React, { useEffect, useState } from "react";
import LeadingText from "../common/leading-text";
import CustomButton from "../common/custom-button";
import SecondHeading from "../common/second-heading";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full flex items-end justify-center pb-20 pt-36">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay={isClient}
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/video/Africa-Immigrant-Story.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-4 text-center ">
        <div className="max-w-4xl mx-auto">
          <SecondHeading title="From Africa to America: Stories of Highly Educated Nigerian Immigrants" />

          <CustomButton
            title=" Explore their Stories"
            onClick={() => {
              router.push("/stories");
            }}
          />
        </div>
        <div className=" relative w-fit py-12 px-20 2xl:px-24 max-w-5xl 2xl:max-w-7xl mx-auto mt-20">
          <div className="absolute inset-0 w-full h-full bg-black/50" />
          <div className="  relative z-10">
            <h3 className=" font-georgian text-center font-bold text-neutral-50 text-4xl 2xl:text-5xl mb-6  ">
              Incredible Journeys of 30 Immigrants in Maryland
            </h3>
            <p className=" text-neutral-200 font-cabin 2xl:text-xl text-center">
              How they overcome credentialing barriers, find meaningful work,
              adapt culturally, build community, confront discrimination,
              negotiate identity, and pursue fulfilling careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
