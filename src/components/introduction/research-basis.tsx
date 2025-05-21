import React from "react";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";
import CustomButton from "../common/custom-button";
import Image from "next/image";

export default function ResearchBasis() {
  return (
    <section className=" py-16 lg:py-20">
      <div className=" wrapper text-neutral-800">
        <SecondHeading
          title="Research Basis"
          className=" max-w-[200px]"
          textColor=" text-neutral-800"
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-10">
          {/* first section */}
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8 ">
            <h5 className=" font-bold font-georgian text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              My Starting Observation for the Project
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              There is empirical evidence that African immigrants in the United
              States are underpaid and often work in positions for which they
              are overqualified.
            </p>
          </div>
          {/* second section */}
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8 ">
            <h5 className=" font-bold font-georgian text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              Reframing the Observation as a Problem
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              Highly educated Nigerian immigrants living in Maryland may
              experience a lower standard of living and struggle to achieve
              career fulfillment due to their inability to fully utilize their
              academic and professional skills
            </p>
          </div>
          {/* third section */}
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8 ">
            <h5 className=" font-bold font-georgian text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              Aim of the Research
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              The aim of this research is to provide deeper understanding into
              the challenges and barriers that prevent highly educated Nigerian
              immigrants living in Maryland from effectively utilizing their
              professional skills and achieving career fulfillment.
            </p>
          </div>
          {/* fourth section */}
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8">
            <h5 className=" font-bold font-georgian text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              The Research Audience
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              The primary audience for this research includes immigrant advocacy
              groups in Maryland and state government agencies such as the
              Department of Labor, the Department of Commerce, and the newly
              established Maryland Governor’s Office of Immigrant Affairs.
              Members of the public and the academic community in the state
              would also benefit from its findings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
