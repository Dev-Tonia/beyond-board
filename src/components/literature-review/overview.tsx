import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function Overview() {
  return (
    <section className=" py-12 lg:py-16">
      <div className=" wrapper">
        <ThirdHeading textColor="text-neutral-800" title="Overview" />
        <p className=" lg:text-2xl md:text-xl text-lg 2xl:text-4xl  mt-5 lg:mt-8 text-neutral-700">
          Adopting a narrative summary method to write my literature review
          helped me to align the depth of my literature to the 4-sub research
          questions which resulted in the 4 themes below. The questions I asked
          the participants are based on these 4 themes with additional questions
          on demographic information and policy recommendations.
        </p>
      </div>
    </section>
  );
}
