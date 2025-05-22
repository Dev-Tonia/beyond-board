import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function PromotingEmotionalMentalHealth() {
  return (
    <div className=" bg-black/[7%] lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6 rounded-2xl py-8 px-11">
      <ThirdHeading
        title="Promoting Emotional and Mental Health Support"
        textColor=" text-neutral-800"
      />
      {/* Challenge */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Challenge" textColor=" text-neutral-800" />
        <p>
          Several participants, such as Participants 22 and 27, reported
          experiencing stress, depression, and emotional fatigue due to
          professional displacement and economic strain.
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
              Culturally Responsive Counseling Services:
            </span>
            Partner with community-based organizations and faith groups to
            provide counseling tailored to the cultural contexts of African
            immigrants.
          </li>
          <li>
            <span className=" font-bold"> Peer Support Groups:</span>
            Facilitate group spaces where immigrants can share coping
            strategies, reduce isolation, and build community resilience.
          </li>
        </ul>
      </div>

      {/* Discussion */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Discussion" textColor=" text-neutral-800" />
        <p>
          Mental health is foundational to career and social success.
          Community-based services can reduce stigma and increase access,
          especially among African immigrant populations.
        </p>
      </div>
    </div>
  );
}
