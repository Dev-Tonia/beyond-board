import React from "react";
import SecondHeading from "../common/second-heading";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function DataCollection() {
  const content = [
    {
      id: 1,
      title: "Recruitment",
      description: [
        "Reached out via community networks, social platforms, and referrals.",
        "Targeted individuals who experienced both migration and career change.",
      ],

      icon: "ph:megaphone-simple-light",
    },
    {
      id: 2,
      title: "In-Depth Interviews",
      description: [
        "30 participants (28 from Nigeria and 2 from Ghana) were interviewed.",
        " Interviews were conducted in English over Zoom, with participants’ consent.",
      ],
      icon: "ph:chat-circle-dots",
    },
    {
      id: 3,
      title: "Transcription & Translation",
      description: [
        "Interviews transcribed, anonymized, and translated if needed. Voice and tone preserved in edited narratives.",
      ],
      icon: "ph:notepad",
    },
    {
      id: 5,
      title: "Thematic Coding",
      description: [
        "Recurring themes such as cultural assimilation, resilience, systemic barriers were identified during thematic analysis with the use of Nvivo & inductive coding methods.",
      ],
      icon: "ph:chart-bar",
    },
  ];
  return (
    <section className="  pt-12 lg:pt-16 pb-16 lg:pb-20">
      <div className=" wrapper">
        <SecondHeading title="Data Collection" textColor=" text-neutral-800" />

        {/* data types */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-10 text-neutral-800">
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8 ">
            <h5 className=" font-bold font-cabin text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              Primary Data
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8  font-cabin">
              Data was collected through semi-structured interviews with 30
              African immigrants from Nigeria and Ghana, holding at least a
              bachelor’s degree. All interview sessions were conducted via Zoom
              and, lasted between 30–120 minutes.
            </p>
          </div>
          <div className=" bg-[#F7F7F7] rounded  py-10 md:py-14 px-5 md:px-8">
            <h5 className=" font-bold font-cabin text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              Secondary Data{" "}
            </h5>
            <p className=" md:text-lg lg:text-xl 2x:text-2xl mt-8  font-cabin">
              To complement the narratives, a review of policy documents, labor
              reports, migration studies, and prior scholarly work was
              conducted. This supported contextual analysis and triangulated
              findings for greater validity.
            </p>
          </div>
        </div>
        {/* collection process */}
        <div className=" mt-8">
          <h5 className=" font-bold font-cabin text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mb-10">
            Data Collection Process
          </h5>
          <div className=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {content.map((item, index) => (
              <div className=" " key={item.id}>
                <div className=" relative">
                  <div className=" size-24 bg-[#DCEDCF] flex items-center justify-center text-primary">
                    <Icon icon={item.icon} className=" size-14" />
                  </div>
                  {index !== content.length - 1 && (
                    <div className=" w-32 bg-primary h-[1px] left-10 absolute top-1/2 translate-1/2" />
                  )}{" "}
                </div>
                <div className=" mt-8">
                  <h6 className=" text-lg lg:text-xl 2xl:text-2xl font-bold font-cabin ">
                    {item.title}
                  </h6>
                  <div className=" text-sm lg:text-base mt-4">
                    {item.description.map((desc, index) => (
                      <p className="" key={index}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
