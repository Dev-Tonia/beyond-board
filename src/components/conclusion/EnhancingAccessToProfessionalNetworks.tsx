import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function EnhancingAccessToProfessionalNetworks() {
  return (
    <div className=" bg-black/[7%] lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6 rounded-2xl py-8 px-11">
      <ThirdHeading
        title="Enhancing Access to Professional Networks and Mentorship"
        textColor=" text-neutral-800"
      />
      {/* Challenge */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Challenge" textColor=" text-neutral-800" />
        <p>
          Participants like Participant 20 and 21 reported limited access to
          professional networking or referrals, which restricted their career
          advancement opportunities.
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
            <span className=" font-bold">Funded Networking Platforms:</span>
            Support African-led professional associations to host events,
            mentorship programs, and skill-building workshops that increase
            industry access for immigrants.
          </li>
          <li>
            <span className=" font-bold">
              Job Referral and Credential Portals:
            </span>
            Develop state-sponsored online portals where immigrants can search
            for vetted job openings, licensing guidelines, and mentorship
            opportunities.
          </li>
        </ul>
      </div>

      {/* Discussion */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Discussion" textColor=" text-neutral-800" />
        <p>
          Professional integration hinges on visibility and access to informal
          channels of career mobility. Expanding networks can accelerate the
          career recovery and upward mobility of immigrant professionals.
        </p>
      </div>
    </div>
  );
}
