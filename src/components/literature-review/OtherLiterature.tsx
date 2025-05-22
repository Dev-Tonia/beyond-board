import React from "react";
import Image from "next/image";
import LeadingText from "../common/leading-text";
export default function OtherLiterature() {
  return (
    <>
      <section className="relative min-h-screen w-full   pb-20 pt-14">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/img/lit-review.png"
            alt="Hero background"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10  wrapper  ">
          <div className=" max-w-xl  mx-auto text-center bg-black/50">
            <LeadingText title=" Gaps in the Literature " />
          </div>
          {/* first section */}
          <div className=" bg-black/50 max-w-4xl text-neutral-50  p-5 md:p-9 xl:p-12 text-xl lg:text-2xl  mt-16">
            <ol className=" list-decimal list-outside px-3 space-y-4">
              <li>
                Overgeneralization of African Immigrants
                <ul className=" list-disc list-outside pl-4">
                  <li>
                    Most existing studies analyze “African immigrants” as a
                    broad category without disaggregating by nationality or
                    profession.
                  </li>
                  <li>
                    There is a lack of focused research on Nigerian
                    professionals, particularly those in healthcare,
                    engineering, and leadership roles.
                  </li>
                </ul>
              </li>
              <li>
                Under exploration of Maryland as a Case Study
                <ul className=" list-disc list-outside pl-4">
                  <li>
                    While some national-level data exist, there is limited
                    regional analysis on how specific states like Maryland, with
                    high concentrations of Nigerian immigrants, uniquely impact
                    their career and social outcomes.
                  </li>
                </ul>
                Existing migration reports mention Maryland’s opportunities but
                do not delve into lived professional experiences in the state.
              </li>
              <li>
                Lack of Intersectional Analysis (Gender, Race, Immigration
                Status)
                <ul className=" list-disc list-outside pl-4">
                  <li>
                    There’s insufficient research on the intersection of race,
                    gender, and immigration status, particularly how Nigerian
                    women navigate leadership roles and professional
                    advancement.
                  </li>
                  <li>
                    Many studies overlook the distinct experiences of Nigerian
                    women who face both gendered and racialized barriers in the
                    workplace.
                  </li>
                </ul>
              </li>
              <li>
                Limited Focus on Credential Devaluation and Professional
                Mismatch
                <ul className=" list-disc list-outside pl-4">
                  <li>
                    Few studies explore in depth how credential non-recognition
                    leads to education–occupation mismatches and chronic
                    underemployment.
                  </li>
                  <li>
                    Existing research often fails to connect policy and
                    institutional failures with these mismatches in a way that
                    informs local solutions.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          {/* second section */}
          <div className=" flex justify-end mt-20">
            <div className=" bg-black/50 max-w-4xl text-neutral-50  p-5 md:p-9 xl:p-12 text-xl lg:text-2xl  mt-16">
              <ol
                className=" list-decimal list-outside px-3 space-y-4"
                start={5}
              >
                <li>
                  Underrepresentation of Cultural Identity and Transnational
                  Tensions
                  <ul className=" list-disc list-outside pl-4">
                    <li>
                      There is a gap in studies that examine how cultural
                      identity, assimilation, and transnational ties shape
                      career decisions and social integration.
                    </li>
                    <li>
                      The psychological and emotional burden of identity
                      negotiation between Nigerian and American norms is
                      under-researched.
                    </li>
                  </ul>
                </li>
                <li>
                  Informal Networks and Cultural Capital Understudied
                  <ul className=" list-disc list-outside pl-4">
                    <li>
                      Most literature does not adequately address how informal
                      community networks (e.g., churches, ethnic associations)
                      serve as survival and adaptation tools.
                    </li>
                    <li>
                      The role of entrepreneurship, mentorship, and re-skilling
                      as forms of cultural capital is under-analyzed.
                    </li>
                  </ul>
                </li>
                <li>
                  Insufficient Narrative and Qualitative Evidence
                  <ul className=" list-disc list-outside pl-4">
                    <li>
                      Many existing studies rely on quantitative data and lack
                      rich, story-driven insights into how immigrants navigate
                      systemic barriers.
                    </li>
                    <li>
                      Personal perspectives, lived experiences, and qualitative
                      evidence are underutilized in informing policy and
                      workforce development strategies.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
