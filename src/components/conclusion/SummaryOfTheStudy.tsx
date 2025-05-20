import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function SummaryOfTheStudy() {
  return (
    <section className=" py-12">
      <div className="wrapper">
        <ThirdHeading
          title="Summary of the Study"
          textColor="text-neutral-800"
        />
        <div className=" lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6">
          <p>
            This study critically examined the professional, cultural, and
            social integration experiences of highly educated Nigerian
            immigrants living in Maryland. Motivated by the persistent
            observation that African immigrants in the United States are often
            underemployed and occupy positions for which they are overqualified,
            the study sought to understand the extent to which migration
            influences or alters the utilization of academic and professional
            skills among Nigerian immigrants.
          </p>
          <p>
            The research uncovered several key findings through a qualitative
            exploratory case study design, employing semi-structured interviews
            with 30 participants and secondary data analysis. Migration was
            driven by strong push factors such as political instability,
            economic stagnation, and personal insecurity in Nigeria, and pull
            factors like perceived professional opportunities, safety, and
            better living standards in the United States. However, participants
            encountered formidable systemic barriers in the US labor market,
            including credential devaluation, structural discrimination, and
            restrictive licensing systems.
          </p>
          <p>
            The findings also revealed the significant cultural challenges faced
            during assimilation, including identity negotiation, social
            isolation, and emotional health struggles. Participants navigated
            dual economic pressures — managing survival in the US while
            supporting family obligations in Nigeria — which further complicated
            their integration processes. Despite these obstacles, many
            participants demonstrated resilience and strategic adaptability,
            leveraging community networks, entrepreneurial ventures, and further
            education to rebuild their professional lives.
          </p>
          <p>
            The study confirms and extends existing scholarship on African
            immigrant experiences while offering localized, narrative-rich
            insights into Nigerian professionals' specific challenges and
            strategies in Maryland. It highlights the critical need for policy
            reforms, professional support structures, and broader societal
            changes to ensure that the talents and contributions of African
            immigrants are fully recognized and utilized.
          </p>
        </div>
      </div>
    </section>
  );
}
