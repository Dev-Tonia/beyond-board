import React from "react";
import SecondHeading from "../common/second-heading";

export default function ResearchQuestions() {
  return (
    <section className=" py-16 lg:py-20 bg-[#DCEDCF]">
      <div className=" wrapper text-neutral-800">
        <SecondHeading
          title="Research Questions"
          textColor=" text-neutral-800"
        />
        <div className=" mt-5">
          <h6 className=" font-bold font-cabin text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            Central Research Questions
          </h6>

          <ul className=" list-disc list-inside text-lg lg:text-xl 2xl:text-2xl italic">
            <li>
              To what extent does migration to the United States hinder highly
              educated Nigerian professionals from fully leveraging their
              academic and professional qualifications?
            </li>
            <li>
              What social and institutional barriers hinder highly educated
              Nigerian professionals living in Maryland from achieving their
              career goals?
            </li>
          </ul>
        </div>
        <div className=" mt-9">
          <h6 className=" font-bold font-cabin text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            The following sub-questions support this broad inquiry:
          </h6>

          <ol className=" list-decimal list-inside text-lg lg:text-xl 2xl:text-2xl ">
            <li>
              What are the push and pull factors related to immigration,
              cultural assimilation, and the professional landscape?
            </li>
            <li>
              What challenges do highly educated African/Nigerian immigrants in
              the USA and specifically Maryland face in the professional
              landscape?
            </li>
            <li>
              What are the experiences of highly educated Nigerian/African
              immigrants in the U.S./Maryland regarding career development,
              cultural assimilation, and social integration?
            </li>
            <li>
              How do African and Nigerian immigrants navigate the dual cultural
              and economic challenges of their home country and their new home?
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
