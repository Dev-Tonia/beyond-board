import React from "react";
import CustomButton from "../common/custom-button";
import Image from "next/image";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-tertiary flex flex-col justify-center items-center text-white pt-36 overflow-hidden">
      <div className="absolute right-0 top-24 h-full w-full md:w-5/12 hidden md:block ">
        <Image
          src="/img/conclusion.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-right h-[50%] w-full"
          priority
        />
      </div>
      <div className="wrapper relative z-10 flex items-center h-full pb-20 pr-6">
        <div className="w-full md:w-7/12">
          <ThirdHeading title="Kolawole Akinyemi" className=" max-w-[600px]" />
          <div className="mt-6  ">
            <p className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-7">
              I’m a researcher and storyteller committed to amplifying the
              voices of highly educated Nigerian immigrants navigating life,
              career, and identity in the U.S. Through this project, I explore
              how ambition meets systemic barriers — and how, despite it all,
              people rise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
