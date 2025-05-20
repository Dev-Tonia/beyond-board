import React from "react";
import SecondHeading from "../common/second-heading";

export default function ResearchPhilosophy() {
  return (
    <section className=" py-16 lg:py-20">
      <div className=" wrapper text-neutral-800">
        <div className=" bg-[#F1F1F1] rounded-lg p-8 lg:p-10 2xl:p-12 ">
          <SecondHeading
            title="Research Philosophy"
            textColor=" text-neutral-800"
          />
          <p className=" text-lg lg:text-xl 2xl:text-2xl font-cabin mt-8">
            As a researcher, I believe that our realities are shaped by our
            perception as humans. I have subjective ontologies with
            interpretivist approaches which are often aligned with qualitative
            methodologies and inductive reasoning approaches.
          </p>
        </div>
      </div>
    </section>
  );
}
