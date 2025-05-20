import React from "react";
import SecondHeading from "../common/second-heading";
import { ChevronLeftCircleIcon, ChevronRightCircle } from "lucide-react";
import Image from "next/image";

export default function FeaturedStories() {
  return (
    <section className=" bg-linear-to-t to-[#F3F9EB] from-[#B0D0A9] py-16">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <SecondHeading
            textColor="text-neutral-800"
            title="Featured Interesting Stories"
            className=" max-w-xl"
          />
          <div className=" flex gap-2">
            <ChevronLeftCircleIcon className=" size-16" />
            <ChevronRightCircle className=" size-16" />
          </div>
        </div>

        <div className=" bg-black/30 backdrop-blur-md p-5 lg:p-6 mt-9">
          <div className=" flex gap-7 z-10 relative">
            {/* picture */}
            <div>
              <div className=" h-72 w-80 relative">
                <Image
                  src="/img/stories1.png"
                  alt="Hero background"
                  fill
                  // sizes="100vw"
                  quality={100}
                  className=""
                  priority
                />
              </div>
              <p className=" text-neutral-50 font-cabin text-lg lg:text-xl 2xl:text-2xl text-center mt-3">
                Participant 2
              </p>
            </div>
            {/* description */}
            <div>
              <p className=" text-neutral-50 font-cabin text-lg lg:text-xl 2xl:text-2xl font-light">
                From boardroom prestige in Nigeria to volunteer roles in
                Maryland, Participant 2’s journey reflects the quiet anguish of
                a seasoned expert forced to start over. A 74-year-old chartered
                accountant and IT auditor with over three decades of leadership,
                his migration for family reunification collided with the
                systemic undervaluation of African credentials, ageist bias, and
                racial microaggressions. Despite holding 28 professional
                skillsets and once chairing a top firm, he found himself
                sidelined in a society that saw his qualifications as excess
                baggage. Yet through volunteerism, mentorship, and relentless
                adaptation, he continues to assert his value in spaces that
                rarely acknowledge it. His story embodies the resilience of
                elder immigrants whose legacies are too often eclipsed by the
                shadows of American gatekeeping.
              </p>
              <p className=" border-l-[4px] border-neutral-50 pl-4 mt-5 text-neutral-50 font-extralight italic font-cabin text-lg lg:text-xl 2xl:text-2xl">
                Despite being chairman of a thriving firm back home, I had to
                start all over from square one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* <div class="h-14 "></div> */
}
