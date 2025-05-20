import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function CulturalAssimilation() {
  return (
    <section className=" py-8">
      <div className="wrapper">
        <div className=" rounded-lg  bg-[#B0D0A9] p-8">
          <ThirdHeading
            title="Cultural Assimilation and Social Integration"
            textColor=" text-neutral-800"
          />
          <div className=" mt-8 flex flex-col md:flex-row gap-7 text-neutral-800">
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Key Focus
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Navigating US workplace norms, identity negotiation, gender and
                racial bias, maintaining ties to Nigerian culture.
              </p>
            </div>
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Insights
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Cultural differences and social misinterpretations affect career
                success and emotional wellbeing. Social networks are both a
                source of support and constraint.
              </p>
            </div>
          </div>
          <div className=" mt-8">
            <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
              Supporting Sources{" "}
            </h6>
            <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-3 ">
              Bayor (2018), Kebede (2020), Agubuzo (2024), Bashi (2007), Okome
              (2012), Corra (2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
