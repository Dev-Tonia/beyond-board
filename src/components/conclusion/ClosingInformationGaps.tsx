import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function ClosingInformationGaps() {
  return (
    <div className=" bg-black/[7%] lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6 rounded-2xl py-8 px-11">
      <ThirdHeading
        title="Closing Information Gaps and Strengthening Support Networks"
        textColor=" text-neutral-800"
      />
      {/* Challenge */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Challenge" textColor=" text-neutral-800" />
        <p>
          Participants like Participant 25 and 23 emphasized how misinformation
          or a lack of support delayed their progress in career and
          credentialing pathways.
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
            <span className=" font-bold">Immigrant Welcome Centers: </span>
            Establish one-stop community hubs to provide accurate, multilingual
            information on education equivalency, job opportunities, housing,
            and legal aid.
          </li>
          <li>
            <span className=" font-bold"> Mentorship Networks: </span>
            Fund initiatives that connect new immigrants with experienced
            professionals from similar backgrounds to offer personalized
            guidance and moral support.
          </li>
        </ul>
      </div>

      {/* Discussion */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Discussion" textColor=" text-neutral-800" />
        <p>
          When newcomers receive accurate and timely information, they are more
          likely to navigate systems efficiently, reducing underemployment and
          professional stagnation.
        </p>
      </div>
    </div>
  );
}
