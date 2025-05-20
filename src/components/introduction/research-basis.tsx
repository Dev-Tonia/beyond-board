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
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8 ">
            <h5 className=" font-bold font-georgian text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              What was your starting observation for this project?
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              There is empirical evidence that African immigrants in the United
              States are underpaid and hold jobs in positions where they are
              overqualified. 
            </p>
          </div>
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8">
            <h5 className=" font-bold font-georgian text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              What was your aim for this project?{" "}
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              To explore and understand the lived experiences of highly educated
              Nigerian immigrants residing in Maryland, USA, with a particular
              focus on their professional integration, career fulfillment, and
              the barriers they encounter in the U.S. labor market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
