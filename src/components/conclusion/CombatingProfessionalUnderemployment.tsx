import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function CombatingProfessionalUnderemployment() {
  return (
    <div className=" bg-black/[7%] lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6 rounded-2xl py-8 px-11">
      <ThirdHeading
        title="Combating Professional Underemployment"
        textColor=" text-neutral-800"
      />
      {/* Challenge */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Challenge" textColor=" text-neutral-800" />
        <p>
          Highly educated immigrants, such as Participant 10, a former finance
          director, and Participant 7, a PhD holder, reported working in factory
          jobs or administrative roles due to limited employment pathways
          aligned with their qualifications.
        </p>
      </div>
      {/* Policy Recommendations */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading
          title="Policy Recommendations"
          textColor=" text-neutral-800"
        />
        <ul className=" list-disc list-outside pl-4">
          <li>
            <span className=" font-bold">
              Skilled Immigrant Employment Hubs:
            </span>
            Create state-supported centers to connect employers with highly
            skilled immigrants, offering resume support, credential evaluation,
            and job placement.
          </li>
          <li>
            <span className=" font-bold"> Employer Incentives: </span>
            Offer tax breaks or subsidies to companies that hire and mentor
            foreign-trained professionals, especially in high-demand fields like
            STEM, education, and healthcare.
          </li>
        </ul>
      </div>

      {/* Discussion */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Discussion" textColor=" text-neutral-800" />
        <p>
          By recognizing and utilizing their human capital, these policies
          empower immigrants and fill local labor market gaps with underutilized
          talent.{" "}
        </p>
      </div>
    </div>
  );
}
