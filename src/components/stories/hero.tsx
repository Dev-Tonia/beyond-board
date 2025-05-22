import React from "react";
import CustomButton from "../common/custom-button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-50 text-neutral-800 pt-[90px]">
      <div className="absolute  right-0 w-1/2 h-[89%] hidden md:block">
        <Image
          src="/img/stories-bg.png"
          alt="Hero background"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover object-right  w-full"
          priority
        />
      </div>
      <div className="wrapper relative z-10 flex items-center min-h-[90vh] pb-20 pt-36">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl max-w-sm">
            Real People. Real Journeys.
          </h2>
          <p className="font-cabin text-lg sm:text-xl lg:text-2xl 2xl:text-3xl mt-5">
            Discover the inspiring stories of immigrants who reimagined their
            futures across new lands. Stories of strength from people who
            started over — and thrived.
          </p>
        </div>
      </div>
    </section>
  );
}
