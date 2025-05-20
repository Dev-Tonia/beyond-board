import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function SystemicBarriers() {
  return (
    <section className=" py-8">
      <div className="wrapper">
        <div className=" rounded-lg  bg-[#EBDBFF] p-8">
          <ThirdHeading
            title="Systemic Barriers to Professional Integration"
            textColor=" text-neutral-800"
          />
          <div className=" mt-8 flex flex-col md:flex-row gap-7 text-neutral-800">
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Key Focus
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Credential non-recognition, discriminatory hiring,
                underemployment, restrictive visa policies, and lack of
                licensing pathways.
              </p>
            </div>
            <div className=" bg-black/10  px-4 py-6">
              <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
                Insights
              </h6>
              <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-5  ">
                Despite advanced degrees, Nigerian immigrants face mismatches
                between qualifications and job roles. Structural barriers,
                including licensing delays and immigration status, prevent
                access to commensurate employment.
              </p>
            </div>
          </div>
          <div className=" mt-8">
            <h6 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold ">
              Supporting Sources{" "}
            </h6>
            <p className=" text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-3 ">
              Thomas (2010), Capps et al. (2012), Migration Policy Institute
              (2015), Elo et al. (2015), Agubuzo (2024), Ozoude (2020), Arthur
              (2000), Oleribe & de la Fuente (2022)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
