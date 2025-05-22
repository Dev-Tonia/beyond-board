import React from "react";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";

export default function FocusAreas() {
  return (
    <section className="  pt-16 lg:pt-32 pb-12 lg:pb-20">
      <div className=" wrapper ">
        <SecondHeading
          title="Thematic Focus Areas"
          className=" max-w-[200px] text-neutral-800"
        />
        <div className=" grid md:grid-cols-2 gap-4 lg:gap-6">
          <div className=" bg-[#FDCA402E] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <ThirdHeading
              title="Push-Pull Factors"
              className=" text-neutral-800"
            />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              Explores the motivations behind migration, including the push of
              political and economic instability in Nigeria and the pull of
              perceived opportunity and security in the U.S.
            </p>
          </div>
          <div className=" bg-[#FDCA402E] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <ThirdHeading
              title="Cultural Assimilation/Social Integration"
              className=" text-neutral-800"
            />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              Examines how immigrants navigate new cultural environments,
              balancing the need to adapt to American norms while maintaining
              ties to Nigerian identity and values.
            </p>
          </div>{" "}
          <div className=" bg-[#FDCA402E] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <ThirdHeading
              title="Professional Challenges and Career Advancement"
              className=" text-neutral-800"
            />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              Investigates barriers to career entry and growth, such as
              credential devaluation, underemployment, licensing requirements,
              and systemic discrimination.
            </p>
          </div>
          <div className=" bg-[#FDCA402E] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <ThirdHeading
              title="Dual Cultural/Economic Challenges"
              className=" text-neutral-800"
            />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              Highlights the emotional and financial burden of adapting to a new
              culture while managing transnational responsibilities, including
              supporting family both in the U.S. and in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
