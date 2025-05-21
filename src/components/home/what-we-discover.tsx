import React from "react";
import LeadingText from "../common/leading-text";
import CircularProgress from "../common/CircularProgress";
import { Sun } from "lucide-react";
import SixthHeading from "../common/sixth-heading";
import Image from "next/image";
import MigrationChart from "./MigrationChart";

export default function WhatWeDiscover() {
  return (
    <section className="  py-20">
      <div className=" wrapper">
        <div className=" max-w-xl ">
          <LeadingText
            title="What We Discovered"
            className=" text-neutral-800"
          />
        </div>

        <div className=" mt-6">
          {/* first section with chart */}
          <div className=" flex 2xl:gap-6 gap-3 flex-col lg:flex-row">
            <div className=" lg:w-4/12 flex items-center flex-col justify-center bg-[#EEFCF5] py-11 px-8 md:px-12 lg:px-16 2xl:px-24">
              <LeadingText title="30" className=" text-primary" />
              <p className="  md:text-lg   lg:text-xl 2xl:text-2xl font-cabin max-w-sm text-center ">
                Interviews conducted across west African countries.
              </p>
            </div>
            <div className=" lg:w-8/12 flex items-center flex-col justify-center bg-[#FFEFC5] py-11 px-8 lg:px-12 2xl:px-16 ">
              <div className=" flex gap-3 w-full">
                <div className="bg-[#FDE9B480] w-1/2 py-8 px-6">
                  <MigrationChart data={[23.33, 36.67, 23.33, 16.67]} />
                </div>
                <div className="bg-[#FDE9B480] w-1/2 py-8 px-6">
                  <MigrationChart
                    title="After Migrating"
                    data={[16.67, 43.33, 13.33, 26.67]}
                  />
                </div>
              </div>
              <p className="  md:text-lg  mt-4 lg:text-xl 2xl:text-2xl font-cabin text-center ">
                Most migrated professionals now work in healthcare despite
                diverse backgrounds.
              </p>
            </div>
          </div>
          {/*second section   */}
          <div className=" flex 2xl:gap-6 gap-3 flex-col md:flex-row mt-5">
            <div className=" md:w-5/12 flex items-center flex-col justify-center bg-[#EBDBFF] py-11 px-8 md:px-12 lg:px-16 2xl:px-24">
              <div className=" size-28  bg-[#B4A3FD73] rounded-full flex items-center justify-center">
                <Sun className=" size-16 text-neutral-50" />
              </div>

              <SixthHeading
                title="Impact "
                textColor=" text-neutral-800"
                className=" mt-5"
              />
              <p className="  md:text-lg   lg:text-xl 2xl:text-2xl font-cabin max-w-[350px] text-center ">
                Key themes of resilience, community and continuous learning.
              </p>
            </div>
            <div className=" md:w-7/12 bg-[#F7F7F7] relative flex  flex-col justify-center py-11 px-8 md:px-12 lg:px-16 2xl:px-24">
              <div className=" size-36 sm:size-52 lg:size-72 2xl:size-80 absolute bottom-0 right-0">
                <Image
                  src="/img/box-bg.png"
                  alt="box-bg"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  loading="lazy"
                  quality={100}
                />
              </div>
              <h4 className=" max-w-[300px] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold font-georgian ">
                Uncover what we learned through every journey.
              </h4>
              <button className=" py-4 text-center w-fit px-5 text-white bg-primary mt-8 font-nunito font-bold">
                See Full Conclusion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
