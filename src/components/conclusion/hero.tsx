import React from "react";
import CustomButton from "../common/custom-button";
import Image from "next/image";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-tertiary flex flex-col justify-center items-center text-white pt-24 overflow-hidden">
      <div className="absolute right-0 bottom-0 h-[70%] w-full md:w-6/12 hidden md:block ">
        <Image
          src="/img/conclusion-2.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-right h-[50%] w-[80%]"
          priority
        />
      </div>
      <div className="wrapper relative z-10 flex items-center h-full pb-20 pr-6">
        <div className="w-full md:w-6/12">
          <ThirdHeading
            title="Reimagining Integration for Nigerian Immigrant Professionals"
            className=" max-w-[600px]"
          />
          <div className="mt-6  ">
            <p className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-7">
              The findings, drawn from rich narrative interviews and supported
              by extensive literature, reveal a compelling duality: these
              immigrants are ambitious, adaptable, and resilient, yet
              persistently confronted with structural and cultural obstacles
              that hinder their full professional realization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
