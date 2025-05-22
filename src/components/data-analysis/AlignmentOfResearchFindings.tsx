import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";
import Image from "next/image";

export default function AlignmentOfResearchFindings() {
  return (
    <>
      <section className=" py-12">
        <div className="wrapper">
          <ThirdHeading
            title="How did these Research Findings Address the Original Research Questions?"
            textColor="text-neutral-800"
          />
          <SixthHeading
            title="Alignment of Research Findings with Research Questions"
            textColor="text-neutral-800"
          />
        </div>
      </section>

      <section className="relative min-h-screen w-full   py-12">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/img/research-finding.png"
            alt="Hero background"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10  wrapper space-y-6 ">
          {/* Central Research Question */}
          <div className=" bg-black/65 text-neutral-50  p-5 md:p-7 lg:p-9  rounded-xl ">
            <SixthHeading title="Central Research Question" />
            <div className=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-5 ">
              <p>
                How does migration to the U.S. affect the ability of highly
                educated Nigerian professionals to utilize their academic and
                professional expertise?
              </p>
              <p>
                -The majority of participants face credential devaluation,
                leading to underemployment and career mismatch.
              </p>
              <p>
                -Systemic barriers like licensing hurdles and discrimination
                restrict career access and upward mobility.
              </p>
              <p>
                -These challenges result in emotional strain, including
                frustration and reduced self-worth.
              </p>
              <p>
                - Only 10 out of 30 participants reported career fulfillment; 15
                felt unfulfilled, showing a significant gap between potential
                and outcome.
              </p>
            </div>
          </div>
          {/* Sub-question 1: Push and Pull Factors of Migration and Assimilation */}
          <div className=" bg-black/65 text-neutral-50  p-5 md:p-7 lg:p-9  rounded-xl ">
            <SixthHeading title="Sub-question 1: Push and Pull Factors of Migration and Assimilation" />
            <div className=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-5 ">
              <p>
                - Push factors: Economic instability, lack of professional
                growth in Nigeria.
              </p>
              <p>
                - Pull factors: Belief in better career opportunities and
                quality of life in the U.S.
              </p>
              <p>
                - Assimilation is complicated by cultural dissonance and
                identity negotiation in professional settings.
              </p>
            </div>
          </div>

          {/* Sub-question 2: Challenges in the U.S. Professional Landscape */}
          <div className=" bg-black/65 text-neutral-50  p-5 md:p-7 lg:p-9  rounded-xl ">
            <SixthHeading title="Sub-question 2: Challenges in the U.S. Professional Landscape" />
            <div className=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-5 ">
              <p>
                -Participants report credential non-recognition and complex
                licensing systems as key obstacles.
              </p>
              <p>
                - There’s a disconnect between foreign qualifications and U.S.
                job expectations, limiting entry and advancement.
              </p>
              <p>
                -Discriminatory practices and limited access to networks
                compound these difficulties.
              </p>
            </div>
          </div>

          {/* Sub-question 3: Career Development, Cultural Assimilation, and Social Integration */}
          <div className=" bg-black/65 text-neutral-50  p-5 md:p-7 lg:p-9  rounded-xl ">
            <SixthHeading title="Sub-question 3: Career Development, Cultural Assimilation, and Social Integration" />
            <div className=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-5 ">
              <p>
                -Participants struggle with cultural adaptation in workplaces.
              </p>
              <p>
                -Community support systems (churches, ethnic associations) help
                ease integration.
              </p>
              <p>
                 -Resilience strategies include re-skilling, entrepreneurship,
                and mentoring others.
              </p>
            </div>
          </div>
          {/* Sub-question 4: Managing Dual Cultural and Economic Challenges */}
          <div className=" bg-black/65 text-neutral-50  p-5 md:p-7 lg:p-9  rounded-xl ">
            <SixthHeading title="Sub-question 4: Managing Dual Cultural and Economic Challenges" />
            <div className=" text-lg md:text-xl lg:text-2xl 2xl:text-3xl mt-5 ">
              <p>
                -Participants experience extra economic burden of financial
                support for families back home.
              </p>
              <p>
                -Participants continuously negotiate between Nigerian and
                American norms.
              </p>
              <p>
                -This dual navigation informs their adaptation strategies and
                career decisions.
              </p>
              <p>
                -The findings emphasize the need for culturally informed support
                and policies that reflect immigrant realities.
              </p>
            </div>
          </div>

          {/* extrnal link */}
          <SixthHeading
            className=" space-x-2 mt-8"
            textColor=" text-neutral-800"
          >
            <span>
              {" "}
              For research question analysis please follow this link:
            </span>
            <a
              href="https://docs.google.com/document/d/1MRlWyacItvvA5NnWIJfFX9ZDPowoc1To/edit?usp=sharing&ouid=101093897556913123349&rtpof=true&sd=true"
              className="text-primary font-semibold hover:underline"
            >
              Research Question Analysis
            </a>
          </SixthHeading>
        </div>
      </section>
    </>
  );
}
