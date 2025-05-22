import React from "react";
import SecondHeading from "../common/second-heading";

export default function ResearchConducted() {
  return (
    <section className=" bg-[#F3F9EB] py-16">
      <div className=" wrapper">
        <SecondHeading
          title="How the Research was Conducted"
          className="  max-w-xl"
          textColor="text-[#221F1F]"
        />
        <div className=" mt-5 lg:mt-8 space-y-5">
          <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-8 text-[#221F1F] font-cabin">
            The study uses semi-structured interviews to collect rich
            descriptive data and applies narrative analysis to interpret
            participants' stories, capturing the nuanced ways they make sense of
            their migration and professional journeys.
          </p>
        </div>
      </div>
    </section>
  );
}
