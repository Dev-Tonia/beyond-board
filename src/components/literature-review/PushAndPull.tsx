import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function PushAndPull() {
  return (
    <section className=" py-8">
      <div className="wrapper">
        <div className=" rounded-lg  bg-[#DCEDCF] p-8">
          <ThirdHeading
            title="Push and Pull Factors Driving Migration"
            textColor=" text-neutral-800"
          />
          <div className=" mt-8 flex flex-col md:flex-row gap-7 text-neutral-800">
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Key Focus
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Motivations for migration including economic and political
                instability in Nigeria and perceived professional opportunity in
                the US
              </p>
            </div>
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Insights
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Migration is driven by the hope of professional advancement, but
                the reality includes significant personal, institutional, and
                career recalibration upon arrival.
              </p>
            </div>
          </div>
          <div className=" mt-8">
            <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
              Supporting Sources{" "}
            </h6>
            <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-3 ">
              Arthur (2014), Oyebamiji & Asuelime (2019), Batalova & Zong
              (2017), Maryland Population and Migration Trends (2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
