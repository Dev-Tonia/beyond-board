import React from "react";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function EthicalConsiderations() {
  return (
    <section className="  pt-16 lg:pt-32 pb-12 lg:pb-20">
      <div className=" wrapper ">
        <SecondHeading
          title="Ethical Considerations"
          className=" max-w-[200px] text-neutral-800"
        />
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 lg:gap-6">
          <div className=" bg-[#FDCA40] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <SixthHeading
              title="Informed Consent"
              className=" text-neutral-800"
            />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              The study followed all ethical protocols expected in social
              science research. Informed consent was obtained from all
              participants before the interviews, and participants were assured
              that their involvement was voluntary, with the right to withdraw
              at any time.
            </p>
          </div>
          <div className=" bg-[#B0D0A9] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <SixthHeading
              title="Anonymity & Confidentiality"
              className=" text-neutral-800"
            />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              Confidentiality was ensured through the use of pseudonyms and the
              anonymization of personal identifiable information.
            </p>
          </div>{" "}
          <div className=" bg-[#EBDBFF] rounded  py-10 md:py-14 px-5 md:px-8 mt-10">
            <SixthHeading title="Data Security" className=" text-neutral-800" />
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8 text-neutral-800 font-cabin">
              All digital recordings and transcripts were stored on a secure,
              password-protected device, in compliance with data security and
              privacy regulations. Ethical approval was sought and obtained from
              the relevant university research ethics committee prior to the
              commencement of data collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
