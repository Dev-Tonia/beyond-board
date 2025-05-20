import React from "react";
import CustomButton from "../common/custom-button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full bg-tertiary text-white pt-24 overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute right-0 top-24 h-[90%] w-full md:w-5/12 hidden md:block ">
        <Image
          src="/img/intro-bg.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-right w-full"
          priority
        />
      </div>
      <div className="wrapper relative z-10 flex items-center h-full pb-20 pr-6">
        <div className="w-full md:w-6/12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold font-georgian flex flex-col">
            Understanding the Lived Experiences of Highly Educated African
            Immigrants in the United States: A Case Study of Nigerians Living in
            Maryland
          </h2>
          {/* <div className="mt-6 text-neutral-200">
            <h5 className=" font-bold font-georgian  text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ">
              Exploring the change of career for immigrants in new country.
            </h5>
            <p className=" text-lg md:text-xl lg:text-xl mt-7">
              With empathy and hope, these stories details successful career
              journeys that reflect the diversity and resilience of immigrants
              worldwide.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
