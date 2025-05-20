import React from "react";
import Image from "next/image";
import ThirdHeading from "../common/ThirdHeading";

export default function ExperienceAfrica() {
  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center pt-12 pb-16  overflow-hidden">
      <div className="absolute left-0 h-[90%] top-0 w-full md:w-4/12 hidden md:block">
        <Image
          src="/img/xprince.png"
          alt="Hero background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-right w-full"
          priority
        />
      </div>

      <div className="wrapper relative z-10 flex items-center justify-end h-full pb-20">
        <div className="w-full md:w-7/12 ml-auto">
          <ThirdHeading
            title="Experience in Africa and the US"
            textColor="text-neutral-800"
          />
          <div className="mt-6 text-neutral-800">
            <ul className="list-disc list-outside text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              <li>Total years of experience in Africa is 407 years</li>
              <li>Average years of experience in Africa is 14 years</li>
              <li>Total years of experience in the US is 226 years</li>
              <li>Average years of experience in the US is 8 years</li>
              <li>The oldest participant is 74 years old</li>
              <li>The youngest participant is 28 years old</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
