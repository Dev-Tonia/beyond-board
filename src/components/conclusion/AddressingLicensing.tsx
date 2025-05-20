import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function AddressingLicensing() {
  return (
    <div className=" bg-black/[7%] lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6 rounded-2xl py-8 px-11">
      <ThirdHeading
        title="Addressing Licensing and Certification Barriers"
        textColor=" text-neutral-800"
      />
      {/* Challenge */}
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Challenge" textColor=" text-neutral-800" />
        <p>
          Participants in regulated professions (e.g., law, healthcare,
          education, and accounting) described significant challenges in
          transferring their qualifications to the US workforce. For instance,
          Participant 1 had to repeat coursework already covered in Nigeria, and
          Participant 22 found the legal licensing system virtually
          inaccessible.
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
            <span className=" font-bold">Bridge Certification Programs:</span>
            Federal and state agencies should fund universities and professional
            boards to create short-term, intensive bridge certification pathways
            that build on the prior training of foreign-educated professionals.
            These programs should reduce redundancy and cost while maintaining
            rigor.
          </li>
          <li>
            <span className=" font-bold">Licensing Scholarships:</span>
            Introduce targeted grant programs to help skilled immigrants afford
            licensing exams, coursework, and preparation materials in fields
            with talent shortages.
          </li>
          <li>
            <span className=" font-bold">Credential Fast-Track Projects:</span>
            State licensing boards should collaborate with immigrant-serving
            organizations to pilot expedited licensing pathways for
            foreign-trained professionals with verifiable experience and
            credentials.
          </li>
        </ul>
      </div>
      <div className=" bg-black/10  px-4 py-6  space-y-5">
        <SixthHeading title="Discussion" textColor=" text-neutral-800" />
        <p>
          These measures would help reduce recertification time and financial
          burdens, thereby improving workforce integration and productivity for
          highly skilled immigrants.
        </p>
      </div>
    </div>
  );
}
