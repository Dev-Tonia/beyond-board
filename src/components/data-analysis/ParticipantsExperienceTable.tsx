import React from "react";
import ThirdHeading from "../common/ThirdHeading";

const ParticipantsExperienceTable = () => {
  const data = [
    {
      category: "Accounting & Finance",
      totalYears: 149,
      totalExperience: 21,
      africaParticipants: 7,
      usParticipants: 3,
    },
    {
      category: "Consulting",
      totalYears: 11,
      totalExperience: 0,
      africaParticipants: 1,
      usParticipants: 0,
    },
    {
      category: "Education & Research",
      totalYears: 92,
      totalExperience: 38,
      africaParticipants: 7,
      usParticipants: 4,
    },
    {
      category: "Entrepreneurship",
      totalYears: 34,
      totalExperience: 0,
      africaParticipants: 2,
      usParticipants: 0,
    },
    {
      category: "Government Relations",
      totalYears: 23,
      totalExperience: 0,
      africaParticipants: 1,
      usParticipants: 0,
    },
    {
      category: "Healthcare & Support",
      totalYears: 26,
      totalExperience: 108,
      africaParticipants: 4,
      usParticipants: 14,
    },
    {
      category: "IT & Cybersecurity",
      totalYears: 34,
      totalExperience: 38,
      africaParticipants: 4,
      usParticipants: 5,
    },
    {
      category: "Law Enforcement",
      totalYears: 0,
      totalExperience: 8,
      africaParticipants: 0,
      usParticipants: 1,
    },
    {
      category: "Law Practice",
      totalYears: 15,
      totalExperience: 0,
      africaParticipants: 1,
      usParticipants: 0,
    },
    {
      category: "Media & Journalism",
      totalYears: 10,
      totalExperience: 0,
      africaParticipants: 1,
      usParticipants: 0,
    },
    {
      category: "Other / Undisclosed",
      totalYears: 0,
      totalExperience: 2,
      africaParticipants: 0,
      usParticipants: 1,
    },
    {
      category: "Sales/Business Development",
      totalYears: 31,
      totalExperience: 0,
      africaParticipants: 2,
      usParticipants: 0,
    },
    {
      category: "Transport & Gig Work",
      totalYears: 0,
      totalExperience: 11,
      africaParticipants: 0,
      usParticipants: 2,
    },
  ];

  return (
    <section className=" py-12">
      <div className="wrapper">
        <ThirdHeading
          title="Participants' Experience Comparison of Africa and US"
          textColor="text-neutral-800"
        />

        <div className="overflow-x-auto  shadow-lg mt-10 ">
          <table className="w-full border-collapse bg-[#EFEFEF] min-w-6xl text-neutral-800 text-lg  lg:text-xl 2xl:text-2xl font-bold">
            <thead>
              <tr className="bg-primary">
                <th className=" px-4 py-3 text-left text-white font-georgia ">
                  Professional Category
                </th>
                <th className=" px-4 py-3  text-white font-georgia ">
                  Total Years of Experience in the Market
                </th>
                <th className=" px-4 py-3  text-white font-georgia ">
                  Total Years of Experience in the US
                </th>
                <th className=" px-4 py-3  text-white font-georgia ">
                  Participants in Africa
                </th>
                <th className=" px-4 py-3  text-white font-georgia ">
                  Participants in U.S.
                </th>
              </tr>
            </thead>
            <tbody className=" text-nowrap">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className=" px-4 py-2 ">{row.category}</td>
                  <td className=" px-4 py-2  ">{row.totalYears}</td>
                  <td className=" px-4 py-2  ">{row.totalExperience}</td>
                  <td className=" px-4 py-2  ">{row.africaParticipants}</td>
                  <td className=" px-4 py-2  ">{row.usParticipants}</td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-semibold">
                <td className=" px-4 py-2 ">Total</td>
                <td className=" px-4 py-2  ">407</td>
                <td className=" px-4 py-2  ">226</td>
                <td className=" px-4 py-2  ">30</td>
                <td className=" px-4 py-2  ">30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsExperienceTable;
