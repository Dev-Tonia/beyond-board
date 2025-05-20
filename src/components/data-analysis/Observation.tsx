import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function Observation() {
  return (
    <section className=" py-12 bg-[#F3F9EB]">
      <div className="wrapper">
        <ThirdHeading title="Observation" textColor=" text-neutral-800" />
        <ol className=" list-decimal list-outside px-3 space-y-1 text-xl lg:text-2xl 2xl:text-3xl">
          <li>
            Underutilization of Skills:
            <ul className=" list-disc list-outside pl-4">
              <li>
                Accounting & Finance: 149 years of experience in Africa vs. only
                21 years in the U.S., and fewer participants continuing in that
                field (7 → 3).
              </li>
              <li>
                Education & Research: Also shows a steep drop in participants (7
                → 4) and experience years (92 → 38).
              </li>
              <li>
                Entrepreneurship, Government, Law, and Journalism: Completely
                discontinued by participants in the U.S.
              </li>
            </ul>
          </li>
          <li>
            Career Shifts:
            <ul className=" list-disc list-outside pl-4">
              <li>
                Healthcare & Support shows the reverse: 26 years in Africa vs.
                108 years in the U.S., with more participants entering the field
                (4 → 14).
              </li>
              <li>
                Transport & Gig Work and Law Enforcement also appear only in the
                U.S., likely reflecting career pivots driven by accessibility,
                licensing challenges, or economic necessity.
              </li>
            </ul>
          </li>
          <li>
            Field Continuity:
            <ul className=" list-disc list-outside pl-4">
              <li>
                IT & Cybersecurity remains relatively stable in both years and
                participant count (4 → 5), indicating a smoother transition for
                tech professionals.
              </li>
            </ul>
          </li>
          <li>
            Loss of Professional Identity:
            <ul className=" list-disc list-outside pl-4">
              <li>
                Several professions such as law, consulting, sales and business
                development, entrepreneurship, media and journalism and
                government relations show zero continuation in the U.S. —
                starkly illustrating professional displacement or forced
                transitions.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
