import React from "react";
import ThirdHeading from "../common/ThirdHeading";

export default function TheoreticalAndPracticalImplications() {
  return (
    <section className=" py-12">
      <div className="wrapper">
        <ThirdHeading
          title="Theoretical and Practical Implications"
          textColor="text-neutral-800"
        />
        <div className=" lg:text-xl md:text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6">
          <p className=" ">
            The findings support the view that migration and integration are
            multidimensional processes influenced by both structural forces and
            individual agency. Theoretically, this study strengthens frameworks
            around
            <span className=" font-bold">
              transnational identity, intersectionality of race and labor, and
              education-occupation mismatch.
            </span>
          </p>
          <div className="">
            <p>Practically, the study underscores the need for:</p>
            <ul className=" list-disc list-outside pl-4">
              <li>
                <span className=" font-bold">Credential recognition </span>
                reforms to enable fair valuation of foreign qualifications.
              </li>
              <li>
                <span className=" font-bold"> Anti-discrimination </span>
                measures targeting racial bias in professional settings.
              </li>
              <li>
                <span className=" font-bold"> Mentorship programs </span>
                connecting newly arrived African immigrants to successful
                professionals.
              </li>
              <li>
                <span className=" font-bold"> Mental health support </span>
                initiatives to address the emotional toll of underemployment and
                cultural displacement.
              </li>
            </ul>
          </div>

          <p>
            Without such interventions, the US risks underutilizing the immense
            talent and potential of African immigrant populations.
          </p>
          <p className=" font-bold">
            Pitfalls, Contradictions, and Gaps Identified
          </p>
          <p>
            While there was significant thematic overlap among participants,
            some contradictions emerged:
          </p>
          <ul className=" list-disc list-outside pl-4">
            <li>
              A few participants reported
              <span className=" font-bold">
                positive assimilation experiences and smooth professional
                reintegration,
              </span>
              especially those in IT and specialized healthcare fields where
              foreign skills are more easily recognized.
            </li>
            <li>
              Participants who migrated at a younger age or through structured
              professional programs (e.g., student visas, employer sponsorships)
              appeared to face fewer barriers.
            </li>
          </ul>
          <p>
            These contradictions suggest that factors such as
            <span className=" font-bold">
              field of specialization, age at migration,
            </span>
            and <span className=" font-bold"> migration </span> pathway play
            critical roles in shaping immigrant outcomes—an area that warrants
            deeper exploration in future research.
          </p>
          <div className="">
            <p>
              In addition, while the study heavily drew from narratives in
              Maryland, its findings may not fully generalize to Nigerian
              immigrants in less diverse states with fewer African community
              networks.
            </p>
            <p>
              The journey of highly educated Nigerian immigrants in Maryland is
              emblematic of broader systemic issues in US immigration and labor
              systems. While personal resilience and adaptability are admirable
              and often heroic, they are insufficient substitutes for systemic
              change. Credential recognition, equitable hiring practices, and
              culturally sensitive support services are urgently needed to allow
              immigrants to thrive rather than merely survive.
            </p>
            <p>
              Ultimately, addressing the barriers outlined in this study is not
              just a matter of immigrant welfare but of justice, equity, and
              tapping into the full potential of America's increasingly diverse
              and globalized talent pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
