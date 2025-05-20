import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function EasingCulturalAssimilation() {
  return (
    <div className=" bg-black/[7%] lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6 rounded-2xl py-8 px-11">
      <ThirdHeading
        title="Easing Cultural Assimilation and Workplace Integration"
        textColor=" text-neutral-800"
      />
      {/* Challenge */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Challenge" textColor=" text-neutral-800" />
        <p>
          Many participants, including Participant 4 and 17, experienced
          miscommunications due to unfamiliarity with American workplace
          culture, resulting in exclusion or misunderstanding.
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
              Pre-Employment Cultural Orientation:
            </span>
            Provide job-specific cultural training programs that prepare
            immigrants for US workplace expectations, etiquette, and
            interpersonal communication.
          </li>
          <li>
            <span className=" font-bold">
              Cross-Cultural Competency Training:
            </span>
            Encourage employers to offer internal training for staff to
            understand cultural diversity and reduce implicit bias in team
            dynamics.
          </li>
        </ul>
      </div>

      {/* Discussion */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Discussion" textColor=" text-neutral-800" />
        <p>
          Bridging cultural misunderstandings enhances productivity, reduces
          workplace friction, and supports the retention of immigrant
          professionals.
        </p>
      </div>
    </div>
  );
}
