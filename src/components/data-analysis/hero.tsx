import React from "react";
import CustomButton from "../common/custom-button";
import Image from "next/image";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-tertiary flex flex-col justify-center items-center  pt-24 overflow-hidden">
      <div className="absolute right-0 h-[90%] w-full md:w-5/12 hidden md:block ">
        <Image
          src="/img/data-analysis-hero.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-right w-full"
          priority
        />
      </div>
      <div className="wrapper relative z-10 flex items-center h-full pb-20 pr-6">
        <div className="w-full md:w-7/12">
          <ThirdHeading
            title="Uncovering the Journey: Key findings from the Interviews"
            className=" max-w-[600px]"
          />
          <div className="mt-6 text-neutral-50 ">
            <p className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-7">
              Data were analyzed using narrative analysis, focusing on how
              participants constructed meaning around their experiences of
              immigration, career development, and cultural adaptation.
              Interview transcripts were coded thematically using Nvivo
              software, focusing on both the content and structure of
              participants’ narratives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
