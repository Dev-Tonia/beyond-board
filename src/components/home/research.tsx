import React from "react";
import Image from "next/image";
import LeadingText from "../common/leading-text";
import Link from "next/link";
export default function Research() {
  return (
    <section className="relative min-h-screen w-full   pb-20 pt-14">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/img/research-bg.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10  wrapper  ">
        <div className=" max-w-xl ">
          <LeadingText title=" About the research" />
        </div>
        <div className=" bg-black/50 text-neutral-50 text-center p-5 md:p-9 xl:p-12 max-w-xl mt-16">
          <h3 className=" font-georgian text-xl font-bold md:text-2xl lg:text-4xl 2xl:text-5xl">
             Aim of Research
          </h3>
          <p className="  md:text-lg   lg:text-xl 2xl:text-2xl font-cabin ">
            The aim of my research work is to provide additional background and
            a deeper understanding of the challenges and barriers preventing
            highly educated Nigerian immigrants living in Maryland from
            effectively utilizing their professional skills and achieving their
            career goals.
          </p>
          <div className="mt-8">
            <Link
              href={"/introduction"}
              className=" py-4 text-center text-white bg-secondary w-full px-5 mt-8 font-nunito font-bold"
            >
              View More Details
            </Link>
          </div>
        </div>
        <div className=" flex justify-end mt-20">
          <div className=" bg-black/50 text-neutral-50 text-center p-5 md:p-9 xl:p-12 max-w-xl ">
            <h3 className=" font-georgian text-xl font-bold md:text-2xl lg:text-4xl 2xl:text-5xl">
              Methodology
            </h3>
            <p className="  md:text-lg   lg:text-xl 2xl:text-2xl font-cabin ">
              The study uses semi-structured interviews to collect rich
              descriptive data and applies narrative analysis to interpret
              participants' stories, capturing the nuanced ways they make sense
              of their migration and professional journeys. Each interview
              lasted between 30 to 120 minutes and was recorded with
              participants' consent.
            </p>
            <div className="mt-8">
              <Link
                href={"/methodology"}
                className=" py-4 text-center text-white bg-secondary w-full px-5 mt-8 font-nunito font-bold"
              >
                View More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
