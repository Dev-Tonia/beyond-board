import React from "react";
import SecondHeading from "../common/second-heading";

export default function SamplingStrategy() {
  return (
    <section className=" py-12 lg:py-16">
      <div className=" wrapper">
        <SecondHeading textColor="text-neutral-800" title="Sampling Strategy" />
        <div className=" mt-5 lg:mt-8 text-neutral-800 lg:text-2xl md:text-xl text-lg 2xl:text-4xl  md:w-[95%] lg:w-[90%] 2xl:w-[85%]">
          <div className=" space-y-8">
            <p className="  ">
              The study used a purposive sampling technique to intentionally
              select participants who meet the inclusion criteria: African
              immigrants who hold at least a bachelor's degree, reside in
              Maryland, and have attempted to enter or currently participate in
              the US workforce. To broaden the pool and reach participants
              beyond initial networks, a snowball sampling strategy was also
              employed, where initial interviewees referred other qualified
              individuals.
            </p>
            <p>
              The sample comprised 30 participants (28 from Nigeria and 2 from
              Ghana), balanced across gender and professional backgrounds,
              ensuring diversity in sectors such as healthcare, engineering,
              education, business, and information technology. This sample size
              was deemed sufficient for thematic saturation in qualitative
              research, where new data no longer yields new insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
