import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function CareerAdaptation() {
  return (
    <section className=" py-8">
      <div className="wrapper">
        <div className=" rounded-lg  bg-[#FDCA40F0] p-8">
          <ThirdHeading
            title="Career Adaptation and Resilience Strategies"
            textColor=" text-neutral-800"
          />
          <div className=" mt-8 flex flex-col md:flex-row gap-7 text-neutral-800">
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Key Focus
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Pursuing further education, mentorship, leveraging community
                networks, resilience in the face of cultural and economic
                marginalization.
              </p>
            </div>
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Insights
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Many immigrants adopt strategic pathways to adapt, including
                returning to school, building peer support networks, and seeking
                informal mentorship or entrepreneurship.
              </p>
            </div>
          </div>
          <div className=" mt-8">
            <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
              Supporting Sources{" "}
            </h6>
            <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-3 ">
              Arthur (2014), Bayor (2018), Ozoude (2020), Agubuzo (2024),
              Ogomaka (2019), Oleribe & de la Fuente (2022)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
