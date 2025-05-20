import React from "react";
import SecondHeading from "../common/second-heading";
import Image from "next/image";
import BigArrow from "./big-arrow";
import { ArrowRight } from "lucide-react";

export default function ProjectStage() {
  return (
    <section className="  pt-24  pb-16  ">
      <div className=" wrapper">
        <SecondHeading
          title="Project Stage"
          className=" max-w-[200px] text-neutral-800"
        />
        <div className=" relative mt-10 bg-[#F7F7F7] flex flex-col justify-center items-center py-14 rounded-[2px]">
          {/* bg image */}
          <div className=" size-36 2xl:size-48 absolute bottom-0 right-0">
            <Image
              src="/img/intro-project.png"
              alt="box-bg"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
              quality={100}
            />
          </div>
          <div className=" flex flex-wrap gap-3 items-center">
            <div className=" flex items-center gap-3">
              <p className=" md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-cabin ">
                Project Topic
              </p>
              <BigArrow />
            </div>

            <div className=" flex items-center gap-3">
              <p className=" md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-cabin ">
                Methodology/Interviews
              </p>
              <BigArrow />
            </div>
            <div className=" flex items-center gap-3">
              <p className=" md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-cabin ">
                Data Analysis
              </p>
              <BigArrow />
            </div>
            <div className=" flex items-center gap-3">
              <p className=" md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-cabin ">
                Research Findings
              </p>
              <BigArrow />
            </div>
            <div className=" flex items-center gap-3">
              <p className=" md:text-xl lg:text-2xl 2xl:text-3xl  font-bold font-cabin ">
                Recommendations{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
