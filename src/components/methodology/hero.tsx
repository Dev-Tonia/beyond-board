import React from "react";
import CustomButton from "../common/custom-button";
import Image from "next/image";
import SecondHeading from "../common/second-heading";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-tertiary flex flex-col justify-center items-center text-white pt-36 overflow-hidden">
      <div className="absolute right-0 top-24 h-full w-full md:w-6/12 hidden md:block ">
        <Image
          src="/img/methodology-hero.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-right h-[50%] w-full"
          priority
        />
      </div>
      <div className="wrapper relative z-10 flex items-center h-full pb-20 pr-6">
        <div className="w-full md:w-5/12">
          <SecondHeading
            title="How we gather the story"
            className=" max-w-[400px]"
          />
          <div className="mt-6 text-neutral-200">
            <p className=" text-lg md:text-xl lg:text-xl mt-7">
              This study adopts a qualitative exploratory case study design,
              enabling in-depth exploration of the lived experiences of highly
              educated Nigerian immigrants in Maryland. The focus is on
              uncovering career development journeys, systemic barriers, and
              cultural adaptation strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
